import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";
import { useLang } from "@/lib/i18n";
import { terms } from "@/lib/legal-content";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones | Elemento Abogados" },
      {
        name: "description",
        content:
          "Términos y condiciones que regulan el acceso y uso del sitio web de Elemento Abogados, firma legal en Guatemala.",
      },
      { property: "og:title", content: "Términos y condiciones | Elemento Abogados" },
      {
        property: "og:description",
        content: "Condiciones de uso del sitio web de Elemento Abogados.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elementoabogados.lovable.app/terminos-y-condiciones" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TerminosPage,
});

function TerminosPage() {
  const { lang } = useLang();
  return <LegalPage {...terms[lang]} />;
}
