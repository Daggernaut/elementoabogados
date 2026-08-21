import {
  Building2,
  Home,
  Handshake,
  ScrollText,
  Lightbulb,
  Gavel,
  Receipt,
  ShieldAlert,
  Landmark,
  Banknote,
  FileCheck2,
  Plane,
  Users,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  intro: string;
};

export const services: Service[] = [
  {
    slug: "derecho-corporativo",
    icon: Building2,
    title: "Derecho Corporativo",
    desc: "Estructura societaria sólida para operaciones complejas.",
    intro:
      "Acompañamos a empresas nacionales e internacionales en el diseño y mantenimiento de estructuras societarias que respondan a la realidad de su operación y a sus planes de crecimiento.",
  },
  {
    slug: "derecho-inmobiliario",
    icon: Home,
    title: "Derecho Inmobiliario",
    desc: "Certeza jurídica para proyectos inmobiliarios de gran escala.",
    intro:
      "Brindamos seguridad jurídica en la adquisición, desarrollo y comercialización de proyectos inmobiliarios, desde la revisión registral hasta la estructuración contractual.",
  },
  {
    slug: "fusiones-y-adquisiciones",
    icon: Handshake,
    title: "Fusiones y Adquisiciones (M&A)",
    desc: "Acompañamiento estratégico integral en transacciones corporativas complejas.",
    intro:
      "Participamos en cada etapa de la transacción: due diligence, negociación, estructuración e integración posterior al cierre.",
  },
  {
    slug: "sectores-regulados",
    icon: ScrollText,
    title: "Sectores Regulados",
    desc: "Representación especializada frente a autoridades reguladoras sectoriales.",
    intro:
      "Representamos a clientes de sectores altamente regulados ante las autoridades competentes, con un enfoque preventivo y de gestión de riesgo.",
  },
  {
    slug: "propiedad-intelectual",
    icon: Lightbulb,
    title: "Propiedad Intelectual",
    desc: "Protección estratégica de activos intangibles y creativos.",
    intro:
      "Protegemos marcas, patentes, derechos de autor y secretos empresariales, y defendemos esos activos frente a usos indebidos.",
  },
  {
    slug: "resolucion-de-controversias",
    icon: Gavel,
    title: "Resolución de Controversias",
    desc: "Defensa efectiva en litigios y procesos arbitrales complejos.",
    intro:
      "Litigio civil, mercantil y arbitraje nacional e internacional, con estrategias diseñadas para resolver el conflicto de la forma más conveniente para el cliente.",
  },
  {
    slug: "fiscal",
    icon: Receipt,
    title: "Fiscal",
    desc: "Estrategia fiscal integral para operaciones nacionales e internacionales.",
    intro:
      "Planificación fiscal, cumplimiento tributario y defensa en procedimientos administrativos y judiciales ante la administración tributaria.",
  },
  {
    slug: "litigio-penal",
    icon: ShieldAlert,
    title: "Litigio Penal",
    desc: "Defensa estratégica en investigaciones y procesos penales.",
    intro:
      "Defensa técnica y querella en investigaciones y procesos penales, incluyendo delitos económicos y de cuello blanco.",
  },
  {
    slug: "derecho-constitucional",
    icon: Landmark,
    title: "Derecho Constitucional",
    desc: "Protección de derechos fundamentales frente al Estado.",
    intro:
      "Amparos, inconstitucionalidades y acciones de protección de derechos fundamentales frente a actos del poder público.",
  },
  {
    slug: "banca-y-finanzas",
    icon: Banknote,
    title: "Banca y Finanzas",
    desc: "Estructuración legal de operaciones financieras sofisticadas.",
    intro:
      "Estructuración de créditos, financiamiento de proyectos y cumplimiento regulatorio para entidades financieras y empresas.",
  },
  {
    slug: "compliance-y-gobierno-corporativo",
    icon: FileCheck2,
    title: "Compliance y Gobierno Corporativo",
    desc: "Cultura de cumplimiento y buen gobierno corporativo.",
    intro:
      "Diseño e implementación de programas de cumplimiento, políticas internas y órganos de gobierno que fortalecen la toma de decisiones.",
  },
  {
    slug: "migratorio-y-laboral",
    icon: Plane,
    title: "Migratorio y Laboral",
    desc: "Gestión integral del talento humano transfronterizo.",
    intro:
      "Movilidad internacional, permisos de trabajo, contratación y relaciones laborales, con acompañamiento en procesos ante autoridades.",
  },
  {
    slug: "planificacion-patrimonial-y-sucesoria",
    icon: Users,
    title: "Planificación Patrimonial y Sucesoria",
    desc: "Estructuras flexibles para la sucesión patrimonial familiar.",
    intro:
      "Fideicomisos, protocolos familiares y vehículos de tenencia patrimonial que ordenan la sucesión y preservan el patrimonio.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
