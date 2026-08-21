import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

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
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TerminosPage,
});

function TerminosPage() {
  return (
    <LegalPage
      breadcrumb="Términos y condiciones"
      title="Términos y condiciones"
      intro="Estos términos regulan el acceso y uso del sitio web de Elemento Abogados, con domicilio en la República de Guatemala. Al ingresar al sitio aceptas quedar vinculado por ellos, por lo que te recomendamos leerlos con detenimiento antes de utilizar nuestros servicios digitales."
      sections={[
        {
          title: "1. Uso del sitio web",
          paragraphs: [
            "El sitio de Elemento Abogados tiene como finalidad brindar información general sobre nuestros servicios legales, áreas de práctica y medios de contacto.",
            "Su uso es exclusivamente informativo y no constituye en ningún caso una relación abogado cliente, asesoría jurídica personalizada ni una oferta vinculante.",
          ],
        },
        {
          title: "2. Propiedad intelectual",
          paragraphs: [
            "Todos los contenidos del sitio, incluyendo textos, logotipos, imágenes, marcas, diseños y demás elementos gráficos o informativos, son propiedad exclusiva de Elemento Abogados o han sido licenciados para su uso. Queda prohibida su reproducción, distribución, modificación o uso no autorizado sin consentimiento expreso y por escrito.",
          ],
        },
        {
          title: "3. Exoneración de responsabilidad",
          paragraphs: [
            "No garantizamos la disponibilidad continua ni el funcionamiento libre de errores del sitio web. Tampoco somos responsables por el uso indebido de la información publicada ni por decisiones tomadas con base en dicha información sin el debido asesoramiento legal personalizado.",
          ],
        },
        {
          title: "4. Protección de datos",
          paragraphs: [
            "La información personal que nos proporciones a través del sitio será tratada conforme a nuestra política de privacidad. Al utilizar este sitio consientes expresamente el tratamiento de tus datos conforme a dicha política.",
          ],
        },
        {
          title: "5. Enlaces externos",
          paragraphs: [
            "El sitio puede contener enlaces a páginas de terceros que no son operadas por Elemento Abogados. No nos responsabilizamos por el contenido, las políticas o las prácticas de privacidad de sitios externos, ni por cualquier daño que pudieran ocasionar.",
          ],
        },
        {
          title: "6. Modificaciones",
          paragraphs: [
            "Elemento Abogados se reserva el derecho de modificar en cualquier momento y sin previo aviso estos términos y condiciones. Las modificaciones entran en vigor a partir de su publicación en este sitio, por lo que recomendamos revisar esta sección periódicamente.",
          ],
        },
        {
          title: "7. Legislación aplicable y jurisdicción",
          paragraphs: [
            "Estos términos y condiciones se rigen por las leyes de la República de Guatemala. Cualquier controversia relacionada con el uso del sitio web será resuelta ante los tribunales competentes del país.",
          ],
        },
      ]}
    />
  );
}
