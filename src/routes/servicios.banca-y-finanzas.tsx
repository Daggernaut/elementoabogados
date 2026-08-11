import bancaFinanzasHeader from "@/assets/banca-finanzas-header.jpg.asset.json";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Building2,
  FileCheck2,
  Handshake,
  Home,
  Mail,
  Minus,
  Phone,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/servicios/banca-y-finanzas")({
  head: () => ({
    meta: [
      { title: "Banca y Finanzas | Elemento Abogados" },
      {
        name: "description",
        content:
          "Asesoría legal especializada en banca y finanzas para bancos, entidades financieras, fondos de inversión y empresas en Guatemala.",
      },
      { property: "og:title", content: "Banca y Finanzas | Elemento Abogados" },
      {
        property: "og:description",
        content:
          "Estructuración de créditos, financiamiento de infraestructura, M&A y cumplimiento regulatorio.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BancaYFinanzas,
});

const areas = [
  {
    icon: Banknote,
    title: "Estructuración de créditos",
    desc: "Operaciones simples y sindicadas, garantías y análisis de riesgo jurídico.",
  },
  {
    icon: Building2,
    title: "Financiamiento de infraestructura",
    desc: "Esquemas público-privados, fideicomisos y contratos de obra.",
  },
  {
    icon: Handshake,
    title: "Fusiones y adquisiciones",
    desc: "Acompañamiento legal en operaciones del sector financiero.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento regulatorio",
    desc: "Prevención de lavado de dinero, financiamiento del terrorismo y reportes obligatorios.",
  },
];

const faqs = [
  {
    q: "¿Por qué es importante contar con asesoría legal en operaciones financieras en Guatemala?",
    a: "La regulación bancaria y financiera en Guatemala es compleja y evoluciona constantemente. Una asesoría legal especializada permite estructurar operaciones conforme a la normativa vigente, evitar sanciones por incumplimiento y darle solidez jurídica a cada transacción.",
  },
  {
    q: "¿Qué tipos de operaciones de crédito asesoran?",
    a: "Acompañamos operaciones de crédito simples y sindicadas, incluyendo estructuración de garantías, análisis de riesgo jurídico, revisión de contratos y cumplimiento conforme a la Ley de Bancos y Grupos Financieros y demás normativa aplicable.",
  },
  {
    q: "¿Brindan apoyo legal en financiamiento de proyectos de infraestructura?",
    a: "Sí. Tenemos experiencia en estructuración legal de proyectos de infraestructura, esquemas de financiamiento público-privado, fideicomisos, contratos de obra y análisis normativo para proyectos de interés nacional o internacional.",
  },
  {
    q: "¿Cómo apoyan en temas de cumplimiento regulatorio financiero?",
    a: "Asistimos a nuestros clientes en el cumplimiento de obligaciones ante la Superintendencia de Bancos, la Intendencia de Verificación Especial (IVE) y demás entidades reguladoras, especialmente en prevención de lavado de dinero, financiamiento del terrorismo y reportes financieros obligatorios.",
  },
  {
    q: "¿Ofrecen asesoría a entidades financieras extranjeras que deseen operar en Guatemala?",
    a: "Sí. Acompañamos a entidades extranjeras que deseen establecerse u operar en el país, incluyendo trámites ante la Superintendencia de Bancos, análisis de normativa local e implementación de estructuras legales que garanticen el cumplimiento regulatorio.",
  },
  {
    q: "¿Qué normativas deben cumplir las instituciones financieras en Guatemala?",
    a: "Entre otras, la Ley de Bancos y Grupos Financieros, la Ley Contra el Lavado de Dinero u Otros Activos, la Ley de Tarjetas de Crédito, las disposiciones de la Junta Monetaria y los acuerdos emitidos por la Superintendencia de Bancos.",
  },
];

const related = [
  { title: "Compliance & gobierno", href: "#" },
  { title: "Derecho corporativo", href: "#" },
  { title: "Fusiones y adquisiciones", href: "#" },
  { title: "Derecho inmobiliario", href: "#" },
];

function BancaYFinanzas() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-32 pb-24 text-primary-foreground">
        <img
          src={bancaFinanzasHeader.url}
          alt="Edificios corporativos y paisaje financiero de Guatemala"
          className="absolute inset-0 h-full w-full object-cover"
          width={1536}
          height={1024}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-deep/95 via-primary-deep/80 to-primary/60" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-primary-glow/25 blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-orange)]"
          >
            Servicios legales · Elemento Abogados
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-5xl font-bold leading-[1.02] sm:text-7xl"
          >
            Banca y Finanzas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/75"
          >
            Asesoría legal especializada para bancos, entidades financieras, fondos de inversión y empresas
            en un entorno de constante evolución normativa.
          </motion.p>
          <nav className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60">
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <a href="/#services" className="hover:text-white">Servicios</a>
            <span>/</span>
            <span className="text-white">Banca y Finanzas</span>
          </nav>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Asesoría integral en un sector en constante evolución
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                El sector bancario y financiero es uno de los pilares del crecimiento económico y la
                estabilidad de los mercados, a nivel local y global. En un entorno de constante evolución
                normativa, con instrumentos financieros cada vez más sofisticados y una fiscalización
                regulatoria creciente, contar con asesoría legal especializada resulta indispensable.
              </p>
              <p>
                Acompañamos a bancos, entidades financieras, fondos de inversión y empresas en materias que
                van desde la estructuración y documentación de operaciones de crédito simples y sindicadas,
                hasta el financiamiento de proyectos de infraestructura, fusiones y adquisiciones,
                cumplimiento regulatorio y prevención de riesgos legales y financieros. Combinamos el
                conocimiento técnico del sistema financiero con una comprensión profunda del marco jurídico
                aplicable, tanto local como internacional.
              </p>
              <p>
                Nos comprometemos con cada cliente a ofrecer soluciones seguras, eficientes y adaptadas a
                sus necesidades, cuidando el cumplimiento normativo y la solidez jurídica de cada operación.
              </p>
            </div>

            <blockquote className="mt-10 rounded-r-lg border-l-4 border-[color:var(--accent-orange)] bg-secondary/60 px-6 py-6">
              <p className="font-display text-lg font-semibold text-foreground">
                “El crédito es la base del progreso económico; sin confianza, no hay inversión posible.”
              </p>
              <footer className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                — Alexander Hamilton
              </footer>
            </blockquote>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {areas.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="bg-card p-6"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <a.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{a.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-16">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                Preguntas frecuentes
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                Dudas comunes sobre banca y finanzas
              </h3>
              <ul className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
                {faqs.map((f, i) => {
                  const isOpen = open === i;
                  return (
                    <li key={f.q}>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-secondary/60"
                        aria-expanded={isOpen}
                      >
                        <span className="font-display text-base font-semibold">{f.q}</span>
                        <span className="grid h-8 w-8 flex-none place-items-center rounded-full border border-border text-primary">
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="overflow-hidden rounded-2xl bg-primary-deep p-6 text-primary-foreground shadow-elegant">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Contacto directo
                </div>
                <a
                  href="tel:+50223391922"
                  className="mt-5 flex items-center gap-3 border-t border-white/15 pt-4 text-sm font-medium hover:text-[color:var(--accent-orange)]"
                >
                  <Phone className="h-4 w-4" /> +(502) 2339 - 1922
                </a>
                <a
                  href="mailto:info@elementoabogados.com"
                  className="flex items-center gap-3 border-t border-white/15 pt-4 mt-4 text-sm font-medium hover:text-[color:var(--accent-orange)]"
                >
                  <Mail className="h-4 w-4" /> info@elementoabogados.com
                </a>
                <a
                  href="/#contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-white/10"
                >
                  Agenda una consulta <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <FileCheck2 className="h-4 w-4" /> Servicios relacionados
                </div>
                <ul className="mt-4 divide-y divide-border">
                  {related.map((r) => (
                    <li key={r.title}>
                      <a
                        href={r.href}
                        className="group flex items-center justify-between py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {r.title}
                        <ArrowUpRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary-deep py-20 text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-15" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Home className="mx-auto hidden" />
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
            ¿Necesitas asesoría en <span className="text-[color:var(--accent-orange)]">banca y finanzas</span>?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-white/70">
            Conversemos sobre tu operación. Te damos una respuesta clara y una hoja de ruta jurídica.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-orange)] px-6 py-3.5 text-sm font-semibold text-primary-deep transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Agenda una consulta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}