import { useRef } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Nav, Footer } from "./index";
import { partners, type Partner } from "@/lib/team";

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

const ease = [0.22, 1, 0.36, 1] as const;

function PartnerPage() {
  const { partner } = Route.useLoaderData() as { partner: Partner };
  const index = partners.findIndex((p) => p.slug === partner.slug);
  const prev = partners[(index - 1 + partners.length) % partners.length];
  const next = partners[(index + 1) % partners.length];

  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.06, 1.12]);

  return (
    <main key={partner.slug} className="min-h-screen bg-background font-sans text-foreground">
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
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="font-display text-5xl font-bold tracking-tight sm:text-6xl"
            >
              {partner.name}
            </motion.h1>
          </div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <motion.aside
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <div ref={photoRef} className="relative aspect-[4/5] overflow-hidden bg-gradient-primary">
                <motion.img
                  src={partner.photo}
                  alt={partner.name}
                  style={{ y: photoY, scale: photoScale }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9, ease, delay: 0.25 }}
                  className="absolute inset-0 h-full w-full object-cover object-top will-change-transform"
                />
              </div>
              <div className="space-y-4 p-6 text-sm">
                <div>
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
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <h2 className="font-display text-2xl font-semibold">Biografía</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              {partner.bio.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
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
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
