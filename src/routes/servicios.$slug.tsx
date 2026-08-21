import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { Nav, Footer } from "./index";
import { services, getService } from "@/lib/services";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { title: service.title, desc: service.desc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Área no disponible | Elemento Abogados" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.title} | Elemento Abogados`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.desc },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.desc },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicePage,
});

function ServiceNotFound() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />
      <section className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl font-semibold">Área de práctica no encontrada</h1>
        <p className="mt-4 text-muted-foreground">Revisa el listado completo de nuestras áreas de práctica.</p>
        <Link
          to="/servicios"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-deep px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary"
        >
          Ver áreas de práctica <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
      <Footer />
    </main>
  );
}

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const related = services.filter((s) => s.slug !== slug).slice(0, 4);
  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-hero pb-20 pt-28 text-primary-foreground sm:pb-24 sm:pt-36">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-primary-glow/25 blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <nav className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <Link to="/servicios" className="hover:text-white">Servicios</Link>
          </nav>
          <span className="mt-8 grid h-14 w-14 place-items-center rounded-2xl bg-white/10">
            <Icon className="h-6 w-6" />
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">{service.desc}</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-muted-foreground">{service.intro}</p>

            {/* TODO: reemplazar con el contenido detallado que enviará el cliente. */}
            <div className="mt-10 rounded-2xl border border-dashed border-border bg-secondary/40 p-8">
              <h2 className="font-display text-xl font-semibold">Contenido en preparación</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Estamos afinando el detalle de esta área de práctica: alcance de servicios, casos
                representativos y preguntas frecuentes. Mientras tanto, escríbenos y conversamos
                sobre tu caso.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-secondary/50 p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold">
                ¿Necesitas asesoría en {service.title.toLowerCase()}?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Cuéntanos tu caso y te contactamos con el abogado indicado para esta área.
              </p>
              <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="/#contact"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary-deep px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary sm:inline-flex sm:w-auto"
                >
                  Agenda una consulta
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:info@elementoabogados.com?subject=${encodeURIComponent(`Consulta: ${service.title}`)}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium transition-colors hover:bg-secondary sm:inline-flex sm:w-auto"
                >
                  <Mail className="h-4 w-4 text-primary" /> Escríbenos
                </a>
                <Link
                  to="/servicios"
                  className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex sm:w-auto"
                >
                  Ver todas las áreas
                </Link>
              </div>
            </div>

          </div>

          <aside className="lg:col-span-4">
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-lg font-semibold">Hablemos de tu caso</h2>
              <div className="mt-5 space-y-3 text-sm">
                <a href="mailto:info@elementoabogados.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" /> info@elementoabogados.com
                </a>
                <a href="tel:+50223347576" className="flex items-center gap-3 text-muted-foreground hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" /> +502 2334 7576
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-lg font-semibold">Áreas relacionadas</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {related.map((r) => (
                  <li key={r.slug}>
                    <a
                      href={`/servicios/${r.slug}`}
                      className="flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {r.title}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
