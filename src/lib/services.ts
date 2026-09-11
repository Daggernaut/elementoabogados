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
      "Asesoramos a empresas, grupos empresariales, accionistas e inversionistas en la estructuración, organización y desarrollo de sus operaciones corporativas.",
    paragraphs: [
      "Asesoramos a empresas, grupos empresariales, accionistas e inversionistas en la estructuración, organización y desarrollo de sus operaciones corporativas, acompañándolos en las distintas etapas de evolución de sus negocios.",
      "Nuestra práctica comprende la constitución, reorganización, administración y disolución de sociedades, así como el diseño de estructuras corporativas para operaciones locales y transfronterizas. Asesoramos asimismo en la negociación y documentación de acuerdos entre accionistas y otros mecanismos destinados a regular las relaciones entre socios, la administración de las compañías y la toma de decisiones estratégicas.",
      "Acompañamos a juntas directivas, accionistas y equipos ejecutivos en asuntos de gobierno corporativo, incluyendo la definición de estructuras de administración, esquemas de delegación de facultades, conformación y funcionamiento de órganos de gobierno y adopción de políticas y mecanismos internos adecuados a la estructura y necesidades de cada organización.",
      "Participamos en la estructuración y negociación de joint ventures, alianzas estratégicas, vehículos de inversión y otras formas de colaboración empresarial, diseñando estructuras que permitan definir con claridad los derechos económicos y políticos de las partes, los mecanismos de toma de decisiones, la asignación de riesgos y las alternativas de salida.",
      "Nuestro asesoramiento corporativo se integra con las distintas áreas de práctica de la firma para abordar de manera coordinada las implicaciones fiscales, laborales, regulatorias y de cumplimiento que puedan derivarse de las decisiones y operaciones de nuestros clientes.",
      "Nuestro enfoque combina conocimiento legal, visión de negocio y una comprensión cercana de las operaciones de cada cliente, permitiéndonos acompañar la toma de decisiones, anticipar riesgos y desarrollar estructuras corporativas que respondan a sus objetivos de crecimiento, inversión y desarrollo.",
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
      "Asesoramos a desarrolladores, inversionistas, propietarios, operadores y empresas en la estructuración, desarrollo, financiamiento y ejecución de proyectos y transacciones inmobiliarias.",
    paragraphs: [
      "Asesoramos a desarrolladores, inversionistas, propietarios, operadores y empresas en la estructuración, desarrollo, financiamiento y ejecución de proyectos y transacciones inmobiliarias.",
      "Nuestra práctica comprende todas las etapas del ciclo inmobiliario, desde la adquisición y disposición de activos y el análisis de viabilidad jurídica del proyecto hasta su estructuración, financiamiento, desarrollo, comercialización y operación. Participamos en la negociación de compraventas, arrendamientos, contratos de desarrollo y construcción, así como en procesos de due diligence y en la estructuración corporativa y fiscal de las operaciones.",
      "Contamos con experiencia en la estructuración de proyectos bajo regímenes de propiedad horizontal y condominio, incluyendo desarrollos residenciales, comerciales, industriales y de uso mixto. Asimismo, asesoramos en la estructuración de parques industriales, proyectos hoteleros y otros desarrollos inmobiliarios que requieren integrar distintos componentes jurídicos, operativos y comerciales.",
      "Acompañamos a nuestros clientes en la estructuración de vehículos de inversión, fideicomisos de administración y garantía, esquemas de financiamiento para adquisición y construcción y acuerdos de coinversión, coordinando los distintos aspectos legales necesarios para la ejecución del proyecto.",
      "Nuestra práctica incluye también el acompañamiento en procesos regulatorios vinculados con el desarrollo inmobiliario, incluyendo licencias, permisos de construcción, autorizaciones ambientales y demás aspectos administrativos necesarios para la planificación, desarrollo y operación de los proyectos.",
      "Conducimos procesos de due diligence inmobiliario orientados a identificar y evaluar aspectos relacionados con titularidad, gravámenes, limitaciones, servidumbres, condiciones registrales y otras contingencias que puedan afectar la adquisición, financiamiento, desarrollo o explotación de un activo.",
      "Nuestro enfoque combina conocimiento del mercado inmobiliario, visión de negocio y una ejecución legal eficiente, permitiéndonos anticipar riesgos, facilitar la toma de decisiones y acompañar a nuestros clientes desde la estructuración inicial hasta el desarrollo y operación de proyectos inmobiliarios complejos.",
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
      "Asesoramos a empresas, accionistas, inversionistas y grupos empresariales en fusiones, adquisiciones, desinversiones, reorganizaciones y otras transacciones corporativas.",
    paragraphs: [
      "Asesoramos a empresas, accionistas, inversionistas y grupos empresariales en fusiones, adquisiciones, desinversiones, reorganizaciones y otras transacciones corporativas, tanto locales como transfronterizas.",
      "Nuestra práctica comprende todas las etapas de una transacción, desde su estructuración inicial y el proceso de due diligence hasta la negociación, documentación, cierre e implementación. Abordamos cada operación desde una perspectiva integral, identificando sus implicaciones corporativas, contractuales, regulatorias, fiscales y laborales, así como los riesgos que puedan incidir en su estructura, valoración o ejecución.",
      "Representamos tanto a compradores como a vendedores en la adquisición y disposición de empresas, participaciones accionarias, unidades de negocio y activos. Asimismo, asesoramos a inversionistas estratégicos y fondos de inversión en la estructuración y ejecución de sus operaciones.",
      "Nuestra experiencia comprende la preparación y negociación de cartas de intención, acuerdos de confidencialidad, memorandos de entendimiento, contratos de compraventa de acciones y activos, acuerdos de inversión y demás documentación relacionada con la transacción, incluyendo estructuras de precio, ajustes posteriores al cierre, earn-outs, declaraciones y garantías, indemnizaciones y otros mecanismos de asignación de riesgo.",
      "Conducimos procesos de due diligence orientados a identificar y dimensionar los principales riesgos jurídicos de la operación y traducir sus hallazgos en decisiones concretas sobre la estructura, negociación y documentación de la transacción.",
      "En operaciones que involucran distintas jurisdicciones o requieren conocimientos especializados, coordinamos de manera integrada con asesores legales, financieros, fiscales, contables y técnicos, permitiendo al cliente gestionar la transacción bajo una estrategia común y con una visión clara de sus principales riesgos y objetivos.",
      "Nuestro enfoque combina visión de negocio, capacidad de negociación y una ejecución legal eficiente, permitiéndonos anticipar riesgos, facilitar la toma de decisiones y acompañar a nuestros clientes en la estructuración y cierre de transacciones complejas.",
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
      "Asesoramos a empresas, inversionistas y grupos empresariales que desarrollan actividades sujetas a regulación, supervisión o autorización estatal.",
    paragraphs: [
      "Asesoramos a empresas, inversionistas y grupos empresariales que desarrollan actividades sujetas a regulación, supervisión o autorización estatal, incluyendo los sectores de energía, minería, recursos naturales, telecomunicaciones, servicios financieros, alimentos y bebidas, y otras industrias reguladas.",
      "Nuestra práctica comprende el análisis y aplicación de marcos regulatorios, la estructuración de proyectos y operaciones sujetas a autorización administrativa y el acompañamiento en la obtención, modificación y mantenimiento de licencias, permisos, concesiones, registros y demás habilitaciones necesarias para el desarrollo de las actividades de nuestros clientes.",
      "Asesoramos en procesos de contratación pública y privada, licitaciones, concesiones, licencias de operación y otros instrumentos vinculados con la participación del sector privado en actividades reguladas, así como en asuntos relacionados con estructuras tarifarias, precios regulados y condiciones impuestas por autoridades sectoriales.",
      "Representamos a nuestros clientes en su interacción con autoridades y entidades reguladoras, incluyendo procedimientos administrativos, requerimientos de información, auditorías, inspecciones, procedimientos sancionadores y otras actuaciones que puedan incidir en sus operaciones, activos o derechos.",
      "Asimismo, acompañamos a nuestros clientes en la identificación y evaluación de cambios normativos que puedan afectar sus negocios, permitiéndoles anticipar sus implicaciones, adaptar sus operaciones y adoptar decisiones estratégicas frente a nuevos escenarios regulatorios.",
      "Nuestro enfoque combina conocimiento regulatorio, comprensión de la industria y visión de negocio, permitiéndonos abordar asuntos en los que las decisiones de las autoridades pueden tener un impacto significativo sobre la operación, inversión y desarrollo de nuestros clientes.",
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
      "Asesoramos a empresas, titulares de derechos e inversionistas en la protección, gestión y defensa de sus activos de propiedad intelectual.",
    paragraphs: [
      "Asesoramos a empresas, titulares de derechos e inversionistas en la protección, gestión y defensa de sus activos de propiedad intelectual, incluyendo marcas, patentes, derechos de autor y otros activos intangibles relevantes para sus operaciones y estrategia comercial.",
      "Nuestra práctica comprende el diseño y ejecución de estrategias de protección de propiedad intelectual, desde el registro y administración de derechos hasta su defensa frente a infracciones, usos no autorizados y otras conductas que puedan afectar su titularidad, exclusividad o valor comercial. Representamos a nuestros clientes en procedimientos administrativos, acciones judiciales y otras actuaciones dirigidas a proteger y hacer efectivos sus derechos.",
      "Asesoramos asimismo en la explotación y comercialización de activos intangibles mediante la estructuración y negociación de acuerdos de licencia, franquicia, transferencia de tecnología, cesión de derechos y otras operaciones relacionadas con propiedad intelectual. Participamos también en la revisión y evaluación de portafolios de propiedad intelectual en el contexto de adquisiciones, inversiones, reorganizaciones y otras transacciones corporativas.",
      "En materia de falsificación y uso indebido de derechos, diseñamos estrategias integrales de protección y defensa que pueden comprender acciones preventivas y disuasivas, investigaciones, actuaciones ante autoridades administrativas y aduaneras, así como el ejercicio de acciones civiles o penales cuando las circunstancias del caso lo requieren.",
      "Nuestro enfoque busca integrar la protección jurídica de los activos intangibles con los objetivos comerciales del cliente, permitiendo no solo preservar sus derechos frente a terceros, sino también gestionar estratégicamente su propiedad intelectual como un componente relevante del valor y crecimiento de sus negocios.",
    ],
  },
  {
    slug: "resolucion-de-controversias",
    icon: Gavel,
    title: "Resolución de Controversias",
    desc: "Litigio civil, comercial y arbitral en asuntos de alto impacto.",
    image: imgControversias.url,
    imageAlt: "Sala de audiencias moderna",
    intro:
      "Representamos a empresas, grupos empresariales, accionistas e inversionistas en controversias complejas ante tribunales nacionales y en arbitrajes nacionales e internacionales.",
    paragraphs: [
      "Representamos a empresas, grupos empresariales, accionistas e inversionistas en controversias complejas y asuntos de alto impacto, ante tribunales nacionales y en arbitrajes nacionales e internacionales. Nuestra práctica comprende litigios civiles y mercantiles, conflictos societarios y entre accionistas, disputas contractuales, reclamaciones patrimoniales y controversias derivadas de operaciones y relaciones empresariales.",
      "Nuestra práctica abarca todas las etapas de una controversia, desde su prevención y gestión temprana hasta su resolución definitiva. Asesoramos a nuestros clientes en la identificación de riesgos y potenciales áreas de conflicto, el análisis de relaciones contractuales y comerciales sensibles y el diseño de estrategias dirigidas a prevenir litigios, preservar derechos y fortalecer su posición ante una eventual disputa.",
      "Cuando surge una controversia, desarrollamos estrategias jurídicas y procesales a la medida de cada asunto, considerando no solo sus implicaciones legales, sino también sus efectos comerciales, económicos y reputacionales. Nuestra intervención comprende la definición de la estrategia del caso, la adopción de medidas cautelares para la protección de derechos y activos, la conducción del proceso en sus distintas instancias y la ejecución de sentencias y laudos.",
      "Contamos con experiencia en arbitrajes institucionales y ad hoc, participando en todas las etapas del procedimiento, desde el análisis y estructuración de convenios arbitrales hasta la constitución del tribunal, la presentación y defensa del caso, la estrategia probatoria y el reconocimiento y ejecución de laudos.",
      "Asimismo, asesoramos y representamos a nuestros clientes en negociaciones, mediaciones y otros mecanismos alternativos de resolución de controversias. Nuestro enfoque busca identificar, en cada etapa, la vía que mejor responda a los objetivos del cliente, incluyendo soluciones negociadas cuando estas permitan preservar valor, reducir exposición y alcanzar resultados más eficientes que un procedimiento contencioso.",
      "Combinamos rigor jurídico, estrategia procesal y comprensión del negocio para anticipar escenarios, gestionar riesgos y conducir controversias con una visión integral. Nuestro objetivo es proteger la posición del cliente y alcanzar soluciones que respondan tanto a sus intereses jurídicos como a sus objetivos empresariales.",
    ],
  },
  {
    slug: "fiscal",
    icon: Receipt,
    title: "Derecho Tributario",
    desc: "Estrategia fiscal integral para operaciones nacionales e internacionales.",
    image: imgFiscal.url,
    imageAlt: "Análisis de documentos financieros y tributarios",
    intro:
      "Asesoramos a empresas, grupos empresariales e inversionistas en la planificación y gestión estratégica de sus asuntos fiscales.",
    paragraphs: [
      "Asesoramos a empresas, grupos empresariales e inversionistas en la planificación y gestión estratégica de sus asuntos fiscales, combinando conocimiento técnico de la normativa tributaria con una comprensión integral de sus operaciones y objetivos de negocio.",
      "Nuestra práctica comprende la estructuración fiscal de operaciones y transacciones corporativas, fusiones, adquisiciones, reorganizaciones empresariales e inversiones, así como el análisis de sus implicaciones tributarias y el diseño de alternativas eficientes dentro de un marco de estricto cumplimiento legal. Asimismo, asesoramos en materia de precios de transferencia, tributación internacional y aplicación de convenios para evitar la doble tributación.",
      "Acompañamos a nuestros clientes en la identificación y gestión preventiva de riesgos fiscales, mediante la revisión de estructuras, operaciones y prácticas internas que puedan generar contingencias tributarias. Este enfoque nos permite anticipar potenciales áreas de exposición y diseñar estrategias orientadas a fortalecer la posición del cliente frente a procesos de fiscalización y requerimientos de la autoridad tributaria.",
      "Representamos a nuestros clientes durante auditorías y procedimientos de fiscalización ante la Superintendencia de Administración Tributaria (SAT), incluyendo la atención de requerimientos, discusión de ajustes y determinaciones tributarias y la recuperación de créditos fiscales.",
      "Cuando una controversia requiere ser impugnada, asumimos la defensa del cliente tanto en sede administrativa como judicial, diseñando estrategias que integran los aspectos sustantivos, probatorios y procesales de cada caso.",
      "Nuestro enfoque busca integrar planificación, cumplimiento y defensa tributaria dentro de una misma estrategia, permitiendo a nuestros clientes gestionar sus obligaciones fiscales con certeza, anticipar riesgos y tomar decisiones empresariales con una adecuada comprensión de sus implicaciones tributarias.",
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
      "Asesoramos a empresas, directivos y particulares tanto en la defensa como en el impulso de acciones penales.",
    paragraphs: [
      "Asesoramos a empresas, directivos y particulares tanto en la defensa como en el impulso de acciones penales, con un enfoque estratégico orientado a proteger el patrimonio, la operación y la reputación de nuestros clientes ante situaciones de riesgo penal.",
      "Representamos a nuestros clientes en investigaciones y procesos vinculados a delitos económicos, financieros, patrimoniales y corporativos, ya sea asumiendo su defensa técnica o promoviendo las acciones penales correspondientes cuando identificamos la comisión de hechos delictivos que afectan sus intereses.",
      "Nuestra práctica integra análisis preventivo, gestión de crisis reputacional y coordinación con otras áreas del derecho, lo que nos permite ofrecer una respuesta ágil e integral en cada etapa del proceso.",
      "Acompañamos a nuestros clientes en investigaciones internas corporativas, incluyendo entrevistas, revisión documental y análisis forense, para identificar riesgos y actuar oportunamente. Contamos además con amplia experiencia en la atención de casos de alta complejidad, que requieren un manejo técnico riguroso y una estrategia procesal especializada.",
      "Asimismo, diseñamos protocolos de respuesta ante contingencias penales que permiten a las organizaciones actuar con rapidez y coordinación frente a allanamientos, requerimientos de información y notificaciones de investigación, combinando defensa técnica con estrategias de comunicación que preservan la reputación institucional de nuestros clientes.",
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
      "Representamos a empresas, grupos empresariales e inversionistas en controversias constitucionales de alta relevancia.",
    paragraphs: [
      "Representamos a empresas, grupos empresariales e inversionistas en controversias constitucionales de alta relevancia, particularmente aquellas vinculadas con actuaciones de autoridades públicas, decisiones administrativas y regulatorias, y controversias que puedan afectar sus derechos, operaciones o intereses empresariales.",
      "Nuestra práctica comprende la promoción y defensa de acciones de amparo, inconstitucionalidad y otros mecanismos de control constitucional, tanto para la protección de derechos fundamentales y garantías procesales como para cuestionar actos, resoluciones y disposiciones normativas contrarias al orden constitucional.",
      "Intervenimos en asuntos constitucionales que surgen de litigios judiciales, procedimientos administrativos y controversias tributarias y regulatorias, desarrollando estrategias que consideran tanto la dimensión constitucional del conflicto como sus implicaciones dentro del procedimiento o controversia de origen.",
      "Nuestra experiencia comprende la conducción de procesos constitucionales ante las distintas instancias jurisdiccionales del país, incluyendo asuntos sometidos al conocimiento de la Corte de Constitucionalidad.",
      "Abordamos cada caso mediante un análisis riguroso de la normativa aplicable, la jurisprudencia constitucional y los antecedentes relevantes, integrándolos dentro de una estrategia procesal diseñada en función de las particularidades y objetivos de cada controversia.",
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
      "Asesoramos a entidades bancarias y financieras, aseguradoras, fondos de inversión, inversionistas y empresas en operaciones de financiamiento, crédito e inversión.",
    paragraphs: [
      "Asesoramos a entidades bancarias y financieras, aseguradoras, fondos de inversión, inversionistas y empresas en la estructuración, negociación y ejecución de operaciones de financiamiento, crédito e inversión, tanto locales como transfronterizas.",
      "Nuestra práctica comprende financiamientos corporativos, bilaterales y sindicados, financiamiento de proyectos, líneas y facilidades de crédito, refinanciamientos, reestructuraciones de deuda y otras operaciones destinadas a atender las necesidades de capital, inversión y crecimiento de nuestros clientes.",
      "Representamos tanto a entidades financieras y otros proveedores de capital como a prestatarios, participando en la estructuración y negociación de los términos de cada operación y en la preparación de la documentación necesaria para su implementación y cierre.",
      "Asesoramos en el diseño, constitución y ejecución de estructuras de garantía, incluyendo garantías reales y personales, fideicomisos de administración y garantía y otros mecanismos destinados a respaldar obligaciones financieras y facilitar estructuras de financiamiento eficientes.",
      "Nuestra práctica comprende asimismo la asesoría regulatoria a bancos, entidades financieras, aseguradoras y otros participantes del sector financiero en asuntos relacionados con su establecimiento, autorización, operación y cumplimiento normativo. Acompañamos a bancos extranjeros en el establecimiento y operación de oficinas de representación y asesoramos a entidades financieras internacionales en el desarrollo de actividades de cross-border marketing y en la oferta transfronteriza de productos y servicios financieros, considerando las restricciones y requerimientos regulatorios aplicables en cada caso.",
      "Asesoramos también en materia de prevención de lavado de dinero, así como en la interacción con autoridades y organismos supervisores en procedimientos, requerimientos y otros asuntos relacionados con el desarrollo de las actividades de nuestros clientes.",
      "Participamos en operaciones que requieren la coordinación de distintos participantes, jurisdicciones y áreas de especialidad, trabajando conjuntamente con entidades financieras, asesores internacionales, fiduciarios y demás partes involucradas para facilitar su adecuada ejecución.",
      "Nuestro enfoque combina conocimiento del sector financiero, visión de negocio y capacidad de ejecución, permitiéndonos comprender las necesidades de las distintas partes de una operación, anticipar sus principales riesgos y acompañar a nuestros clientes desde la estructuración inicial hasta su cierre.",
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
      "Asesoramos a empresas, grupos empresariales, juntas directivas y alta dirección en el diseño y fortalecimiento de estructuras de cumplimiento.",
    paragraphs: [
      "Asesoramos a empresas, grupos empresariales, juntas directivas y alta dirección en el diseño y fortalecimiento de estructuras de cumplimiento orientadas a identificar, prevenir y gestionar riesgos legales, regulatorios y reputacionales.",
      "Nuestra práctica comprende el diseño, implementación y revisión de programas de cumplimiento adaptados a la estructura, industria y perfil de riesgo de cada organización, incluyendo políticas de integridad y anticorrupción, prevención de lavado de dinero y financiamiento del terrorismo, códigos de conducta, procedimientos de debida diligencia de terceros y proveedores, canales internos de denuncia y protocolos para la identificación y gestión de potenciales incumplimientos.",
      "Acompañamos a juntas directivas, comités y equipos ejecutivos en la evaluación de riesgos y en la adopción de estructuras de gobierno y control que permitan fortalecer los procesos internos de toma de decisiones y responder adecuadamente ante cambios regulatorios, operaciones sensibles o situaciones que puedan generar exposición para la organización y sus administradores.",
      "Asimismo, conducimos investigaciones internas relacionadas con denuncias, indicios de irregularidades, potenciales incumplimientos y otras situaciones que requieren una evaluación independiente y confidencial. Nuestro trabajo comprende la definición de la estrategia de investigación, revisión y preservación de información, entrevistas, análisis jurídico de los hallazgos y asesoramiento sobre las medidas de respuesta y remediación que correspondan.",
      "Nuestro enfoque combina prevención, gobierno corporativo y capacidad de respuesta ante situaciones críticas, permitiendo a nuestros clientes desarrollar estructuras de cumplimiento proporcionales a sus riesgos y consistentes con las exigencias de organizaciones que operan bajo estándares nacionales e internacionales.",
    ],
  },
  {
    slug: "migratorio-y-laboral",
    icon: Plane,
    title: "Migratorio y Laboral",
    desc: "Gestión integral del talento humano.",
    image: imgMigratorio.url,
    imageAlt: "Ejecutivos en tránsito en una terminal aérea",
    intro:
      "Asesoría del más alto nivel en gestión del talento humano, contratación nacional y extranjera y relaciones laborales.",
    paragraphs: [
      "El crecimiento y expansión de los mercados ha impulsado a las empresas a iniciar nuevas operaciones, generando la necesidad de contar con trabajadores calificados en los procesos de instalación, manejo y expansión de sus operaciones.",
      "Nuestra práctica laboral brinda asesoría del más alto nivel, bajo una metodología innovadora que combina el rigor legal con una visión práctica y moderna de la gestión del talento humano.",
      "Orientamos a nuestros clientes en el proceso de contratación, elaboración de contratos laborales, políticas internas, esquemas de compensación variable y planes de beneficios alineados con las mejores prácticas corporativas de gestión del talento, tanto para contratación de personal nacional como extranjero.",
      "Acompañamos a nuestros clientes en procesos de reestructuración de personal, negociaciones colectivas, auditorías laborales preventivas y en la resolución de conflictos individuales y colectivos de trabajo, procurando soluciones que equilibren el cumplimiento normativo con los objetivos de negocio y la continuidad operativa de la organización.",
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
      "Asesoramos a personas, familias y grupos con patrimonios relevantes en la planificación, organización y protección de sus activos.",
    paragraphs: [
      "Asesoramos a personas, familias y grupos con patrimonios relevantes en la planificación, organización y protección de sus activos, así como en el diseño de estructuras que permitan una transición patrimonial ordenada entre generaciones y la continuidad de sus intereses empresariales.",
      "Nuestra práctica parte de comprender la composición del patrimonio, las relaciones entre sus distintos componentes y los objetivos de largo plazo de cada cliente. A partir de ello, diseñamos estructuras patrimoniales y sucesorias a la medida, orientadas a ordenar la transmisión de activos, establecer mecanismos adecuados para su administración y gobierno y prevenir potenciales conflictos derivados de los procesos sucesorios.",
      "Asesoramos en la estructuración de fideicomisos de administración y testamentarios, planificación sucesoria, protocolos familiares, capitulaciones matrimoniales y otras estructuras destinadas a organizar la titularidad, administración y transmisión del patrimonio. Cuando el patrimonio comprende participaciones en empresas o negocios familiares, integramos la planificación sucesoria con mecanismos de gobierno corporativo que permitan preservar la continuidad de las operaciones y establecer reglas claras para la incorporación y participación de las siguientes generaciones.",
      "Acompañamos asimismo procesos de reorganización patrimonial y transición generacional, coordinando, cuando resulta necesario, con asesores fiscales, financieros y otros especialistas para abordar de manera integral las distintas dimensiones jurídicas y económicas del patrimonio.",
      "Nuestro enfoque se basa en una relación cercana y de largo plazo con cada cliente, caracterizada por la discreción, confidencialidad y comprensión de sus objetivos. Buscamos establecer estructuras que permitan proteger, administrar y transmitir el patrimonio de manera ordenada, preservando su valor y continuidad a través de las generaciones.",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
