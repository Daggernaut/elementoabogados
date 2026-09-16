export type LegalSection = { title?: string; paragraphs: string[] };
export type LegalDoc = { breadcrumb: string; title: string; intro: string; sections: LegalSection[] };

export const privacy: Record<"es" | "en", LegalDoc> = {
  es: {
    breadcrumb: "Políticas de privacidad",
    title: "Políticas de privacidad",
    intro:
      "En Elemento Abogados la privacidad y la protección de los datos personales son principios fundamentales que rigen nuestra relación con clientes, usuarios y aliados. Aquí explicamos cómo recopilamos, usamos, almacenamos y protegemos la información que nos compartes a través de nuestro sitio web y demás canales de comunicación.",
    sections: [
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
    ],
  },
  en: {
    breadcrumb: "Privacy Policy",
    title: "Privacy Policy",
    intro:
      "At Elemento Abogados, privacy and the protection of personal data are fundamental principles that govern our relationship with clients, users and partners. Here we explain how we collect, use, store and protect the information you share with us through our website and other communication channels.",
    sections: [
      {
        title: "Collection of information",
        paragraphs: [
          "We collect only the information necessary to provide efficient and personalized legal advice. This includes, among other things, full name, contact details such as email address and phone number, and information related to the inquiry or the service requested.",
          "This information is provided voluntarily by the user when filling out forms, sending us emails or contacting us through any other means.",
        ],
      },
      {
        title: "Use of information",
        paragraphs: [
          "We use personal data exclusively to attend to legal inquiries and requests, provide information about our legal services, fulfill contractual and legal obligations, and improve our service and communication processes.",
          "We do not use the information for commercial purposes unrelated to our legal activity, nor do we share it without consent.",
        ],
      },
      {
        title: "Confidentiality and security",
        paragraphs: [
          "We treat every piece of data with the strictest confidentiality. We have implemented technical, administrative and legal security measures to keep information protected against unauthorized access, alteration or improper disclosure.",
        ],
      },
      {
        title: "Sharing of information",
        paragraphs: [
          "Personal information will not be shared with third parties, except with the express authorization of the data owner, when required by a competent authority under the law, or when necessary to fulfill a contractual obligation strictly related to our services.",
        ],
      },
      {
        title: "User rights",
        paragraphs: [
          "Every person has the right to access, modify, update or delete their personal data at any time. To exercise these rights, you may write to us at our institutional email address.",
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "Elemento Abogados may update this policy at any time. Any relevant change will be published on this website to keep our clients and users informed.",
        ],
      },
    ],
  },
};

export const terms: Record<"es" | "en", LegalDoc> = {
  es: {
    breadcrumb: "Términos y condiciones",
    title: "Términos y condiciones",
    intro:
      "Estos términos regulan el acceso y uso del sitio web de Elemento Abogados, con domicilio en la República de Guatemala. Al ingresar al sitio aceptas quedar vinculado por ellos, por lo que te recomendamos leerlos con detenimiento antes de utilizar nuestros servicios digitales.",
    sections: [
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
    ],
  },
  en: {
    breadcrumb: "Terms and Conditions",
    title: "Terms and Conditions",
    intro:
      "These terms govern access to and use of the Elemento Abogados website, domiciled in the Republic of Guatemala. By accessing the site you agree to be bound by them, so we recommend reading them carefully before using our digital services.",
    sections: [
      {
        title: "1. Use of the website",
        paragraphs: [
          "The purpose of the Elemento Abogados website is to provide general information about our legal services, practice areas and contact channels.",
          "Its use is exclusively informational and does not, under any circumstances, constitute an attorney-client relationship, personalized legal advice or a binding offer.",
        ],
      },
      {
        title: "2. Intellectual property",
        paragraphs: [
          "All content on the site, including texts, logos, images, trademarks, designs and other graphic or informational elements, is the exclusive property of Elemento Abogados or has been licensed for its use. Reproduction, distribution, modification or unauthorized use without express written consent is prohibited.",
        ],
      },
      {
        title: "3. Disclaimer of liability",
        paragraphs: [
          "We do not guarantee continuous availability or error-free operation of the website. We are also not responsible for misuse of the information published or for decisions made based on such information without proper personalized legal advice.",
        ],
      },
      {
        title: "4. Data protection",
        paragraphs: [
          "The personal information you provide through the site will be treated in accordance with our privacy policy. By using this site, you expressly consent to the processing of your data in accordance with that policy.",
        ],
      },
      {
        title: "5. External links",
        paragraphs: [
          "The site may contain links to third-party pages that are not operated by Elemento Abogados. We are not responsible for the content, policies or privacy practices of external sites, nor for any damage they may cause.",
        ],
      },
      {
        title: "6. Modifications",
        paragraphs: [
          "Elemento Abogados reserves the right to modify these terms and conditions at any time and without prior notice. Modifications take effect upon publication on this site, so we recommend reviewing this section periodically.",
        ],
      },
      {
        title: "7. Governing law and jurisdiction",
        paragraphs: [
          "These terms and conditions are governed by the laws of the Republic of Guatemala. Any dispute related to the use of the website will be resolved before the competent courts of the country.",
        ],
      },
    ],
  },
};
