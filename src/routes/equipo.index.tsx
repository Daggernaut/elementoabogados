import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Nav, Footer } from "./index";
import { partners, associates } from "@/lib/team";
import equipoHeader from "@/assets/equipo-header.jpg.asset.json";

export const Route = createFileRoute("/equipo/")({
  head: () => ({
    meta: [
      { title: "Nuestro equipo | Elemento Abogados" },
      {
        name: "description",
        content:
          "Conoce a los socios y abogados asociados de Elemento Abogados: experiencia en derecho corporativo, bancario, tributario, penal y litigio en Guatemala.",
      },
      { property: "og:title", content: "Nuestro equipo | Elemento Abogados" },
      {
        property: "og:description",
        content: "Socios y abogados asociados que acompañan a nuestros clientes con cercanía y rigor técnico.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EquipoPage,
});

function EquipoPage() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      <section className="relative isolate overflow-hidden bg-primary-deep pt-32 text-primary-foreground">
        <img
          src={equipoHeader.url}
          alt="Ciudad de Guatemala"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep/95 via-primary-deep/80 to-primary/60" aria-hidden />
        <div className="absolute inset-0 grid-pattern opacity-20 mix-blend-overlay" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-14">
          <nav className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <span className="text-white">Equipo</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl"
          >
            Nuestro equipo
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Un grupo multidisciplinario de abogados que combina experiencia, ética y cercanía para acompañar a
            nuestros clientes en cada decisión.
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Socios</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/equipo/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-primary">
                    <img
                      src={p.photo}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-xl font-semibold">{p.name}</h2>
                    <p className="text-sm text-muted-foreground">{p.role}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Ver perfil <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mb-8 mt-20 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Abogados asociados
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {associates.map((a, i) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-primary">
                  <img
                    src={a.photo}
                    alt={a.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl font-semibold">{a.name}</h2>
                  <p className="text-sm text-muted-foreground">{a.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap items-center gap-4 rounded-3xl border border-border bg-gradient-soft p-10">
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-2xl font-semibold">¿Quieres hablar con uno de nuestros abogados?</h2>
              <p className="mt-2 text-muted-foreground">Escríbenos y te contactamos en menos de 24 horas.</p>
            </div>
            <a
              href="mailto:info@elementoabogados.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary-deep px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary"
            >
              <Mail className="h-4 w-4" /> Escríbenos
            </a>
            <a
              href="tel:+50223391922"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> Llámanos
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
