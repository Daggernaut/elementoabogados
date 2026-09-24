# Elemento Abogados — Sitio Web Corporativo

Sitio web bilingüe (español/inglés) para la firma legal **Elemento Abogados** (Guatemala).
Presenta la firma, su equipo (socios y asociados con perfiles individuales), 13 áreas de
práctica con subpáginas propias, páginas legales y un formulario de contacto con envío de
correo transaccional.

Producción: https://elementoabogados.lovable.app

---

## Tecnologías

| Capa | Tecnología |
| --- | --- |
| Framework | TanStack Start v1 (SSR full-stack sobre Vite 7) |
| Router | TanStack Router (file-based routing en `src/routes/`) |
| UI | React 19 + TypeScript |
| Estilos | Tailwind CSS v4 (tokens en `src/styles.css`) + shadcn/ui (Radix UI) |
| Animación | `motion` (Framer Motion), `embla-carousel-react`, `tw-animate-css` |
| Data fetching | TanStack Query v5 |
| Validación | Zod + React Hook Form |
| Emails | `@react-email` + `@lovable.dev/email-js` (correo transaccional gestionado por Lovable) |
| Server functions | `createServerFn` de `@tanstack/react-start` (RPC tipado) |
| Runtime server | Cloudflare Workers (workerd, vía Nitro) |

## Requisitos

- Node.js (recomendado vía [nvm](https://github.com/nvm-sh/nvm))
- npm, pnpm o bun

## Instalación local

```sh
git clone <url-del-repositorio>
cd <nombre-del-repo>
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173` (puerto por defecto de Vite).

## Comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción |
| `npm run build:dev` | Build en modo desarrollo (prerender de diagnóstico) |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Variables de entorno

Se leen **únicamente en el servidor** (nunca en el cliente). No hay archivo `.env`
comprometido en el repo; en producción las provee la plataforma.

| Variable | Uso | Dónde se usa |
| --- | --- | --- |
| `LOVABLE_API_KEY` | Autentica el envío de correos transaccionales y el endpoint de preview de plantillas | `src/lib/email-templates/send-email.ts`, `src/routes/lovable/email/transactional/preview.ts` |
| `LOVABLE_SEND_URL` | Endpoint del servicio de envío de correo | `src/lib/email-templates/send-email.ts` |
| `NODE_ENV` | Entorno de ejecución | `src/lib/config.server.ts` |

No hay variables `VITE_*` públicas actualmente.

## Estructura principal

```text
src/
├── router.tsx                    # createRouter + QueryClient
├── server.ts                     # Entry SSR con wrapper de errores
├── start.ts                      # createStart + middleware de errores
├── styles.css                    # Tailwind v4 + tokens de diseño
├── assets/                       # Imágenes, logos y presentaciones descargables
├── components/
│   ├── legal-page.tsx            # Layout compartido de páginas legales
│   └── ui/                       # Componentes shadcn/ui
├── hooks/use-mobile.tsx
├── lib/
│   ├── i18n.tsx                  # LanguageProvider ES/EN (persiste en localStorage)
│   ├── translations.ts           # Diccionario de textos ES/EN
│   ├── services.ts / services.en.ts   # 13 áreas de práctica (contenido)
│   ├── team.ts / team.en.ts           # Socios y asociados (contenido)
│   ├── localize.ts               # Helpers de localización de contenido
│   ├── legal-content.ts          # Contenido de políticas y términos
│   ├── contact.functions.ts      # Server function del formulario de contacto
│   ├── email-templates/          # Plantilla + registro + envío de correo
│   ├── config.server.ts          # Config server-only
│   └── error-capture.ts / error-page.ts / lovable-error-reporting.ts
└── routes/
    ├── __root.tsx                # Shell raíz (head, providers, 404, error)
    ├── index.tsx                 # Home (nav, footer y secciones compartidas)
    ├── nosotros.tsx
    ├── equipo.index.tsx          # Listado de equipo
    ├── equipo.$slug.tsx          # Perfil individual por socio/asociado
    ├── servicios.index.tsx       # Listado de áreas
    ├── servicios.$slug.tsx       # Área de práctica individual
    ├── servicios.banca-y-finanzas.tsx
    ├── politica-de-privacidad.tsx
    ├── terminos-y-condiciones.tsx
    └── lovable/email/transactional/preview.ts   # Preview interno de plantillas (protegido por LOVABLE_API_KEY)
```

## Internacionalización

- Idiomas: español (default) e inglés.
- El estado vive en `LanguageProvider` (`src/lib/i18n.tsx`) montado en `__root.tsx`, por lo que
  persiste al navegar entre páginas; la preferencia se guarda en `localStorage` (`ea-lang`).
- Contenido estático: `translations.ts`; contenido de servicios y equipo: archivos `.en.ts`
  paralelos combinados vía `localize.ts`.

## Integraciones backend

- **Server functions (TanStack Start):** `sendContactInquiry` en
  `src/lib/contact.functions.ts` procesa el formulario de contacto (validación con Zod) y
  envía el correo a la firma mediante la plantilla `contact-inquiry`.
- **Correo transaccional (Lovable Email):** `src/lib/email-templates/` renderiza plantillas
  con `@react-email` y las envía con `@lovable.dev/email-js`. Remitente configurado con el
  dominio verificado `notify.elementoabogados.com`.
- **Endpoint interno:** `POST /lovable/email/transactional/preview` renderiza las plantillas
  registradas; requiere `Authorization: Bearer $LOVABLE_API_KEY`.

No hay otras APIs externas, webhooks ni integraciones de terceros.

## Base de datos

**El proyecto no utiliza base de datos.** Todo el contenido (equipo, servicios, textos legales)
es estático en `src/lib/*.ts`. No hay autenticación de usuarios ni almacenamiento persistente
más allá de `localStorage` para la preferencia de idioma.

## Formularios

Único formulario: **contacto** (sección en el home).

- Campos: nombre, correo y mensaje (validados con Zod, límites de longitud incluidos).
- Envío vía la server function `sendContactInquiry`.
- Efecto: correo transaccional a `info@elementoabogados.com` con `reply-to` del remitente.

## SEO

Cada ruta define su propio `head()` con título, descripción, Open Graph y Twitter Card
únicos; `__root.tsx` define el favicon (`public/favicon.png`), fuentes y `og:type`.
Las rutas dinámicas devuelven `noindex` cuando el perfil o área no existe.

## Deployment

1. El proyecto se despliega desde la plataforma **Lovable** con el botón **Publish**.
2. Los cambios de frontend requieren confirmar **Update** en el diálogo de publicación;
   los cambios de backend (server functions, rutas de API) se despliegan automáticamente.
3. El build se genera con `vite build` y corre sobre Cloudflare Workers (target Nitro).
4. Las variables de entorno (`LOVABLE_API_KEY`, `LOVABLE_SEND_URL`) las inyecta la
   plataforma; no requieren configuración manual.
5. Para self-hosting, seguir la [guía oficial](https://docs.lovable.dev/tips-tricks/self-hosting).

---

Construido con [Lovable](https://lovable.dev) ·
[Abrir en el editor](https://lovable.dev/projects/a06efe82-63f9-4461-ae37-a87694596e85)
