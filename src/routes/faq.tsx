import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes | Elemento Abogados" },
      {
        name: "description",
        content:
          "Resolvemos las dudas más comunes sobre nuestra firma: tipo de clientes, asesoría preventiva, cobertura, confidencialidad y cómo iniciar una consulta.",
      },
      { property: "og:title", content: "Preguntas frecuentes | Elemento Abogados" },
      {
        property: "og:description",
        content: "Dudas comunes sobre trabajar con Elemento Abogados en Guatemala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

const faqs: { q: string; a: string }[] = [
  {
    q: "¿Por qué debería contratar una firma legal como Elemento Abogados?",
    a: "Porque ofrecemos una combinación poco común de experiencia, enfoque estratégico y atención personalizada. No solo resolvemos problemas legales, los anticipamos. Nuestra práctica está orientada a brindar soluciones jurídicas seguras, eficientes y alineadas con los objetivos de cada cliente.",
  },
  {
    q: "¿Qué diferencia a Elemento Abogados de otras firmas en Guatemala?",
    a: "Nos distingue un enfoque humano, ético y multidisciplinario. Contamos con experiencia comprobada en distintas áreas del derecho, acompañamos a nuestros clientes en cada etapa del proceso y priorizamos la confianza, la transparencia y los resultados sostenibles.",
  },
  {
    q: "¿Qué tipo de clientes atienden?",
    a: "Asesoramos tanto a personas individuales como a empresas nacionales e internacionales. Adaptamos la estrategia según el tipo de cliente, el sector y el nivel de complejidad del caso.",
  },
  {
    q: "¿Puedo consultarles antes de tener un problema legal?",
    a: "Por supuesto. Promovemos la asesoría preventiva como un mecanismo clave para evitar litigios costosos, pérdidas patrimoniales o daños reputacionales. Invertir en asesoría anticipada es una decisión inteligente y estratégica.",
  },
  {
    q: "¿Elemento Abogados brinda servicios en todo el país?",
    a: "Sí. Aunque tenemos sede en Ciudad de Guatemala, contamos con cobertura a nivel nacional y con atención remota para facilitar el acceso a nuestros servicios sin importar la ubicación del cliente.",
  },
  {
    q: "¿Cuáles son los valores que rigen su práctica profesional?",
    a: "Nos guiamos por la ética, la excelencia, la confidencialidad, el compromiso y la transparencia. Cada caso se maneja con rigurosidad técnica y también con sensibilidad humana.",
  },
  {
    q: "¿Pueden representar a empresas extranjeras o con operaciones regionales?",
    a: "Sí. Tenemos experiencia en procesos multijurisdiccionales y brindamos soporte legal a inversionistas extranjeros, holdings, franquicias y empresas con operaciones en Centroamérica o el Caribe.",
  },
  {
    q: "¿Cómo se estructura una consulta o contratación con Elemento Abogados?",
    a: "Todo inicia con un diagnóstico legal preliminar en el que escuchamos al cliente y analizamos su situación. Luego se establece una propuesta de servicios clara, con tiempos, honorarios y alcances definidos desde el inicio.",
  },
  {
    q: "¿Ofrecen acompañamiento continuo o solo atención por caso?",
    a: "Ambas modalidades. Podemos atender casos puntuales o establecer esquemas de acompañamiento permanente, como asesoría legal recurrente mensual, paquetes corporativos o servicios integrales según las necesidades del cliente.",
  },
  {
    q: "¿Puedo confiarles un asunto sensible o de alta confidencialidad?",
    a: "Totalmente. La firma se rige por estrictos principios de confidencialidad profesional. Cada asunto, sin importar su naturaleza, se maneja con el más alto estándar ético y con absoluta discreción.",
  },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      <Nav />

      <section className="relative isolate overflow-hidden bg-primary-deep pt-32 text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-20" aria-hidden />
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary-glow/25 blur-[120px]" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-12">
          <nav className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="hover:text-white">Inicio</Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl"
          >
            Preguntas frecuentes
          </motion.h1>
          <p className="mt-5 max-w-2xl text-white/80">
            Reunimos las dudas que más nos plantean nuestros clientes antes de trabajar con la firma. Si tu pregunta
            no está aquí, escríbenos y te respondemos con gusto.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-semibold leading-snug sm:text-xl">{f.q}</span>
                    <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-primary">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pr-14 leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl bg-gradient-hero p-8 text-primary-foreground sm:p-10">
            <h2 className="font-display text-2xl font-semibold">¿Tienes otra pregunta?</h2>
            <p className="mt-3 max-w-xl text-primary-foreground/80">
              Cuéntanos tu caso y te orientamos sobre los siguientes pasos.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#ask"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary-deep transition-opacity hover:opacity-90"
              >
                Haznos una pregunta
              </a>
              <a
                href="mailto:info@elementoabogados.com"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                info@elementoabogados.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
