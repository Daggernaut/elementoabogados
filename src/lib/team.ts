import photoCM from "@/assets/Carlos-Moscoso-2.webp.asset.json";
import photoJL from "@/assets/JorgeLuis-Molina-2.webp.asset.json";
import photoLP from "@/assets/LuisPedro-Guerra1-3.webp.asset.json";
import photoLPCutout from "@/assets/LuisPedro-Trans.png.asset.json";
import photoMB from "@/assets/MariaElena-Barrientos-3.webp.asset.json";
import photoClaudia from "@/assets/Claudia-Molina1-2.webp.asset.json";
import photoRodrigo from "@/assets/Rodrigo-Anleu1-2.webp.asset.json";
import photoCMCutout from "@/assets/CaMoscoso-trans.png.asset.json";
import photoJLCutout from "@/assets/Jor-Molina.png.asset.json";
import photoMBCutout from "@/assets/MaElena-trans.png.asset.json";
import photoClaudiaCutout from "@/assets/Clau-Molin-trans.png.asset.json";
import photoRodrigoCutout from "@/assets/RodAnleu-T.webp.asset.json";

export type Partner = {
  slug: string;
  name: string;
  role: string;
  headline: string;
  photo: string;
  photoCutout?: string;
  email: string;
  phone: string;
  bio: string[];
  education: string[];
  memberships?: string[];
  practice?: string[];
  languages?: string[];
};


