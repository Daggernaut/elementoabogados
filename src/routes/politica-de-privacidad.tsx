import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useLang } from "@/lib/i18n";
import { privacy } from "@/lib/legal-content";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: "Políticas de privacidad | Elemento Abogados" },
      {
        name: "description",
        content:
          "Cómo Elemento Abogados recopila, usa, almacena y protege los datos personales de clientes y usuarios de su sitio web.",
      },
      { property: "og:title", content: "Políticas de privacidad | Elemento Abogados" },
      {
        property: "og:description",
        content: "Tratamiento y protección de datos personales en Elemento Abogados.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacidadPage,
});

function PrivacidadPage() {
  const { lang } = useLang();
  return <LegalPage {...privacy[lang]} />;
}
