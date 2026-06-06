import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowUpRight,
  Scale,
  Building2,
  Home,
  Handshake,
  Lightbulb,
  Gavel,
  ShieldAlert,
  Receipt,
  Landmark,
  Banknote,
  FileCheck2,
  Plane,
  Users,
  Check,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import attorney1 from "@/assets/attorney1.jpg";
import attorney2 from "@/assets/attorney2.jpg";
import attorney3 from "@/assets/attorney3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elemento Abogados — Asesoría legal estratégica en Guatemala" },
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

const services = [
  { icon: Building2, title: "Derecho corporativo", desc: "Asesoría empresarial integral para crecer con seguridad jurídica." },
  { icon: Home, title: "Derecho inmobiliario", desc: "Operaciones inmobiliarias seguras en mercados dinámicos." },
  { icon: Handshake, title: "Fusiones y adquisiciones", desc: "Estrategias de M&A para expansión y consolidación." },
  { icon: Lightbulb, title: "Propiedad intelectual", desc: "Protegemos las ideas, marcas e innovaciones que generan valor." },
  { icon: Gavel, title: "Resolución de controversias", desc: "Negociación, arbitraje y litigio con visión estratégica." },
  { icon: ShieldAlert, title: "Controversias penales", desc: "Defensa rigurosa en el ámbito penal empresarial y personal." },
  { icon: Receipt, title: "Derecho tributario", desc: "Cumplimiento fiscal eficiente y mitigación de riesgos." },
  { icon: Landmark, title: "Derecho constitucional", desc: "Defensa de derechos fundamentales y garantías." },
  { icon: Banknote, title: "Banca y finanzas", desc: "Operaciones financieras alineadas a la regulación vigente." },
  { icon: FileCheck2, title: "Compliance & gobierno", desc: "Programas de cumplimiento y gobierno corporativo." },
  { icon: Plane, title: "Migratorio y laboral", desc: "Movilidad internacional y relaciones laborales." },
  { icon: Users, title: "Patrimonial & sucesoria", desc: "Planificación patrimonial con visión a largo plazo." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-xl tracking-tight">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-elegant">
            <Scale className="h-4 w-4" />
          </span>
          <span className="font-semibold">
            Elemento<span className="text-gradient"> Abogados</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {[
            ["Nosotros", "#about"],
            ["Servicios", "#services"],
            ["Equipo", "#team"],
            ["Contacto", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-primary"
        >
          Contáctanos
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="top" ref={ref} className="relative isolate min-h-screen overflow-hidden bg-gradient-hero pt-28">
      <motion.div style={{ scale, y }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Abogado profesional en oficina moderna"
          className="h-full w-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.08_265)] via-transparent to-[oklch(0.16_0.08_265)]/40" />
      </motion.div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8 text-primary-foreground">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
            Tu caso, nuestra prioridad
          </motion.span>

          <h1 className="mt-8 font-display text-5xl leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
            {"Asesoría legal".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-4"
              >
                {w}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="italic font-display text-white/70"
            >
              cercana
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-block"
            >
              & estratégica.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 max-w-xl text-lg text-white/70"
          >
            Acompañamos a empresas, familias y personas con soluciones legales diseñadas a la medida —
            respuestas claras, ética y resultados sostenibles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary-deep transition-all hover:shadow-glow hover:-translate-y-0.5"
            >
              Agenda una consulta
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Nuestros servicios
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="lg:col-span-4 self-end"
        >
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            {[
              ["+10", "Años de experiencia"],
              ["12", "Áreas del derecho"],
              ["98%", "Satisfacción clientes"],
              ["500+", "Casos resueltos"],
            ].map(([k, v]) => (
              <div key={k} className="bg-[oklch(0.18_0.08_265)]/40 p-6 text-primary-foreground">
                <div className="font-display text-4xl">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative border-y border-white/10 bg-[oklch(0.14_0.06_265)]/60 py-6 overflow-hidden">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-3xl text-white/40 sm:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              {["Corporativo", "Inmobiliario", "M&A", "Tributario", "Penal", "Compliance", "Patrimonial"].map((s) => (
                <span key={s} className="flex items-center gap-12">
                  {s}
                  <span className="text-primary-glow">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
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
            <div className="font-display text-5xl text-primary/20 transition-colors group-hover:text-primary">
              0{i + 1}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const bullets = [
    "Equipo legal especializado",
    "Alta tasa de éxito en procesos",
    "Asistencia rápida y oportuna",
    "Recomendado por nuestros clientes",
    "Alto desempeño en litigios",
    "Asesoría gratuita en primera cita",
    "Resoluciones ágiles y eficientes",
    "Sin costos ocultos",
  ];
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-soft py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-primary opacity-20 blur-2xl" />
          <div className="overflow-hidden rounded-3xl shadow-elegant">
            <img src={aboutImg} alt="Equipo de Elemento Abogados en reunión" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-background p-5 shadow-elegant md:block">
            <div className="font-display text-4xl text-gradient">+10 años</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">de experiencia</div>
          </div>
        </motion.div>

        <div>
          <motion.span variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
            Acerca de nosotros
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 font-display text-4xl leading-tight sm:text-5xl"
          >
            Somos <span className="text-gradient">Elemento Abogados</span>, con más de 10 años de experiencia.
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-6 text-muted-foreground">
            Combinamos conocimiento jurídico, visión estratégica y compromiso para ofrecer soluciones
            efectivas a empresas, familias y personas naturales en distintas áreas del derecho.
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
          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            Contáctanos <ArrowRight className="h-4 w-4" />
          </motion.a>
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
            <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Nuestros servicios</span>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
              Servicios de primera con <span className="text-gradient italic">excelentes resultados</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Doce áreas de práctica respaldadas por un equipo experto, alineadas a las necesidades reales de tu caso.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i * 0.3}
              variants={fadeUp}
              className="group relative flex flex-col gap-4 bg-card p-8 transition-all hover:bg-gradient-primary"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-white/15 group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-white group-hover:rotate-45" />
              </div>
              <h3 className="font-display text-2xl leading-tight transition-colors group-hover:text-white">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground transition-colors group-hover:text-white/80">
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
    { title: "Compromiso con tus resultados", desc: "Buscamos siempre la mejor resolución, defendiendo tus derechos." },
    { title: "Especialización jurídica", desc: "Expertos en distintas ramas, preparados para cada desafío." },
  ];
  return (
    <section className="relative overflow-hidden bg-primary-deep py-28 text-primary-foreground">
      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-primary-glow/30 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-primary/40 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-xs uppercase tracking-[0.25em] text-primary-glow font-semibold">
          ¿Por qué colaborar con nosotros?
        </span>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          Más que abogados, <span className="italic text-white/70">aliados estratégicos</span> en tu causa.
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
              <div className="font-display text-5xl text-primary-glow">0{i + 1}</div>
              <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const team = [
    { name: "Luis Pedro Guerra", role: "Socio", img: attorney1 },
    { name: "Carlos Moscoso", role: "Socio", img: attorney2 },
    { name: "Jorge Molina", role: "Socio", img: attorney3 },
  ];
  return (
    <section id="team" className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">Expertos que defienden tu causa</span>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            Nuestros abogados están listos para ayudarte a tomar <span className="text-gradient italic">decisiones clave</span>.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((m, i) => (
            <motion.a
              key={m.name}
              href="#contact"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="group block"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.08_265)]/95 via-[oklch(0.18_0.08_265)]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-primary-foreground">
                  <div>
                    <h3 className="font-display text-2xl">{m.name}</h3>
                    <p className="text-sm text-white/70">{m.role}</p>
                  </div>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 backdrop-blur transition-all group-hover:bg-white group-hover:text-primary-deep">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-hero py-32 text-primary-foreground">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-glow blur-[160px]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-5xl leading-[1] sm:text-7xl lg:text-8xl"
        >
          La confianza legal,<br />
          <span className="italic text-white/70">detrás de decisiones importantes.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-white/70"
        >
          Cuéntanos tu caso. Agenda una primera consulta sin costo y descubre cómo podemos ayudarte.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:contacto@elementoabogados.com"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary-deep shadow-lg transition-shadow hover:shadow-glow"
          >
            <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> Escríbenos
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="tel:+50200000000"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10 hover:border-white/40"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" /> Llámanos
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {[
            { Icon: Phone, k: "Teléfono", v: "+502 0000 0000" },
            { Icon: Mail, k: "Correo", v: "contacto@elementoabogados.com" },
            { Icon: MapPin, k: "Oficina", v: "Ciudad de Guatemala" },
          ].map(({ Icon, k, v }) => (
            <div key={k} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur">
              <Icon className="h-5 w-5 text-primary-glow" />
              <div className="mt-3 text-xs uppercase tracking-wider text-white/50">{k}</div>
              <div className="mt-1 text-sm">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-primary text-primary-foreground">
            <Scale className="h-3 w-3" />
          </span>
          <span className="font-display text-base text-foreground">Elemento Abogados</span>
        </div>
        <p>© {new Date().getFullYear()} Elemento Abogados. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <Pillars />
      <About />
      <Services />
      <WhyUs />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}