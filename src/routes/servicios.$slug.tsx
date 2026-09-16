import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";

import { Nav, Footer } from "./index";
import { getService } from "@/lib/services";
import { useServices, localizeService } from "@/lib/localize";
import { useLang } from "@/lib/i18n";
import { useUI } from "@/lib/translations";

const SITE = "https://elementoabogados.lovable.app";

const clamp = (text: string, max = 158) =>
  text.length <= max ? text : `${text.slice(0, max - 1).replace(/[\s,;.]+\S*$/, "")}…`;

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return {
      slug: service.slug,
      title: service.title,
      desc: service.desc,
      intro: service.intro,
      image: service.image,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Área no disponible | Elemento Abogados" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.title} | Elemento Abogados`;
    const description = clamp(loaderData.intro || loaderData.desc);
    const url = `${SITE}/servicios/${loaderData.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        { rel: "canonical", href: url },
        { rel: "preload", as: "image", href: loaderData.image, fetchpriority: "high" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: `${loaderData.title} — Elemento Abogados`,
            description,
            url,
            areaServed: "Guatemala",
            provider: {
              "@type": "LegalService",
              name: "Elemento Abogados",
              url: SITE,
              telephone: "+502 2339-1922",
              email: "info@elementoabogados.com",
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: SITE },
              { "@type": "ListItem", position: 2, name: "Áreas de práctica", item: `${SITE}/servicios` },
              { "@type": "ListItem", position: 3, name: loaderData.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicePage,
});


function ServiceNotFound() {
  const t = useUI();
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />
      <section className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl font-semibold">{t.servicesPage.notFoundTitle}</h1>
        <p className="mt-4 text-muted-foreground">{t.servicesPage.notFoundDesc}</p>
        <Link
          to="/servicios"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-deep px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
        >
          {t.servicesPage.seeAreas} <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
      <Footer />
    </main>
  );
}

function ServicePage() {
  const { slug } = Route.useParams();
  const { lang } = useLang();
  const t = useUI();
  const services = useServices();
  const service = localizeService(getService(slug)!, lang);
  const related = services.filter((s) => s.slug !== slug).slice(0, 4);
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 pb-20 text-primary-foreground sm:pt-32 sm:pb-24">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-primary-deep/95 via-primary-deep/85 to-primary-deep/75 sm:bg-gradient-to-br sm:from-primary-deep/95 sm:via-primary-deep/85 sm:to-primary/70"
          aria-hidden
        />
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-primary-glow/25 blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--accent-orange)]"
          >
            {t.servicesPage.heroEyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-7xl"
          >
            {service.title}
          </motion.h1>
        </div>
      </section>

      {/* Contenido */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12">
          <article className="lg:col-span-8">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <Link to="/" className="hover:text-primary">{t.common.home}</Link>
              <span>/</span>
              <Link to="/servicios" className="hover:text-primary">{t.nav.services}</Link>
              <span>/</span>
            <span className="text-foreground">{service.title}</span>
            </nav>
            <div className="mt-8 flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="text-justify font-display text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                {service.desc}
              </h2>
            </div>
            <div className="mt-6 space-y-5 text-justify text-base leading-relaxed text-muted-foreground">
              {service.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>


            <div className="mt-10 rounded-2xl border border-border bg-secondary/50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">
                {t.servicesPage.needHelpLead}{service.title.toLowerCase()}{t.servicesPage.needHelpTail}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.servicesPage.needHelpDesc}</p>
              <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/#contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary-deep px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary sm:inline-flex sm:w-auto"
                >
                  {t.servicesPage.scheduleCta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:info@elementoabogados.com?subject=${encodeURIComponent(`${t.servicesPage.subjectPrefix} ${service.title}`)}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary sm:inline-flex sm:w-auto"
                >
                  <Mail className="h-4 w-4 text-primary" /> {t.common.writeUs}
                </a>
              </div>
            </div>

          </article>


          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-lg font-semibold">{t.servicesPage.talkTitle}</h2>
              <div className="mt-5 space-y-3 text-sm">
                <a href="mailto:info@elementoabogados.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" /> info@elementoabogados.com
                </a>
                <a href="tel:+50223391922" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> +502 2339-1922
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-lg font-semibold">{t.servicesPage.related}</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to="/servicios/$slug"
                      params={{ slug: r.slug }}
                      title={`${r.title} — Elemento Abogados`}
                      className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {r.title}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}

              </ul>
            </div>

            <div className="mt-6">
              <Link
                to="/servicios"
                className="group flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {t.servicesPage.seeAll}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
