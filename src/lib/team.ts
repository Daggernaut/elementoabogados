import photoCM from "@/assets/Carlos-Moscoso.webp.asset.json";
import photoJL from "@/assets/JorgeLuis-Molina.webp.asset.json";
import photoLP from "@/assets/LuisPedro-Guerra1.webp.asset.json";
import photoMB from "@/assets/MariaElena-Barrientos.jpg.asset.json";
import photoClaudia from "@/assets/abo-claudia-fixed.jpg";
import photoRodrigo from "@/assets/Rodrigo-Anleu1.webp.asset.json";

export type Partner = {
  slug: string;
  name: string;
  role: string;
  headline: string;
  photo: string;
  email: string;
  phone: string;
  bio: string[];
  education: string[];
  memberships?: string[];
  practice?: string[];
};

export const partners: Partner[] = [
  {
    slug: "carlos-moscoso",
    name: "Carlos Moscoso",
    role: "Socio & Fundador",
    headline:
      "Maestría en Asesoría Jurídica de Empresas (LLM) — IE Business School, Madrid, España",
    photo: photoCM.url,
    email: "cmoscoso@elementoabogados.com",
    phone: "+(502) 2339 - 1922",
    bio: [
      "Carlos es un abogado con más de 10 años de experiencia en el ámbito del litigio, especializado en Derecho Penal, Compliance, Derecho Constitucional y Resolución de Conflictos. A lo largo de su carrera ha intervenido como abogado en casos de alto impacto, donde ha demostrado una notable capacidad para manejar situaciones legales complejas y de gran trascendencia.",
      "Su enfoque profesional comprende, además del litigio, el área de Compliance, donde ha adquirido una amplia experiencia asesorando a empresas en la implementación de estrategias preventivas para mitigar riesgos legales. Especialmente en el desarrollo de programas de cumplimiento normativo, ha trabajado en la creación de políticas y procedimientos orientados a evitar delitos como el lavado de dinero, asegurando no solo el cumplimiento de la legislación vigente, sino también protegiendo a sus clientes de posibles sanciones y daños reputacionales.",
      "Además de su exitosa práctica profesional, Carlos es catedrático titular en la Universidad Rafael Landívar, donde desde hace más de 5 años imparte cursos relacionados con el litigio penal. Su vocación docente refleja su compromiso con la formación de nuevas generaciones de abogados.",
      "Carlos, con su trayectoria y compromiso, se ha consolidado como un referente en su campo, brindando soluciones estratégicas y eficaces tanto a clientes particulares como a empresas, siempre con un enfoque ético y profesional.",
    ],
    education: [
      "Exchange Program – Universiteit van Tilburg, Países Bajos",
      "Máster en Asesoría Jurídica de Empresas (LLM) – IE Business School, Madrid, España",
      "Licenciatura en Ciencias Jurídicas y Sociales – Universidad Rafael Landívar, Guatemala | Menciones Honoríficas: Magna cum laude",
    ],
    practice: ["Penal", "Compliance", "Constitucional", "Resolución de conflictos"],
  },
  {
    slug: "jorge-luis-molina",
    name: "Jorge Luis Molina",
    role: "Socio & Fundador",
    headline:
      "Maestría en Derecho Bancario, Seguros y Mercados Financieros — Universidad de San Carlos de Guatemala y Universidad de Valencia",
    photo: photoJL.url,
    email: "jmolina@elementoabogados.com",
    phone: "+(502) 2339 - 1922",
    bio: [
      "Jorge Luis cuenta con amplia experiencia en asesoría a compañías nacionales e internacionales, principalmente en las áreas de derecho inmobiliario, derecho corporativo, fusiones y adquisiciones, comercio internacional, derecho bancario y financiero, financiamiento de proyectos y mercado de capitales, derecho mercantil y derecho civil.",
      "En cuanto a Derecho Corporativo ha asesorado a compañías nacionales y transnacionales en diferentes aspectos del día a día y se mantiene activo en las nuevas tendencias de desarrollo de proyectos inmobiliarios en Guatemala, además de las estructuras de financiamiento que ofrece el sistema bancario para los mismos.",
      "En Derecho Bancario y Financiero tiene extenso conocimiento en asesoría relacionada con créditos y financiamiento para bancos e instituciones financieras de renombre, de las cuales fue asesor legal in house de dos grupos financieros del país. Asimismo, tiene experiencia en contratos y estructuras de préstamos complejos y fideicomisos.",
      "Es catedrático suplente, impartiendo cursos relacionados a temas corporativos en la Universidad Rafael Landívar.",
    ],
    education: [
      "Maestría en Derecho Bancario, Seguros y Mercados Financieros – Universidad de San Carlos de Guatemala y Universidad de Valencia, 2018",
      "Posgrado en Comercio Internacional – Universidad de San Carlos de Guatemala, 2016",
      "Licenciatura en Ciencias Jurídicas y Sociales – Universidad Mariano Gálvez, Guatemala, 2015",
    ],
    memberships: [
      "Instituto Guatemalteco de Derecho Notarial y Registral (IGNR)",
      "Colegio de Abogados y Notarios de Guatemala (CANG)",
    ],
    practice: ["Corporativo", "Inmobiliario", "Banca y Finanzas", "Fusiones y adquisiciones"],
  },
  {
    slug: "luis-pedro-guerra",
    name: "Luis Pedro Guerra",
    role: "Socio & Fundador",
    headline: "Maestría en Asesoría en Tributación — Universidad Rafael Landívar, Guatemala",
    photo: photoLP.url,
    email: "lguerra@elementoabogados.com",
    phone: "+(502) 2339 - 1922",
    bio: [
      "Luis Pedro cuenta con más de 10 años de experiencia en el área de litigio, enfocado en conflictos de carácter arbitral, mercantil, civil, constitucional, administrativo y tributario.",
      "Tiene amplia experiencia en la defensa de los intereses de nuestros clientes en los diferentes tipos de litigio, así como en la elaboración de estrategias para solventarlos, no solamente a través de procesos judiciales, sino además a través de negociaciones extrajudiciales y otros métodos alternativos.",
      "Tiene experiencia en el planteamiento de recursos ordinarios, extraordinarios y constitucionales, tales como amparo, inconstitucionalidades generales y en caso concreto, y recursos de casación.",
      "Su práctica profesional lo ha especializado en la asesoría en temas de litigio comercial, constitucional y administrativo, abarcando empresas de diferentes industrias reguladas tales como el sector minero, agrícola, inmobiliario, supermercados y distribuidoras de bebidas, entre otros.",
    ],
    education: [
      "Maestría en Asesoría en Tributación – Universidad Rafael Landívar",
      "Posgrado en Derecho Corporativo y Tributario – Universidad del Istmo",
      "Licenciatura en Ciencias Jurídicas y Sociales – Universidad Rafael Landívar | Menciones Honoríficas: Cum laude",
    ],
    memberships: [
      "Instituto Guatemalteco de Derecho Procesal (IGDP)",
      "Colegio de Abogados y Notarios de Guatemala (CANG)",
    ],
    practice: ["Litigio", "Arbitraje", "Tributario", "Administrativo"],
  },
  {
    slug: "maria-elena-barrientos",
    name: "María Elena Barrientos",
    role: "Socia",
    headline: "Socia especializada en Derecho Corporativo, Laboral y Cumplimiento",
    photo: photoMB.url,
    email: "mbarrientos@elementoabogados.com",
    phone: "+(502) 2339 - 1922",
    bio: [
      "María Elena acompaña a empresas y personas en asuntos corporativos, laborales y de cumplimiento, con un enfoque práctico orientado a decisiones claras y oportunas.",
      "Su trabajo combina la asesoría preventiva con el acompañamiento en negociaciones y procesos, cuidando siempre la relación cercana con cada cliente y construyendo soluciones que se ajustan a sus necesidades.",
    ],
    education: ["Licenciatura en Ciencias Jurídicas y Sociales"],
    practice: ["Corporativo", "Laboral", "Cumplimiento"],
  },
];

export type Associate = { name: string; role: string; photo: string };

export const associates: Associate[] = [
  { name: "Claudia Molina", role: "Abogada Asociada", photo: photoClaudia },
  { name: "Rodrigo Anleu", role: "Abogado Asociado", photo: photoRodrigo.url },
];
