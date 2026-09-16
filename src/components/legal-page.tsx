import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Nav, Footer } from "@/routes/index";
import { useLang } from "@/lib/i18n";

export type LegalSection = { title?: string; paragraphs: string[] };

export function LegalPage({
  breadcrumb,
  title,
  intro,
  sections,
  updated,
}: {
  breadcrumb: string;
  title: string;
  intro: string;
  sections: LegalSection[];
  updated?: string;
}) {
  const { lang } = useLang();
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      <section className="relative isolate overflow-hidden bg-primary-deep pt-32 text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
        <div
          className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary-glow/25 blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-12">
          <nav className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">
              {lang === "es" ? "Inicio" : "Home"}
            </Link>
            <span>/</span>
            <span className="text-white">{breadcrumb}</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            {title}
          </motion.h1>
          <p className="mt-5 max-w-2xl text-white/80">{intro}</p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-10">
            {sections.map((s, i) => (
              <motion.article
                key={s.title ?? i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className="border-l-2 border-primary/25 pl-6"
              >
                {s.title ? (
                  <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{s.title}</h2>
                ) : null}
                <div className="mt-3 space-y-4 text-muted-foreground">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 32)} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-secondary/40 p-8">
            <h2 className="font-display text-xl font-semibold">{lang === "es" ? "Contacto" : "Contact"}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {lang === "es"
                ? "Si tienes dudas sobre este documento, escríbenos y con gusto te atendemos."
                : "If you have questions about this document, write to us and we will be happy to help."}
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:info@elementoabogados.com"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                info@elementoabogados.com
              </a>
              <a
                href="tel:+50223391922"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                +(502) 2339 - 1922
              </a>
            </div>
            {updated ? <p className="mt-6 text-xs text-muted-foreground">{updated}</p> : null}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
