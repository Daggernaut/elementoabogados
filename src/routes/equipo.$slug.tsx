import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
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
        { name: "description", content: `${partner.name}, ${partner.role}. ${partner.headline}` },
        { property: "og:title", content: `${partner.name} | Elemento Abogados` },
        { property: "og:description", content: `${partner.name}, ${partner.role}.` },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: PartnerPage,
});

function PartnerPage() {
  const { partner } = Route.useLoaderData() as { partner: Partner };
  const index = partners.findIndex((p) => p.slug === partner.slug);
  const prev = partners[(index - 1 + partners.length) % partners.length];
  const next = partners[(index + 1) % partners.length];

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      <section className="bg-gradient-hero pt-32 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10">
          <nav className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link to="/equipo" className="hover:text-white">Equipo</Link>
            <span>/</span>
            <span className="text-white">{partner.name}</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl"
          >
            {partner.name}
          </motion.h1>
          <p className="mt-3 text-lg text-white/80">{partner.role}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              <div className="relative aspect-[4/5] bg-gradient-primary">
                <img
                  src={partner.photo}
                  alt={partner.name}
                  className="absolute inset-0 h-full w-full object-cover object-top"
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
          </aside>

          <div className="lg:col-span-8">
            <p className="font-display text-xl leading-relaxed text-foreground">{partner.headline}</p>

            <h2 className="mt-10 font-display text-2xl font-semibold">Biografía</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">
              {partner.bio.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            <h2 className="mt-10 font-display text-2xl font-semibold">Educación</h2>
            <ul className="mt-4 space-y-3">
              {partner.education.map((e) => (
                <li key={e} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  {e}
                </li>
              ))}
            </ul>

            {partner.memberships && (
              <>
                <h2 className="mt-10 font-display text-2xl font-semibold">Membresías</h2>
                <ul className="mt-4 space-y-3">
                  {partner.memberships.map((m) => (
                    <li key={m} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      {m}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {partner.practice && (
              <>
                <h2 className="mt-10 font-display text-2xl font-semibold">Áreas de práctica</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {partner.practice.map((a) => (
                    <span key={a} className="rounded-full border border-border bg-secondary px-4 py-2 text-sm">
                      {a}
                    </span>
                  ))}
                </div>
              </>
            )}

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
