import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

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
  return (
    <LegalPage
      breadcrumb="Políticas de privacidad"
      title="Políticas de privacidad"
      intro="En Elemento Abogados la privacidad y la protección de los datos personales son principios fundamentales que rigen nuestra relación con clientes, usuarios y aliados. Aquí explicamos cómo recopilamos, usamos, almacenamos y protegemos la información que nos compartes a través de nuestro sitio web y demás canales de comunicación."
      sections={[
        {
          title: "Recolección de información",
          paragraphs: [
            "Recopilamos únicamente la información necesaria para brindar asesoría legal eficiente y personalizada. Esto incluye, entre otros, nombre completo, datos de contacto como correo electrónico y número telefónico, e información relacionada con la consulta o el servicio solicitado.",
            "Esta información la proporciona el usuario de forma voluntaria al llenar formularios, enviarnos correos o contactarnos por cualquier otro medio.",
          ],
        },
        {
          title: "Uso de la información",
          paragraphs: [
            "Utilizamos los datos personales exclusivamente para atender consultas y solicitudes legales, ofrecer información sobre nuestros servicios jurídicos, cumplir obligaciones contractuales y legales, y mejorar nuestros procesos de atención y comunicación.",
            "No utilizamos la información con fines comerciales ajenos a nuestra actividad legal ni la compartimos sin consentimiento.",
          ],
        },
        {
          title: "Confidencialidad y seguridad",
          paragraphs: [
            "Tratamos cada dato con la más estricta confidencialidad. Hemos implementado medidas de seguridad técnicas, administrativas y legales para mantener la información protegida frente a accesos no autorizados, alteraciones o divulgaciones indebidas.",
          ],
        },
        {
          title: "Compartición de información",
          paragraphs: [
            "La información personal no será compartida con terceros, salvo que se cuente con autorización expresa del titular, que sea requerida por una autoridad competente conforme a la ley, o que resulte necesaria para cumplir una obligación contractual estrictamente relacionada con nuestros servicios.",
          ],
        },
        {
          title: "Derechos del usuario",
          paragraphs: [
            "Toda persona tiene derecho a acceder, modificar, actualizar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos puede escribirnos a nuestro correo electrónico institucional.",
          ],
        },
        {
          title: "Cambios a esta política",
          paragraphs: [
            "Elemento Abogados podrá actualizar esta política en cualquier momento. Cualquier cambio relevante será publicado en este sitio web para mantener informados a nuestros clientes y usuarios.",
          ],
        },
      ]}
    />
  );
}
