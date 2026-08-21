import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Nav, Footer } from "./index";
import { services } from "@/lib/services";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Áreas de práctica | Elemento Abogados" },
      {
        name: "description",
        content:
          "Trece áreas de práctica: corporativo, inmobiliario, M&A, fiscal, litigio penal, banca y finanzas, compliance, migratorio y laboral, y más.",
      },
      { property: "og:title", content: "Áreas de práctica | Elemento Abogados" },
      {
        property: "og:description",
        content: "Asesoría legal multidisciplinaria para empresas y familias en Guatemala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiciosIndex,
});

function ServiciosIndex() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      <section className="relative isolate overflow-hidden bg-gradient-hero pb-20 pt-32 text-primary-foreground sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-primary-glow/25 blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/70">
            Áreas de práctica
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            Asesoría legal multidisciplinaria, estratégica y cercana.
          </h1>
          <p className="mt-6 max-w-2xl text-primary-foreground/80">
            Trece áreas de práctica que se integran entre sí para resolver asuntos corporativos,
            regulatorios y litigiosos con una sola visión de estrategia.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.a
                key={s.slug}
                href={`/servicios/${s.slug}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="group relative flex flex-col gap-4 bg-card p-8 transition-colors duration-300 hover:bg-primary"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-white/15 group-hover:text-white">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-white" />
                </div>
                <h2 className="font-display text-xl font-semibold leading-tight transition-colors duration-300 group-hover:text-primary-foreground">
                  {s.title}
                </h2>
                <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/85">
                  {s.desc}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
