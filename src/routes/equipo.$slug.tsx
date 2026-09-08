import { useRef, type ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Nav, Footer } from "./index";
import { partners, type Partner } from "@/lib/team";
import isologo from "@/assets/isologo.png.asset.json";

export const Route = createFileRoute("/equipo/$slug")({
  loader: ({ params }) => {
    const partner = partners.find((p) => p.slug === params.slug);
    if (!partner) throw notFound();
    return { partner };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Perfil no encontrado | Elemento Abogados" }, { name: "robots", content: "noindex" }] };
    }
    const { partner } = loaderData;
    return {
      meta: [
        { title: `${partner.name} | Elemento Abogados` },
        { name: "description", content: `${partner.name}, ${partner.role}.` },
        { property: "og:title", content: `${partner.name} | Elemento Abogados` },
        { property: "og:description", content: `${partner.name}, ${partner.role}.` },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PartnerPage,
});

// power3.out equivalent
const ease = [0.215, 0.61, 0.355, 1] as const;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Watermark({ side, speed = 120 }: { side: "left" | "right"; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none md:block ${
        side === "left" ? "-left-24" : "-right-24"
      }`}
    >
      <motion.img
        src={isologo.url}
        alt=""
        style={{ y }}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 0.06, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease }}
        className="h-[320px] w-auto lg:h-[420px]"
      />
    </div>
  );
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, ease, delay: i * 0.1 }}
            className="flex gap-3 leading-relaxed text-muted-foreground"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function PartnerPage() {
  const { partner } = Route.useLoaderData() as { partner: Partner };
  const index = partners.findIndex((p) => p.slug === partner.slug);
  const prev = partners[(index - 1 + partners.length) % partners.length];
  const next = partners[(index + 1) % partners.length];

  const cutout = partner.photoCutout;

  return (
    <main key={partner.slug} className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <Nav />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease }}
        className="overflow-hidden bg-gradient-hero pt-32 text-primary-foreground"
      >
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link to="/equipo" className="hover:text-white">Equipo</Link>
            <span>/</span>
            <span className="text-white">{partner.name}</span>
          </motion.nav>
          <div className="mt-6 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: "110%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.9, ease, delay: 0.1 }}
              className="font-display text-5xl font-bold tracking-tight sm:text-6xl"
            >
              {partner.name}
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.22 }}
            className="mt-4 max-w-2xl text-white/75"
          >
            {partner.role} · {partner.headline}
          </motion.p>
        </div>
      </motion.section>

      <section className="relative py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          {/* Columna izquierda: logo + foto + tarjeta */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Logo de fondo, entra primero */}
              <motion.img
                src={isologo.url}
                alt=""
                aria-hidden
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.16, scale: 1 }}
                transition={{ duration: 1, ease }}
                className="pointer-events-none absolute left-1/2 top-0 h-[92%] w-auto -translate-x-1/2 select-none"
              />
              {/* Foto encima del logo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease, delay: 0.45 }}
                className="relative"
              >
                {cutout ? (
                  <img
                    src={cutout}
                    alt={partner.name}
                    className="relative mx-auto block w-full max-w-[420px]"
                  />
                ) : (
                  <div className="overflow-hidden rounded-3xl border border-border bg-card">
                    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-primary">
                      <img
                        src={partner.photo}
                        alt={partner.name}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Tarjeta de información */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.95, ease, delay: 0.57 }}
                className="relative -mt-6 rounded-3xl border border-border bg-card p-6 text-sm shadow-lg"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Información de contacto
                </div>
                <ul className="mt-3 space-y-3">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <a href="tel:+50223391922" className="hover:text-primary">{partner.phone}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    <a href={`mailto:${partner.email}`} className="break-all hover:text-primary">{partner.email}</a>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 flex-none text-primary" />
                    6a. Calle 5-28, Zona 9, Edificio Torre Cristal, Oficina 802, Ciudad de Guatemala
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Columna derecha: perfil */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease, delay: 0.5 }}
            className="lg:col-span-7"
          >
            <h2 className="font-display text-2xl font-semibold">Perfil</h2>
            <div className="mt-4 space-y-4 text-justify leading-relaxed text-muted-foreground">
              {partner.bio.map((p, i) => (
                <motion.p
                  key={p.slice(0, 40)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {partner.practice?.length ? (
        <section className="relative overflow-x-clip py-16">
          <div className="relative mx-auto max-w-7xl px-6">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold">Áreas de práctica</h2>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {partner.practice.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, ease, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 font-medium leading-snug">{area}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {(partner.education.length > 0 || partner.memberships?.length || partner.languages?.length) && (
        <section className="relative overflow-x-clip py-16">
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
            {partner.education.length > 0 && (
              <Reveal>
                <InfoBlock title="Formación profesional" items={partner.education} />
              </Reveal>
            )}
            {partner.memberships?.length ? (
              <Reveal delay={0.1}>
                <InfoBlock title="Membresías" items={partner.memberships} />
              </Reveal>
            ) : null}
            {partner.languages?.length ? (
              <Reveal delay={0.2}>
                <InfoBlock title="Idiomas" items={[partner.languages.join(" / ")]} />
              </Reveal>
            ) : null}
          </div>
        </section>
      )}

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
              <Link
                to="/equipo/$slug"
                params={{ slug: prev.slug }}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4" /> {prev.name}
              </Link>
              <Link
                to="/equipo/$slug"
                params={{ slug: next.slug }}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
              >
                {next.name} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
