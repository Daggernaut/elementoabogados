import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Award,
  GraduationCap,
  Globe2,
  TrendingUp,
  UserCheck,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { Nav, Footer } from "./index";
import aboutCity from "@/assets/about-city.jpg.asset.json";
import teamGroup from "@/assets/equipo-contacto.png.asset.json";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Acerca de nosotros | Elemento Abogados" },
      {
        name: "description",
        content:
          "Firma legal guatemalteca con más de 10 años de experiencia: asesoría integral, equipo especializado, alcance internacional y atención personalizada.",
      },
      { property: "og:title", content: "Acerca de nosotros | Elemento Abogados" },
      {
        property: "og:description",
        content:
          "Asesoría legal integral y personalizada, con soluciones claras, efectivas y orientadas a resultados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NosotrosPage,
});

const capabilities = [
  {
    icon: Award,
    title: "Experiencia comprobada",
    desc: "Más de 10 años asesorando a empresas, bancos y particulares en asuntos legales complejos dentro y fuera de Guatemala.",
  },
  {
    icon: GraduationCap,
    title: "Equipo especializado",
    desc: "Abogados con maestrías y certificaciones internacionales que cubren las áreas clave del derecho empresarial.",
  },
  {
    icon: Globe2,
    title: "Alcance internacional",
    desc: "Alianzas con firmas regionales que nos permiten acompañar operaciones transfronterizas y cumplir normativas en varias jurisdicciones.",
  },
  {
    icon: TrendingUp,
    title: "Resultados demostrables",
    desc: "Casos de éxito que incluyen cierres de financiamiento, litigios favorables y estructuración de proyectos de infraestructura de alto impacto.",
  },
  {
    icon: UserCheck,
    title: "Atención personalizada",
    desc: "Asignamos un socio director a cada cliente para asegurar respuestas rápidas, soluciones a la medida y comunicación transparente.",
  },
  {
    icon: Cpu,
    title: "Innovación jurídica",
    desc: "Usamos tecnología legal y procesos ágiles para documentos, firmas electrónicas y seguimiento en tiempo real de expedientes.",
  },
];

const stats = [
  { value: "10", label: "años de experiencia" },
  { value: "13", label: "áreas de práctica" },
  { value: "500+", label: "casos resueltos" },
];

const values = [
  { title: "Ética", desc: "Cada decisión se toma con integridad y respeto por el marco legal." },
  { title: "Excelencia", desc: "Rigor técnico y eficiencia en cada documento, audiencia y negociación." },
  { title: "Confidencialidad", desc: "Discreción absoluta en todos los asuntos que se nos confían." },
  { title: "Cercanía", desc: "Comunicación clara y constante con cada cliente, sin tecnicismos innecesarios." },
];

function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      <section className="relative isolate overflow-hidden bg-primary-deep pt-32 text-primary-foreground">
        <img
          src={aboutCity.url}
          alt="Ciudad de Guatemala"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/85 to-primary/60"
          aria-hidden
        />
        <div className="absolute inset-0 grid-pattern opacity-20 mix-blend-overlay" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-14">
          <nav className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <span className="text-white">Nosotros</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-tight sm:text-6xl"
          >
            Abogados de primer nivel con más de 10 años de experiencia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg text-white/80"
          >
            Brindamos asesoría legal integral y personalizada, con soluciones claras, efectivas y orientadas a
            resultados. Defendemos tus intereses con ética, estrategia y compromiso para que tu tranquilidad legal
            esté siempre en manos de expertos.
          </motion.p>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="px-2 py-10 sm:px-10"
            >
              <div className="font-display text-4xl font-bold text-primary sm:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Lo que nos define
            </span>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                className="group bg-card p-8 transition-colors duration-300 hover:bg-primary"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-white/15 group-hover:text-white">
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-6 font-display text-xl font-semibold transition-colors group-hover:text-primary-foreground">
                  {c.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/85">
                  {c.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Nuestros valores
              </span>
            </div>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Una práctica construida sobre principios, no sobre fórmulas
            </h2>
            <p className="mt-5 text-muted-foreground">
              Diseñamos soluciones legales estratégicas que protegen los intereses de nuestros clientes, fortalecen
              sus decisiones y contribuyen al logro de sus objetivos.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-border bg-background p-5">
                  <div className="font-display text-base font-semibold">{v.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
            <Link
              to="/equipo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Conoce al equipo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl shadow-elegant"
          >
            <img
              src={teamGroup.url}
              alt="Equipo de Elemento Abogados"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 to-transparent" aria-hidden />
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl bg-gradient-hero p-10 text-primary-foreground sm:p-14">
            <h2 className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
              Hablemos de tu caso
            </h2>
            <p className="mt-4 max-w-xl text-primary-foreground/80">
              Agenda una conversación inicial y define con nosotros la ruta legal más conveniente.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-primary-deep transition-opacity hover:opacity-90"
              >
                Contáctanos
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/servicios"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Ver áreas de práctica
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
