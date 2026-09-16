import { useLang } from "@/lib/i18n";

export const ui = {
  es: {
    nav: {
      about: "Nosotros",
      services: "Servicios",
      team: "Equipo",
      contact: "Contacto",
      contactCta: "Contáctanos",
      allAreas: "Ver todas las áreas de práctica",
      menu: "Menú",
      close: "Cerrar",
      language: "Idioma",
    },
    common: {
      home: "Inicio",
      viewProfile: "Ver perfil",
      writeUs: "Escríbenos",
      callUs: "Llámanos",
      downloadDeck: "Descargar presentación",
      spanishVersion: "Versión en español",
      englishVersion: "Versión en inglés",
      officeAddress:
        "6a. Calle 5-28, Zona 9, Edificio Torre Cristal, Oficina 802, Ciudad de Guatemala",
      city: "Ciudad de Guatemala",
      rights: "Todos los derechos reservados.",
    },
    hero: {
      line1: "Más que abogados,",
      line2: "aliados estratégicos.",
      paragraph:
        "Acompañando a nuestros clientes, nacionales e internacionales, con asesoría legal multidisciplinaria, estratégica y cercana. Integramos experiencia, ética y excelencia para ofrecer soluciones personalizadas que generan confianza y valor sostenible.",
      stats: [
        ["10", "años de experiencia"],
        ["13", "áreas de práctica"],
        ["500+", "casos resueltos"],
      ] as [string, string][],
    },
    pillars: [
      {
        title: "Asesoría legal integral",
        desc: "Contratos, acuerdos y documentos con plena seguridad jurídica.",
      },
      {
        title: "Equipo de alto nivel",
        desc: "Experiencia y conocimiento especializado para abordar asuntos complejos y decisiones estratégicas.",
      },
      {
        title: "Resolución de conflictos",
        desc: "Soluciones rápidas y favorables que priorizan tus intereses.",
      },
    ],
    practicePillars: {
      eyebrow: "Los pilares de nuestra práctica",
      title: "Principios que orientan cada asesoría",
      items: [
        {
          title: "Excelencia",
          body: "Los más altos estándares de calidad, rigor y criterio jurídico orientan cada asunto que asumimos y cada solución que desarrollamos.",
        },
        {
          title: "Talento",
          body: "Reunimos profesionales de primer nivel y distintas áreas de práctica para ofrecer una asesoría integral, sofisticada y consistente.",
        },
        {
          title: "Compromiso con el cliente",
          body: "Conocemos el negocio, entendemos sus desafíos y trabajamos junto a nuestros clientes para alcanzar sus objetivos y proteger sus intereses.",
        },
        {
          title: "Innovación",
          body: "Integramos conocimiento, tecnología y nuevas formas de trabajo para anticiparnos a los desafíos y ofrecer soluciones eficientes en un entorno en constante evolución.",
        },
      ],
    },
    about: {
      eyebrow: "Acerca de nosotros",
      titleLead: "Somos ",
      titleTail: ", con más de 10 años de experiencia.",
      paragraph:
        "Diseñamos soluciones legales estratégicas que protegen los intereses de nuestros clientes, fortalecen sus decisiones y contribuyen al logro de sus objetivos.",
      imageAlt: "Vista panorámica de la ciudad donde opera Elemento Abogados",
      bullets: [
        "Equipo legal especializado",
        "Estrategias de litigio con resultados ampliamente satisfactorios",
        "La confianza de nuestros clientes respalda nuestra trayectoria",
        "Honorarios claros y transparentes",
        "Excelencia jurídica sustentada en eficiencia, eficacia y ética.",
        "Soluciones ágiles y eficientes",
        "Asistencia rápida y oportuna",
      ],
    },
    services: {
      eyebrow: "Nuestros servicios",
      titleLead: "Áreas de práctica con ",
      titleHighlight: "resultados comprobados",
      titleTail: ".",
      note: "Áreas de práctica respaldadas por un equipo experto, alineadas a las necesidades reales de tu caso.",
    },
    whyUs: {
      eyebrow: "¿Por qué colaborar con nosotros?",
      title: "Soluciones legales con visión estratégica",
      items: [
        {
          title: "Asesoría personalizada",
          desc: "Atención única, entendiendo a fondo tu situación y objetivos.",
        },
        {
          title: "Comprometidos con el logro de sus objetivos",
          desc: "Buscamos siempre la mejor resolución, defendiendo tus derechos.",
        },
        {
          title: "Especialización en cada área de práctica",
          desc: "Expertos en distintas ramas, preparados para cada desafío.",
        },
      ],
    },
    team: {
      eyebrow: "Nuestro equipo",
      titleLead: "Los ",
      titleHighlight: "profesionales",
      titleTail: " detrás de cada decisión.",
      cta: "Conocer al equipo",
      partners: "Socios",
      associates: "Abogados asociados",
      photoPending: "Foto pendiente",
      pageTitle: "Nuestro equipo",
      pageIntro:
        "Un grupo multidisciplinario de abogados que combina experiencia, ética y cercanía para acompañar a nuestros clientes en cada decisión.",
      talkTitle: "¿Quieres hablar con uno de nuestros abogados?",
      talkDesc: "Escríbenos y te contactamos en menos de 24 horas.",
      contactInfo: "Información de contacto",
      practiceAreas: "Áreas de práctica",
      education: "Formación profesional",
      memberships: "Membresías",
      languages: "Idiomas",
    },
    askUs: {
      title: "¿Tienes alguna pregunta adicional?",
      subtitle: "Un abogado te responderá directamente por correo.",
      writeTo: "Escríbenos a",
      name: "Nombre",
      namePlaceholder: "Tu nombre completo",
      email: "Correo",
      emailPlaceholder: "tu@correo.com",
      question: "Tu pregunta",
      questionPlaceholder: "Escribe tu pregunta aquí...",
      sent: "¡Gracias! Recibimos tu mensaje y te responderemos por correo.",
      error: "No pudimos enviar tu mensaje. Escríbenos a info@elementoabogados.com.",
      idle: "Te responderemos directamente por correo.",
      sending: "Enviando...",
      submit: "Enviar pregunta",
    },
    contact: {
      eyebrow: "Contacto",
      titleLine1: "Estamos a una",
      titleLine2: "conversación de distancia.",
      paragraph:
        "Agenda una primera consulta o visítanos en nuestra oficina en la Ciudad de Guatemala.",
      phone: "Teléfono",
      email: "Correo",
      office: "Oficina",
      hours: "Horario",
      hoursValue: "Lunes a viernes, 8:00 a 17:00",
      teamAlt: "Equipo de Elemento Abogados",
    },
    footer: {
      legal: "Legal",
      contact: "Contacto",
      follow: "Síguenos",
      about: "Nosotros",
      privacy: "Políticas de privacidad",
      terms: "Términos y condiciones",
    },
    servicesPage: {
      eyebrow: "Áreas de práctica",
      title: "Asesoría legal multidisciplinaria, estratégica y cercana.",
      intro:
        "Trece áreas de práctica que se integran entre sí para resolver asuntos corporativos, regulatorios y litigiosos con una sola visión de estrategia.",
      notFoundTitle: "Área de práctica no encontrada",
      notFoundDesc: "Revisa el listado completo de nuestras áreas de práctica.",
      seeAreas: "Ver áreas de práctica",
      heroEyebrow: "Servicios legales · Elemento Abogados",
      needHelpLead: "¿Necesitas asesoría en ",
      needHelpTail: "?",
      needHelpDesc: "Cuéntanos tu caso y te contactamos con el abogado indicado para esta área.",
      scheduleCta: "Agenda una consulta",
      talkTitle: "Hablemos de tu caso",
      related: "Áreas relacionadas",
      seeAll: "Ver todas las áreas",
      subjectPrefix: "Consulta:",
    },
  },

  en: {
    nav: {
      about: "About us",
      services: "Practice areas",
      team: "Team",
      contact: "Contact",
      contactCta: "Contact us",
      allAreas: "See all practice areas",
      menu: "Menu",
      close: "Close",
      language: "Language",
    },
    common: {
      home: "Home",
      viewProfile: "View profile",
      writeUs: "Email us",
      callUs: "Call us",
      downloadDeck: "Download our brochure",
      spanishVersion: "Spanish version",
      englishVersion: "English version",
      officeAddress:
        "6a. Calle 5-28, Zona 9, Torre Cristal Building, Suite 802, Guatemala City",
      city: "Guatemala City",
      rights: "All rights reserved.",
    },
    hero: {
      line1: "More than just lawyers,",
      line2: "strategic partners.",
      paragraph:
        "We support our clients both domestic and international with multidisciplinary, strategic, and personalized legal counsel. We combine experience, ethics, and excellence to offer tailored solutions that build trust and create sustainable value.",
      stats: [
        ["10", "years of experience"],
        ["13", "practice areas"],
        ["500+", "matters resolved"],
      ] as [string, string][],
    },
    pillars: [
      {
        title: "Comprehensive legal counsel",
        desc: "Contracts, agreements and documents drafted with full legal certainty.",
      },
      {
        title: "Senior-level team",
        desc: "Experience and specialized knowledge to handle complex matters and strategic decisions.",
      },
      {
        title: "Dispute resolution",
        desc: "Swift, favorable solutions that put your interests first.",
      },
    ],
    practicePillars: {
      eyebrow: "The pillars of our practice",
      title: "Principles that guide every engagement",
      items: [
        {
          title: "Excellence",
          body: "The highest standards of quality, rigor and legal judgment guide every matter we take on and every solution we develop.",
        },
        {
          title: "Talent",
          body: "We bring together top-tier professionals from different practice areas to deliver comprehensive, sophisticated and consistent counsel.",
        },
        {
          title: "Client commitment",
          body: "We know the business, understand its challenges and work alongside our clients to achieve their goals and protect their interests.",
        },
        {
          title: "Innovation",
          body: "We combine knowledge, technology and new ways of working to anticipate challenges and deliver efficient solutions in a constantly evolving environment.",
        },
      ],
    },
    about: {
      eyebrow: "About us",
      titleLead: "We are ",
      titleTail: ", with more than 10 years of experience.",
      paragraph:
        "We design strategic legal solutions that protect our clients' interests, strengthen their decisions and help them reach their goals.",
      imageAlt: "Panoramic view of the city where Elemento Abogados operates",
      bullets: [
        "Specialized legal team",
        "Litigation strategies with consistently strong outcomes",
        "Our clients' trust backs our track record",
        "Clear and transparent fees",
        "Legal excellence grounded in efficiency, effectiveness and ethics.",
        "Agile and efficient solutions",
        "Prompt and timely assistance",
      ],
    },
    services: {
      eyebrow: "Our services",
      titleLead: "Practice areas with ",
      titleHighlight: "proven results",
      titleTail: ".",
      note: "Practice areas backed by an expert team and aligned with the real needs of your matter.",
    },
    whyUs: {
      eyebrow: "Why work with us?",
      title: "Legal solutions with strategic vision",
      items: [
        {
          title: "Tailored counsel",
          desc: "Dedicated attention, with a deep understanding of your situation and goals.",
        },
        {
          title: "Committed to your objectives",
          desc: "We always pursue the best possible outcome while defending your rights.",
        },
        {
          title: "Specialists in every practice area",
          desc: "Experts across disciplines, prepared for every challenge.",
        },
      ],
    },
    team: {
      eyebrow: "Our team",
      titleLead: "The ",
      titleHighlight: "professionals",
      titleTail: " behind every decision.",
      cta: "Meet the team",
      partners: "Partners",
      associates: "Associates",
      photoPending: "Photo coming soon",
      pageTitle: "Our team",
      pageIntro:
        "A multidisciplinary group of lawyers combining experience, ethics and closeness to support our clients in every decision.",
      talkTitle: "Would you like to speak with one of our lawyers?",
      talkDesc: "Send us a message and we will get back to you within 24 hours.",
      contactInfo: "Contact information",
      practiceAreas: "Practice areas",
      education: "Education",
      memberships: "Memberships",
      languages: "Languages",
    },
    askUs: {
      title: "Do you have another question?",
      subtitle: "A lawyer will reply to you directly by email.",
      writeTo: "Write to us at",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "you@email.com",
      question: "Your question",
      questionPlaceholder: "Write your question here...",
      sent: "Thank you. We received your message and will reply by email.",
      error: "We could not send your message. Please write to info@elementoabogados.com.",
      idle: "We will reply to you directly by email.",
      sending: "Sending...",
      submit: "Send question",
    },
    contact: {
      eyebrow: "Contact",
      titleLine1: "We are one",
      titleLine2: "conversation away.",
      paragraph:
        "Book a first consultation or visit us at our office in Guatemala City.",
      phone: "Phone",
      email: "Email",
      office: "Office",
      hours: "Hours",
      hoursValue: "Monday to Friday, 8:00 to 17:00",
      teamAlt: "Elemento Abogados team",
    },
    footer: {
      legal: "Legal",
      contact: "Contact",
      follow: "Follow us",
      about: "About us",
      privacy: "Privacy policy",
      terms: "Terms and conditions",
    },
    servicesPage: {
      eyebrow: "Practice areas",
      title: "Multidisciplinary, strategic and close legal counsel.",
      intro:
        "Thirteen practice areas that work together to resolve corporate, regulatory and litigation matters under a single strategic vision.",
      notFoundTitle: "Practice area not found",
      notFoundDesc: "Take a look at the full list of our practice areas.",
      seeAreas: "See practice areas",
      heroEyebrow: "Legal services · Elemento Abogados",
      needHelpLead: "Do you need advice on ",
      needHelpTail: "?",
      needHelpDesc: "Tell us about your matter and we will connect you with the right lawyer for this area.",
      scheduleCta: "Book a consultation",
      talkTitle: "Let's talk about your matter",
      related: "Related areas",
      seeAll: "See all practice areas",
      subjectPrefix: "Inquiry:",
    },
  },
} as const;

export type UI = (typeof ui)["es"];

export function useUI(): UI {
  const { lang } = useLang();
  return ui[lang] as unknown as UI;
}
