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

import imgCorporativo from "@/assets/svc-derecho-corporativo.jpg.asset.json";
import imgInmobiliario from "@/assets/svc-derecho-inmobiliario.jpg.asset.json";
import imgMA from "@/assets/svc-fusiones-y-adquisiciones.jpg.asset.json";
import imgRegulados from "@/assets/svc-sectores-regulados.jpg.asset.json";
import imgPI from "@/assets/svc-propiedad-intelectual.jpg.asset.json";
import imgControversias from "@/assets/svc-resolucion-de-controversias.jpg.asset.json";
import imgFiscal from "@/assets/svc-fiscal.jpg.asset.json";
import imgPenal from "@/assets/svc-litigio-penal.jpg.asset.json";
import imgConstitucional from "@/assets/svc-derecho-constitucional.jpg.asset.json";
import imgBanca from "@/assets/banca-finanzas-header.jpg.asset.json";
import imgCompliance from "@/assets/svc-compliance-y-gobierno-corporativo.jpg.asset.json";
import imgMigratorio from "@/assets/svc-migratorio-y-laboral.jpg.asset.json";
import imgPatrimonial from "@/assets/svc-planificacion-patrimonial-y-sucesoria.jpg.asset.json";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  intro: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
};

export const services: Service[] = [
  {
    slug: "derecho-corporativo",
    icon: Building2,
    title: "Derecho Corporativo",
    desc: "Estructura societaria sólida para operaciones complejas.",
    image: imgCorporativo.url,
    imageAlt: "Vestíbulo corporativo moderno con ejecutivos",
    intro:
      "Asesoramos a empresas nacionales e internacionales en la estructuración, constitución, reorganización, administración y disolución de sociedades.",
    paragraphs: [
      "Asesoramos a empresas nacionales e internacionales en la estructuración, constitución, reorganización, administración y disolución de sociedades, así como en la negociación de acuerdos entre accionistas y la implementación de estructuras corporativas transfronterizas.",
      "Nuestro enfoque integral garantiza el cumplimiento normativo, la mitigación de riesgos y la optimización legal de las operaciones comerciales de nuestros clientes, acompañándolos en cada etapa de su crecimiento y consolidación.",
    ],
  },
  {
    slug: "derecho-inmobiliario",
    icon: Home,
    title: "Derecho Inmobiliario",
    desc: "Certeza jurídica para proyectos inmobiliarios de gran escala.",
    image: imgInmobiliario.url,
    imageAlt: "Desarrollo inmobiliario y torres residenciales al atardecer",
    intro:
      "Brindamos asesoría integral en todas las etapas de proyectos inmobiliarios, resguardando la seguridad jurídica de cada transacción.",
    paragraphs: [
      "Brindamos asesoría integral en todas las etapas de proyectos inmobiliarios, incluyendo la compraventa de bienes inmuebles, estructuración de financiamiento, negociación de contratos de arrendamiento, procesos de due diligence y desarrollo urbanístico.",
      "Asesoramos en regímenes de propiedad horizontal, incluyendo proyectos de uso mixto, regímenes de condominio y parques industriales, resguardando en todo momento la seguridad jurídica de cada transacción y protegiendo la inversión de nuestros clientes.",
    ],
  },
  {
    slug: "fusiones-y-adquisiciones",
    icon: Handshake,
    title: "Fusiones y Adquisiciones (M&A)",
    desc: "Acompañamiento estratégico integral en transacciones corporativas complejas.",
    image: imgMA.url,
    imageAlt: "Ejecutivos cerrando un acuerdo en una sala de juntas",
    intro:
      "Amplia experiencia en procesos de due diligence para la ejecución de fusiones, adquisiciones y reestructuraciones empresariales.",
    paragraphs: [
      "Contamos con amplia experiencia en procesos de due diligence para la ejecución de fusiones, adquisiciones y reestructuraciones empresariales, tanto locales como transfronterizas.",
      "Acompañamos a nuestros clientes desde la planificación estratégica y estructuración de la transacción hasta la negociación, ejecución legal y cierre, incluyendo la coordinación de aspectos regulatorios, fiscales y laborales que garantizan una integración exitosa después de la transacción.",
    ],
  },
  {
    slug: "sectores-regulados",
    icon: ScrollText,
    title: "Sectores Regulados",
    desc: "Representación especializada frente a autoridades reguladoras sectoriales.",
    image: imgRegulados.url,
    imageAlt: "Infraestructura de energía y telecomunicaciones al anochecer",
    intro:
      "Asesoría y representación a empresas sujetas a supervisión o regulación estatal en industrias altamente reguladas.",
    paragraphs: [
      "Brindamos asesoría y representación a empresas sujetas a supervisión o regulación estatal, incluyendo los sectores de energía, minería, recursos naturales, telecomunicaciones, servicios financieros y otras industrias altamente reguladas.",
      "Acompañamos a nuestros clientes en la obtención de licencias, autorizaciones y permisos, así como en su interacción con entes reguladores, asegurando el cumplimiento normativo continuo de sus operaciones.",
    ],
  },
  {
    slug: "propiedad-intelectual",
    icon: Lightbulb,
    title: "Propiedad Intelectual",
    desc: "Protección estratégica de activos intangibles y creativos.",
    image: imgPI.url,
    imageAlt: "Estudio creativo con planos y prototipos de marca",
    intro:
      "Protegemos y gestionamos activos intangibles: marcas, patentes, derechos de autor y secretos comerciales.",
    paragraphs: [
      "Protegemos y gestionamos activos intangibles, incluyendo marcas, patentes, derechos de autor y secretos comerciales.",
      "Nuestra práctica abarca tanto el registro y la explotación comercial de estos derechos como su defensa administrativa y judicial ante actos de infracción, asesorando a nuestros clientes en la construcción de estrategias de protección alineadas con sus objetivos comerciales.",
    ],
  },
  {
    slug: "resolucion-de-controversias",
    icon: Gavel,
    title: "Resolución de Controversias",
    desc: "Defensa efectiva en litigios y procesos arbitrales complejos.",
    image: imgControversias.url,
    imageAlt: "Sala de audiencias moderna",
    intro:
      "Litigio civil, comercial y arbitral, con estrategias procesales diseñadas a la medida de cada caso.",
    paragraphs: [
      "Representamos a nuestros clientes en litigios judiciales, arbitrajes nacionales e internacionales, conflictos societarios, disputas contractuales y reclamaciones patrimoniales.",
      "Nuestro equipo diseña estrategias procesales a la medida de cada caso, gestionando medidas cautelares y procesos de ejecución de sentencias, con el objetivo de proteger de manera eficaz los intereses de nuestros clientes en cualquier instancia.",
    ],
  },
  {
    slug: "fiscal",
    icon: Receipt,
    title: "Fiscal",
    desc: "Estrategia fiscal integral para operaciones nacionales e internacionales.",
    image: imgFiscal.url,
    imageAlt: "Análisis de documentos financieros y tributarios",
    intro:
      "Planificación fiscal, auditorías tributarias, litigio tributario y recuperación de créditos fiscales.",
    paragraphs: [
      "Brindamos servicios de planificación fiscal, acompañamiento en auditorías tributarias, procedimientos ante la Superintendencia de Administración Tributaria (SAT), litigio tributario y recuperación de créditos fiscales.",
      "Nuestro enfoque combina el conocimiento técnico de la normativa fiscal con una visión estratégica de negocio, permitiendo a nuestros clientes optimizar su carga tributaria dentro de un marco de pleno cumplimiento legal.",
    ],
  },
  {
    slug: "litigio-penal",
    icon: ShieldAlert,
    title: "Litigio Penal",
    desc: "Defensa estratégica en investigaciones y procesos penales.",
    image: imgPenal.url,
    imageAlt: "Fachada de un tribunal de justicia en la noche",
    intro:
      "Representamos a empresas, directivos y particulares en investigaciones y procesos penales de alta complejidad.",
    paragraphs: [
      "Representamos a empresas, directivos y particulares en investigaciones y procesos penales de alta complejidad, brindando defensa estratégica y acompañamiento integral en asuntos relacionados con delitos económicos, financieros, patrimoniales y corporativos.",
      "Nuestra práctica integra análisis preventivo, gestión de crisis reputacional y coordinación con otras áreas del derecho, para proteger de forma efectiva los intereses de nuestros clientes.",
    ],
  },
  {
    slug: "derecho-constitucional",
    icon: Landmark,
    title: "Derecho Constitucional",
    desc: "Protección de derechos fundamentales frente al Estado.",
    image: imgConstitucional.url,
    imageAlt: "Fachada de la corte suprema con cielo dramático",
    intro:
      "Representamos a nuestros clientes en controversias constitucionales de alta relevancia.",
    paragraphs: [
      "Representamos a nuestros clientes en controversias constitucionales de alta relevancia, promoviendo y defendiendo acciones destinadas a proteger derechos fundamentales, garantizar el debido proceso y preservar la seguridad jurídica frente a actuaciones de autoridades públicas y particulares.",
      "Nuestra experiencia nos permite litigar con solidez ante las más altas instancias jurisdiccionales del país.",
    ],
  },
  {
    slug: "banca-y-finanzas",
    icon: Banknote,
    title: "Banca y Finanzas",
    desc: "Estructuración legal de operaciones financieras sofisticadas.",
    image: imgBanca.url,
    imageAlt: "Distrito financiero corporativo",
    intro:
      "Asesoramos a entidades financieras, inversionistas y empresas en operaciones financieras complejas.",
    paragraphs: [
      "Asesoramos a entidades financieras, inversionistas y empresas en la estructuración, negociación e implementación de operaciones financieras complejas, incluyendo financiamientos sindicados, emisión de instrumentos de deuda y garantías.",
      "Acompañamos a nuestros clientes en la gestión de riesgos, el cumplimiento regulatorio y el desarrollo de sus actividades de financiamiento e inversión.",
    ],
  },
  {
    slug: "compliance-y-gobierno-corporativo",
    icon: FileCheck2,
    title: "Compliance y Gobierno Corporativo",
    desc: "Cultura de cumplimiento y buen gobierno corporativo.",
    image: imgCompliance.url,
    imageAlt: "Reunión de directorio revisando políticas corporativas",
    intro:
      "Diseñamos, implementamos y supervisamos programas de cumplimiento normativo alineados a estándares nacionales e internacionales.",
    paragraphs: [
      "Diseñamos, implementamos y supervisamos programas de cumplimiento normativo alineados a estándares nacionales e internacionales.",
      "Asistimos a nuestros clientes en la prevención de riesgos legales, la lucha contra el soborno y el lavado de dinero, el cumplimiento tributario y la adopción de prácticas de buen gobierno corporativo que fortalecen la sostenibilidad y reputación institucional de sus organizaciones.",
    ],
  },
  {
    slug: "migratorio-y-laboral",
    icon: Plane,
    title: "Migratorio y Laboral",
    desc: "Gestión integral del talento humano transfronterizo.",
    image: imgMigratorio.url,
    imageAlt: "Ejecutivos en tránsito en una terminal aérea",
    intro:
      "Asesoría del más alto nivel en movilidad internacional y gestión del talento humano.",
    paragraphs: [
      "El crecimiento y expansión de los mercados internacionales ha impulsado a empresas transnacionales a iniciar nuevas operaciones en la región centroamericana, generando la necesidad de contar con trabajadores extranjeros calificados en los procesos de instalación, manejo y expansión de sus operaciones.",
      "Nuestra práctica laboral brinda asesoría del más alto nivel, bajo una metodología innovadora que combina el rigor legal con una visión práctica y moderna de la gestión del talento humano.",
    ],
  },
  {
    slug: "planificacion-patrimonial-y-sucesoria",
    icon: Users,
    title: "Planificación Patrimonial y Sucesoria",
    desc: "Estructuras flexibles para la sucesión patrimonial familiar.",
    image: imgPatrimonial.url,
    imageAlt: "Familia en un hogar con luz cálida",
    intro:
      "Estructuras de sucesión que permiten disponer del patrimonio de forma flexible y acorde a cada cliente.",
    paragraphs: [
      "La creciente necesidad de contar con una planificación patrimonial y sucesoria adecuada cobra especial relevancia en el contexto actual.",
      "Los ordenamientos jurídicos prevén la posibilidad de implementar estructuras de sucesión que permiten disponer del patrimonio de forma flexible, ágil y acorde a las intenciones de cada cliente. Acompañamos a nuestros clientes en la definición de sus herederos y en el establecimiento de los términos y condiciones que mejor protejan el legado de su patrimonio.",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
