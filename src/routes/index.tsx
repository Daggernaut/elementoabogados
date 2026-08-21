import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Users,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Download,
  Plus,
  Minus,
} from "lucide-react";
import logoAsset from "@/assets/logo-ea.png.asset.json";
import aboutCity from "@/assets/about-city.jpg.asset.json";
import headerHero from "@/assets/header-hero.jpg.asset.json";
import contactTeam from "@/assets/equipo-contacto.png.asset.json";
import deckEs from "@/assets/presentacion-es.pptx.asset.json";
import deckEn from "@/assets/presentacion-en.pptx.asset.json";
import { partners, associates } from "@/lib/team";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elemento Abogados | Asesoría legal estratégica en Guatemala" },
      {
        name: "description",
        content:
          "Firma legal con más de 10 años de experiencia. Derecho corporativo, inmobiliario, tributario, M&A y resolución de controversias.",
      },
      { property: "og:title", content: "Elemento Abogados" },
      { property: "og:description", content: "Más que abogados, aliados estratégicos en tu causa." },
    ],
  }),
  component: Index,
});


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoAsset.url} alt="Elemento Abogados" className="h-9 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="/#about" className="transition-colors hover:text-foreground">Nosotros</a>
          <div className="group relative">
            <a href="/servicios" className="inline-flex items-center gap-1 transition-colors hover:text-foreground">
              Servicios
              <svg className="h-3 w-3 transition-transform group-hover:rotate-180" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2.5 4.5 6 8l3.5-3.5" /></svg>
            </a>
            <div className="invisible absolute left-1/2 top-full z-50 grid w-[38rem] -translate-x-1/2 translate-y-1 grid-cols-2 gap-1 rounded-xl border border-border bg-background/95 p-2 opacity-0 shadow-elegant backdrop-blur transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground hover:bg-secondary"
                >
                  <s.icon className="h-4 w-4 shrink-0 text-primary" />
                  {s.title}
                </a>
              ))}
              <a href="/servicios" className="col-span-2 mt-1 block rounded-lg border-t border-border px-3 py-2 text-sm text-muted-foreground hover:bg-secondary">
                Ver todas las áreas de práctica
              </a>
            </div>

          </div>
          <Link to="/equipo" className="transition-colors hover:text-foreground">Equipo</Link>
          <a href="/#faq" className="transition-colors hover:text-foreground">FAQ</a>
          <a href="/#contact" className="transition-colors hover:text-foreground">Contacto</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary-deep px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary"
          >
            Contáctanos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-hero pt-32 text-primary-foreground">
      <img
        src={headerHero.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/85 via-primary-deep/40 to-transparent" aria-hidden />
      <div className="absolute inset-0 grid-pattern opacity-20 mix-blend-overlay" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.75rem]">
            {"Más que abogados,".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mr-4 inline-block"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-white/60"
            >
              aliados estratégicos.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 max-w-xl text-lg text-white/75"
          >
            Acompañando a nuestros clientes, nacionales e internacionales, con asesoría legal multidisciplinaria, estratégica y cercana. Integramos experiencia, ética y excelencia para ofrecer soluciones personalizadas que generan confianza y valor sostenible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#contact"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--accent-orange)] px-6 py-3.5 text-sm font-semibold text-primary-deep shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex sm:w-auto"
            >
              Agenda una consulta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={deckEs.url}
              download
              className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:inline-flex sm:w-auto"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Presentación (Español)
            </a>
            <a
              href={deckEn.url}
              download
              className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:inline-flex sm:w-auto"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Presentation (English)
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="self-end lg:col-span-4"
        >
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
            {[
              ["+20", "Años de experiencia"],
              ["13", "Áreas de práctica"],
              ["500+", "Casos resueltos"],
            ].map(([k, v], i) => (
              <motion.div
                key={k}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="bg-primary-deep/40 px-4 py-6 sm:px-6"
              >
                <div className="font-display text-3xl font-semibold sm:text-4xl">{k}</div>
                <div className="mt-1 text-[11px] uppercase leading-snug tracking-wider text-white/55 sm:text-xs">{v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

    </section>
  );
}

function Pillars() {
  const items = [
    { title: "Asesoría legal integral", desc: "Contratos, acuerdos y documentos con plena seguridad jurídica." },
    { title: "Abogados especialistas", desc: "Equipo multidisciplinario con conocimiento técnico y profundo." },
    { title: "Resolución de conflictos", desc: "Soluciones rápidas y favorables que priorizan tus intereses." },
  ];
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={i}
            variants={fadeUp}
            className="group relative bg-background p-10 transition-colors hover:bg-secondary"
          >
            <h3 className="font-display text-xl font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const pillars = [
  {
    title: "Excelencia Jurídica",
    body: "Rigor técnico, especialización y capacidad para resolver asuntos de alta complejidad con estándares de primer nivel.",
  },
  {
    title: "Talento y Especialización",
    body: "Un equipo de profesionales con experiencia complementaria, capaces de integrar distintas áreas de práctica para atender las necesidades más sofisticadas del cliente.",
  },
  {
    title: "Cliente y Visión de Negocio",
    body: "Comprender los objetivos comerciales del cliente para brindar soluciones jurídicas estratégicas que generen valor y acompañen la toma de decisiones.",
  },
  {
    title: "Integración y Crecimiento",
    body: "Una firma integrada que combina tecnología, procesos, colaboración y gestión eficiente para crecer de forma sostenible y ofrecer un servicio consistente.",
  },
];

function PracticePillars() {
  return (
    <section className="relative border-b border-border bg-background py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-primary"
          >
            Los pilares de nuestra práctica
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl"
          >
            Principios que orientan cada asesoría
          </motion.h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((it, i) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative bg-card p-8 transition-colors duration-300 hover:bg-secondary sm:p-10"
            >
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <span className="font-display text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="font-display text-xl font-semibold leading-snug">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const bullets = [
    "Equipo legal especializado",
    "Estrategias de litigio con resultados ampliamente satisfactorios",
    "La confianza de nuestros clientes respalda nuestra trayectoria",
    "Honorarios claros y transparentes",
    "Excelencia jurídica sustentada en eficiencia, eficacia y ética.",
    "Soluciones Ágiles y eficientes",
    "Asistencia rápida y oportuna",
  ];
  return (
    <section id="about" className="relative bg-gradient-soft py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto max-w-md">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={aboutCity.url}
                alt="Vista panorámica de la ciudad donde opera Elemento Abogados"
                className="aspect-[16/9] w-full object-cover lg:aspect-[4/3] lg:min-h-[420px]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-deep/70 to-transparent" aria-hidden />
            </div>
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-8 w-[92%] max-w-[20rem] sm:-bottom-10 lg:-bottom-12">
              <div className="pointer-events-auto grid w-full grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-primary-deep text-primary-foreground shadow-elegant">
                {[
                  ["+20", "años de experiencia"],
                  ["13", "áreas de práctica"],
                  ["500+", "casos resueltos"],
                ].map(([k, v]) => (
                  <div key={v} className="bg-primary-deep px-3 py-4 text-center sm:px-4">
                    <div className="font-display text-2xl font-semibold leading-none sm:text-3xl">{k}</div>
                    <div className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-white/60">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Acerca de nosotros
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl"
          >
            Somos <span className="text-primary">Elemento Abogados</span>, con más de 20 años de experiencia.
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 text-muted-foreground">
            Diseñamos soluciones legales estratégicas que protegen los intereses de nuestros clientes,
            fortalecen sus decisiones y contribuyen al logro de sus objetivos.
          </motion.p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {bullets.map((b, i) => (
              <motion.li
                key={b}
                variants={fadeUp}
                custom={i * 0.4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-2 text-sm"
              >
                <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3 w-3" />
                </span>
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Nuestros servicios</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Áreas de práctica con <span className="text-primary">resultados comprobados</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Áreas de práctica respaldadas por un equipo experto, alineadas a las necesidades reales de tu caso.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={`/servicios/${s.slug}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i * 0.3}
              variants={fadeUp}
              className={cn(
                "group relative flex flex-col gap-4 border-b border-border bg-card p-8 transition-colors duration-300 hover:bg-primary",
                "sm:border-r",
                (i + 1) % 2 === 0 && "sm:border-r-0",
                (i + 1) % 3 !== 0 && "lg:border-r",
                (i + 1) % 3 === 0 && "lg:border-r-0",
                i === services.length - 1 && "border-b-0"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-white/15 group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/85">
                {s.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { title: "Asesoría personalizada", desc: "Atención única, entendiendo a fondo tu situación y objetivos." },
    { title: "Comprometidos con el logro de sus objetivos", desc: "Buscamos siempre la mejor resolución, defendiendo tus derechos." },
    { title: "Especialización en cada área de práctica", desc: "Expertos en distintas ramas, preparados para cada desafío." },
  ];
  return (
    <section className="relative overflow-hidden bg-primary-deep py-28 text-primary-foreground">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-primary-glow/25 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[color:var(--accent-orange)]/20 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-orange)]">
          ¿Por qué colaborar con nosotros?
        </span>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
          Soluciones legales con visión estratégica.
        </h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:bg-white/10"
            >
              
              <h3 className="mt-4 font-display text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PersonCard({ name, role, photo, size = "lg", slug }: { name: string; role: string; photo?: string; size?: "lg" | "md"; slug?: string }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("");
  const card = (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant">
      <div className={`relative ${size === "lg" ? "aspect-[4/5]" : "aspect-[4/4]"} overflow-hidden bg-gradient-primary`}>
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-6xl font-semibold text-white/80">{initials}</span>
            </div>
            <span className="absolute right-3 top-3 rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-wider text-white backdrop-blur">
              Foto pendiente
            </span>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
          {slug && (
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
              Ver perfil <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
  if (slug) {
    return (
      <Link to="/equipo/$slug" params={{ slug }} className="block">
        {card}
      </Link>
    );
  }
  return card;
}

function Team() {
  return (
    <section id="team" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Nuestro equipo</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-6xl">
              Los <span className="text-primary">profesionales</span> detrás de cada decisión.
            </h2>
          </div>
          <Link
            to="/equipo"
            className="group inline-flex flex-none items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Conocer al equipo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Socios</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((m) => (
            <PersonCard key={m.slug} name={m.name} role={m.role} photo={m.photo} size="lg" slug={m.slug} />
          ))}
        </div>

        <div className="mb-4 mt-16 flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Abogados asociados</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {associates.map((m) => (
            <PersonCard key={m.name} name={m.name} role={m.role} photo={m.photo} size="lg" />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  // TODO: preguntas finales las filtrará el cliente.
  const faqs = [
    { q: "¿Trabajan con empresas o también con personas individuales?", a: "Ambos. Acompañamos empresas, familias y personas naturales en múltiples áreas del derecho." },
    { q: "¿Cómo se manejan los honorarios profesionales?", a: "Los honorarios se acuerdan de forma transparente al inicio del proceso, sin costos ocultos." },
    { q: "¿Pueden asesorar en operaciones fuera de Guatemala?", a: "Sí. Contamos con una red de firmas aliadas en la región para atender operaciones internacionales." },
    { q: "¿Cuánto tiempo tarda un proceso legal típico?", a: "Depende de la materia y complejidad. En la primera reunión te damos una estimación realista." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-gradient-soft py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Preguntas frecuentes</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Resolvemos <span className="text-primary">tus dudas</span> antes de empezar.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Reunimos las preguntas más frecuentes de nuestros clientes. Si no encuentras la respuesta que buscas,
            escríbenos y te contactaremos en menos de 24 horas.
          </p>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
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
                    <span className="font-display text-lg font-semibold">{f.q}</span>
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
      </div>
    </section>
  );
}

function AskUs() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").slice(0, 100);
    const email = String(f.get("email") ?? "").slice(0, 200);
    const message = String(f.get("message") ?? "").slice(0, 2000);
    const subject = encodeURIComponent(`Pregunta desde el sitio de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\n${message}`);
    window.location.href = `mailto:info@elementoabogados.com?subject=${subject}&body=${body}`;
    setStatus("sent");
  }
  return (
    <section className="bg-background py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Haznos una pregunta</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            ¿Tienes una duda específica?
          </h2>
          <p className="mt-6 text-muted-foreground">
            Cuéntanos brevemente tu situación. Un abogado te responderá directamente por correo.
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-secondary/60 p-4 text-sm">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Escríbenos a</div>
              <div className="font-medium">info@elementoabogados.com</div>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="lg:col-span-7 rounded-2xl border border-border bg-card p-8 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium">Nombre</span>
              <input
                required
                maxLength={100}
                name="name"
                className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tu nombre completo"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium">Correo</span>
              <input
                required
                type="email"
                maxLength={200}
                name="email"
                className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="tu@correo.com"
              />
            </label>
          </div>
          <label className="mt-4 flex flex-col gap-2 text-sm">
            <span className="font-medium">Tu pregunta</span>
            <textarea
              required
              maxLength={2000}
              name="message"
              rows={5}
              className="resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              placeholder="Describe brevemente tu situación..."
            />
          </label>
          <div className="mt-6 flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              {status === "sent" ? "Se abrió tu cliente de correo. ¡Gracias!" : "Al enviar, se abrirá tu cliente de correo."}
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-deep px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary"
            >
              Enviar pregunta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-hero py-28 text-primary-foreground">
      <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-glow/20 blur-[160px]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-orange)]">Contacto</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] sm:text-6xl">
              Estamos a una<br />conversación de distancia.
            </h2>
            <p className="mt-6 max-w-md text-white/70">
              Agenda una primera consulta o visítanos en nuestra oficina en la Ciudad de Guatemala.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { Icon: Phone, k: "Teléfono", v: "+(502) 2339 - 1922", href: "tel:+50223391922" },
                { Icon: Mail, k: "Correo", v: "info@elementoabogados.com", href: "mailto:info@elementoabogados.com" },
                { Icon: MapPin, k: "Oficina", v: "Ciudad de Guatemala" },
              { Icon: Users, k: "Horario", v: "Lunes a viernes, 8:00 a 17:00" },
              ].map(({ Icon, k, v, href }) => {
                const content = (
                  <>
                    <Icon className="h-5 w-5 text-[color:var(--accent-orange)]" />
                    <div className="mt-3 text-xs uppercase tracking-wider text-white/50">{k}</div>
                    <div className="mt-1 text-sm">{v}</div>
                  </>
                );
                return href ? (
                  <a
                    key={k}
                    href={href}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="mailto:info@elementoabogados.com"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--accent-orange)] px-6 py-3.5 text-sm font-semibold text-primary-deep transition-all hover:-translate-y-0.5 hover:shadow-glow sm:inline-flex sm:w-auto"
              >
                <Mail className="h-4 w-4" /> Escríbenos
              </a>
              <a
                href="/presentacion.pdf"
                download
                className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:inline-flex sm:w-auto"
              >
                <Download className="h-4 w-4" /> Descargar presentación
              </a>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-1 backdrop-blur">
              <iframe
                title="Ubicación Elemento Abogados"
                src="https://www.google.com/maps?q=Ciudad%20de%20Guatemala&output=embed"
                className="h-[420px] w-full rounded-[22px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
        <div>
          <img src={logoAsset.url} alt="Elemento Abogados" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Firma legal en Guatemala. Más que abogados, aliados estratégicos en tu causa.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contacto</div>
          <ul className="mt-3 space-y-2">
            <li><a className="hover:text-primary" href="mailto:info@elementoabogados.com">info@elementoabogados.com</a></li>
            <li><a className="hover:text-primary" href="tel:+50223391922">+(502) 2339 - 1922</a></li>
            <li>Ciudad de Guatemala</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Síguenos</div>
          <div className="mt-3 flex items-center gap-2">
            <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Elemento Abogados. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />
      <Hero />
      <Pillars />
      <PracticePillars />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <FAQ />
      <AskUs />
      <Contact />
      <Footer />
    </main>
  );
}