export const partners: Partner[] = [
  {
    slug: "carlos-moscoso",
    name: "Carlos Andrés Moscoso Díaz",
    role: "Socio & Fundador",
    headline: "Derecho Penal, Compliance, Arbitraje y Resolución de Controversias",
    photo: photoCM.url,
    photoCutout: photoCMCutout.url,
    email: "cmoscoso@elementoabogados.com",
    phone: "+(502) 2339 - 1922",
    bio: [
      "Carlos Andrés Moscoso Díaz cuenta con más de diez años de experiencia asesorando y representando a personas y empresas nacionales e internacionales en asuntos relacionados con Derecho Penal, Compliance, Arbitraje, Derecho Constitucional y resolución de controversias.",
      "Su práctica profesional se enfoca en el diseño e implementación de estrategias jurídicas para la prevención, gestión y resolución de conflictos complejos, incluyendo litigios penales, arbitrajes, investigaciones internas y controversias con impacto patrimonial, corporativo y reputacional.",
      "Asimismo, asesora a organizaciones de distintos sectores económicos en la identificación y mitigación de riesgos legales, así como en el desarrollo e implementación de programas de Compliance orientados al fortalecimiento de controles internos y al cumplimiento normativo.",
      "A lo largo de su trayectoria ha intervenido en asuntos de alta complejidad jurídica y estratégica, representando a sus clientes tanto en el ejercicio de acciones legales como en la defensa de sus derechos e intereses. Su enfoque combina una sólida experiencia en litigación y resolución de controversias con una visión preventiva orientada a la gestión eficiente de riesgos y la protección de los intereses patrimoniales, comerciales y reputacionales de quienes asesora.",
      "Paralelamente a su práctica profesional, desarrolla actividades académicas como catedrático universitario en la Universidad Rafael Landívar, donde imparte cursos relacionados con litigación penal y derecho procesal penal, contribuyendo a la formación de nuevas generaciones de abogados y al fortalecimiento de la práctica jurídica en Guatemala.",
    ],
    education: [
      "Exchange Program – Universiteit van Tilburg, Países Bajos",
      "Máster en Asesoría Jurídica de Empresas (LLM) – IE Business School, Madrid, España",
      "Licenciatura en Ciencias Jurídicas y Sociales – Universidad Rafael Landívar, Guatemala | Menciones Honoríficas: Magna cum laude",
    ],
    practice: ["Litigios Penales", "Compliance", "Arbitraje y Resolución de Controversias"],
  },
  {
    slug: "jorge-luis-molina",
    name: "Jorge Luis Molina",
    role: "Socio & Fundador",
    headline:
      "Maestría en Derecho Bancario, Seguros y Mercados Financieros — Universidad de San Carlos de Guatemala y Universidad de Valencia",
    photo: photoJL.url,
    photoCutout: photoJLCutout.url,
    email: "jmolina@elementoabogados.com",
    phone: "+(502) 2339 - 1922",
    bio: [
      "Jorge Luis, cuenta con amplia experiencia en asesoría a compañías nacionales e internacionales, principalmente en las áreas de derecho inmobiliario, derecho corporativo, fusiones y adquisiciones, comercio internacional, derecho bancario y financiero, financiamiento de proyectos y mercado de capitales, derecho mercantil y derecho civil.",
      "En cuanto a Derecho Corporativo ha asesorado a compañías nacionales y transnacionales en diferentes aspectos del día a día y se mantiene activo en las nuevas tendencias de desarrollo de proyectos inmobiliarios en Guatemala, además de las estructuras de financiamiento que ofrece el sistema bancario para los mismos.",
      "En Derecho Bancario y Financiero tiene extenso conocimiento en asesoría relacionada con créditos y financiamiento para bancos e instituciones financieras de renombre, de las cuales fue asesor legal In House de dos grupos financieros del país, asimismo, tiene experiencia en contratos y estructuras de préstamos complejos y fideicomisos.",
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
    name: "Luis Pedro Guerra Gómez",
    role: "Socio & Fundador",
    headline: "Litigio, Arbitraje y Resolución de Controversias",
    photo: photoLP.url,
    photoCutout: photoLPCutout.url,
    email: "lguerra@elementoabogados.com",
    phone: "+(502) 2339 - 1922",
    bio: [
      "Luis Pedro Guerra Gómez cuenta con más de diez años de experiencia asesorando y representando a empresas nacionales e internacionales en litigios judiciales, arbitrajes y controversias de alta complejidad. Su práctica se concentra en la resolución estratégica de conflictos en materia civil, mercantil, societaria, bancaria, administrativa y constitucional.",
      "A lo largo de su trayectoria ha dirigido procesos relacionados con incumplimientos contractuales, conflictos societarios, recuperación de activos, responsabilidad de administradores, disputas inmobiliarias, reclamaciones por daños y controversias derivadas de sectores regulados. Asimismo, posee amplia experiencia en el diseño e implementación de estrategias procesales orientadas a la protección de los intereses de sus clientes, tanto en sede judicial como arbitral.",
      "Su experiencia incluye la interposición y defensa de recursos ordinarios, extraordinarios y constitucionales, así como la conducción de negociaciones complejas y mecanismos alternativos de resolución de conflictos, buscando siempre soluciones eficientes alineadas con los objetivos comerciales de sus clientes.",
      "Ha asesorado a empresas de diversos sectores económicos, incluyendo banca, desarrollo inmobiliario, construcción, energía, minería, agroindustria, transporte, comercio y distribución, participando regularmente en asuntos que requieren una combinación de análisis jurídico, visión estratégica y manejo de riesgos.",
      "Paralelamente a su práctica profesional, desarrolla actividades académicas como catedrático universitario en programas de grado y posgrado, impartiendo cursos relacionados con litigación, argumentación jurídica y derecho tributario.",
    ],
    education: [
      "Maestría en Asesoría en Tributación – Universidad Rafael Landívar, Guatemala. 2023",
      "Posgrado en Derecho Corporativo y Tributario – Universidad del Istmo, Guatemala. 2016",
      "Licenciatura en Ciencias Jurídicas y Sociales – Universidad Rafael Landívar, Guatemala. Menciones Honoríficas: Cum Laude. 2014",
    ],
    memberships: [
      "Instituto Guatemalteco de Derecho Procesal (IGDP)",
      "Colegio de Abogados y Notarios de Guatemala (CANG)",
    ],
    languages: ["Español", "Inglés"],
    practice: [
      "Resolución de Controversias en Materia Civil y Comercial",
      "Tributario",
      "Derecho Administrativo y Constitucional",
      "Minería e Inmobiliario",
    ],
  },
  {
    slug: "maria-elena-barrientos",
    name: "María Elena Barrientos",
    role: "Socia",
    headline: "Abogada laboralista con más de 20 años de experiencia",
    photo: photoMB.url,
    photoCutout: photoMBCutout.url,
    email: "mbarrientos@elementoabogados.com",
    phone: "+(502) 2339 - 1922",
    bio: [
      "Abogada laboralista con más de 20 años de experiencia asesorando a empresas nacionales e internacionales en derecho laboral, relaciones laborales, cumplimiento en materia de salud y seguridad ocupacional, derecho migratorio y asuntos corporativos relacionados con la gestióndel talento humano. A lo largo de su trayectoria, ha asesorado a innumerables empresas de sectores como retail, alimentos, tecnología y servicios financieros.",
      "Cuenta con amplia experiencia en auditorías laborales, reestructuraciones de personal, estrategias para la prevención y gestión de riesgos laborales y litigio laboral enfocado en la defensa del empleador. Ha dirigido procesos de terminación y reorganización que han involucrado a más de 1,500 trabajadores, con un nivel mínimo de judicialización. Asimismo, ha participado en operaciones de M&A, identificando contingencias laborales críticas y diseñando planes de mitigación para prevenir costos y riesgos relevantes.",
      "Su práctica se caracteriza por un enfoque preventivo, estratégico y orientado a resultados. Ha implementado programas de cumplimiento que han permitido reducir en más de un 65 % los riesgos asociados con sanciones y reclamaciones laborales, así como mecanismos de solución temprana de conflictos que han evitado la judicialización en más del 70 % de los asuntos atendidos. En materia migratoria, ha estandarizado procesos para corporaciones multinacionales, logrando reducir hasta en un 35 % los tiempos de tramitación.",
      "Ha sido reconocida por The Legal 500, Chambers and Partners y Business Today como una de las abogadas más influyentes de Guatemala en materia laboral.",
      "En el ámbito académico, es evaluadora del examen técnico profesional en Derecho Laboral y Procesal Laboral de la Universidad del Istmo y ha ejercido como asesora de tesis de grado en Derecho Laboral en la Universidad Rafael Landívar; ha participado como expositora en seminarios y congresos jurídicos nacionales e internacionales, y es autora de artículos especializados publicados en revistas como WorkPlace y Business Magazine.",
    ],
    education: [],
    practice: ["Laboral", "Corporativo", "Migratorio", "Cumplimiento"],
  },
];

export type Associate = { name: string; role: string; photo: string; photoCutout?: string };

export const associates: Associate[] = [
  { name: "Claudia Molina", role: "Abogada Asociada", photo: photoClaudia.url, photoCutout: photoClaudiaCutout.url },
  { name: "Rodrigo Anleu", role: "Abogado Asociado", photo: photoRodrigo.url, photoCutout: photoRodrigoCutout.url },
];
