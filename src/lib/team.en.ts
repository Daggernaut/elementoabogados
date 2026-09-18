export type PartnerEn = {
  role: string;
  headline: string;
  bio: string[];
  education: string[];
  memberships?: string[];
  practice?: string[];
  languages?: string[];
};

export const partnersEn: Record<string, PartnerEn> = {
  "carlos-moscoso": {
    role: "Partner",
    headline: "Criminal Law, Compliance, Arbitration and Dispute Resolution",
    bio: [
      "He has more than ten years of experience advising and representing individuals and national and international companies on matters relating to Criminal Law, Compliance, Arbitration, Constitutional Law and dispute resolution.",
      "His practice focuses on the design and implementation of legal strategies for the prevention, management and resolution of complex conflicts, including criminal litigation, arbitrations, internal investigations and disputes with financial, corporate and reputational impact.",
      "He also advises organizations across various economic sectors in identifying and mitigating legal risks, as well as in developing and implementing Compliance programs aimed at strengthening internal controls and ensuring regulatory compliance.",
      "Throughout his career he has been involved in matters of significant legal and strategic complexity, representing his clients both in bringing legal actions and in defending their rights and interests. His approach combines solid experience in litigation and dispute resolution with a preventive vision focused on the efficient management of risk and the protection of the financial, commercial and reputational interests of those he advises.",
      "Alongside his professional practice, he is engaged in academic activities as a university professor at Universidad Rafael Landívar, where he teaches courses related to criminal litigation and criminal procedural law, contributing to the training of new generations of lawyers and to the strengthening of legal practice in Guatemala.",
    ],
    education: [
      "Exchange Program - Universiteit van Tilburg, Netherlands",
      "Master's Degree in Corporate Legal Advisory (LLM) - IE Business School, Madrid, Spain",
      "Law Degree (Licenciatura en Ciencias Jurídicas y Sociales) - Universidad Rafael Landívar, Guatemala | Honors: Magna Cum Laude",
    ],
    practice: ["Criminal Litigation", "Compliance", "Arbitration and Dispute Resolution"],
  },
  "jorge-luis-molina": {
    role: "Partner",
    headline: "Master's Degree in Banking, Insurance and Financial Markets Law",
    bio: [
      "Jorge Luis has extensive experience advising national and international companies, primarily in the areas of real estate law, corporate law, mergers and acquisitions, international trade, banking and finance law, project financing and capital markets, commercial law and civil law.",
      "In the area of Corporate Law, he has advised national and multinational companies on various day to day matters and remains active in new trends in the development of real estate projects in Guatemala, as well as in the financing structures offered by the banking system for such projects.",
      "In Banking and Finance Law, he has extensive knowledge advising on credit and financing for well known banks and financial institutions, having served as in house legal counsel for two of the country's financial groups. He also has experience with complex loan contracts and structures and trusts.",
      "He is an adjunct professor, teaching courses on corporate matters at Universidad Rafael Landívar.",
    ],
    education: [
      "Master's Degree in Banking, Insurance and Financial Markets Law - Universidad de San Carlos de Guatemala and Universidad de Valencia, 2018",
      "Postgraduate Degree in International Trade - Universidad de San Carlos de Guatemala, 2016",
      "Law Degree (Licenciatura en Ciencias Jurídicas y Sociales) - Universidad Mariano Gálvez, Guatemala, 2015",
    ],
    memberships: [
      "Guatemalan Institute of Notarial and Registry Law (IGNR)",
      "Bar Association of Guatemala (CANG)",
    ],
    practice: ["Corporate", "Real Estate", "Banking and Finance", "Mergers and Acquisitions"],
  },
  "luis-pedro-guerra": {
    role: "Partner",
    headline: "Litigation, Arbitration and Dispute Resolution",
    bio: [
      "Luis Pedro Guerra has more than ten years of experience advising and representing national and international companies in judicial litigation, arbitrations and highly complex disputes. His practice focuses on the strategic resolution of conflicts in civil, commercial, corporate, banking, administrative and constitutional matters.",
      "Throughout his career he has led proceedings relating to breach of contract, corporate disputes, asset recovery, director liability, real estate disputes, damages claims and disputes arising in regulated sectors. He also has extensive experience designing and implementing procedural strategies aimed at protecting his clients' interests, both in judicial and arbitral proceedings.",
      "His experience includes filing and defending ordinary, extraordinary and constitutional remedies, as well as conducting complex negotiations and alternative dispute resolution mechanisms, always seeking efficient solutions aligned with his clients' business objectives.",
      "He has advised companies in various economic sectors, including banking, real estate development, construction, energy, mining, agribusiness, transportation, trade and distribution, regularly participating in matters that require a combination of legal analysis, strategic vision and risk management.",
      "Alongside his professional practice, he is engaged in academic activities as a university professor in undergraduate and graduate programs, teaching courses related to litigation, legal argumentation and tax law.",
    ],
    education: [
      "Master's Degree in Tax Advisory - Universidad Rafael Landívar, Guatemala, 2023",
      "Postgraduate Degree in Corporate and Tax Law - Universidad del Istmo, Guatemala, 2016",
      "Law Degree (Licenciatura en Ciencias Jurídicas y Sociales) - Universidad Rafael Landívar, Guatemala. Honors: Cum Laude, 2014",
    ],
    memberships: [
      "Guatemalan Institute of Procedural Law (IGDP)",
      "Bar Association of Guatemala (CANG)",
    ],
    languages: ["Spanish", "English"],
    practice: [
      "Civil and Commercial Dispute Resolution",
      "Tax",
      "Administrative and Constitutional Law",
      "Mining and Real Estate",
    ],
  },
  "maria-elena-barrientos": {
    role: "Partner",
    headline: "Labor and Employment lawyer with more than 20 years of experience",
    bio: [
      "Labor and employment lawyer with more than 20 years of experience advising national and international companies on labor law, labor relations, occupational health and safety compliance, immigration law and corporate matters relating to human capital management. Throughout her career, she has advised countless companies in sectors such as retail, food, technology and financial services.",
      "She has extensive experience in labor audits, workforce restructurings, strategies for the prevention and management of labor risks, and employment litigation focused on employer defense. She has led termination and reorganization processes involving more than 1,500 workers, with minimal judicialization. She has also participated in M&A transactions, identifying critical labor contingencies and designing mitigation plans to prevent significant costs and risks.",
      "Her practice is characterized by a preventive, strategic and results oriented approach. She has implemented compliance programs that have reduced risks associated with labor sanctions and claims by more than 65%, as well as early dispute resolution mechanisms that have avoided judicialization in more than 70% of the matters handled. In immigration matters, she has standardized processes for multinational corporations, reducing processing times by up to 35%.",
      "She has been recognized by The Legal 500, Chambers and Partners and Business Today as one of the most influential labor lawyers in Guatemala.",
      "In the academic sphere, she serves as an examiner for the professional technical examination in Labor and Labor Procedural Law at Universidad del Istmo and has served as a thesis advisor in Labor Law at Universidad Rafael Landívar. She has participated as a speaker at national and international legal seminars and conferences, and is the author of specialized articles published in magazines such as WorkPlace and Business Magazine.",
    ],
    education: [
      "ISO 45001 Auditor - Occupational Health and Safety Management Systems, 2021",
      "PBP in Psychology and Human Resources - ESI School, 2015",
      "LLM in Business Law - Pontificia Universidad Católica de Chile, 2011",
      "Law Degree, Attorney and Notary (Licenciada en Ciencias Jurídicas y Sociales, Abogada y Notario) - Universidad Rafael Landívar de Guatemala, 2007",
    ],
    memberships: ["Bar Association of Guatemala (CANG)"],
    practice: ["Labor and Employment", "Corporate", "Immigration", "Compliance"],
  },
};

// keyed by the Spanish name exactly as it appears in team.ts
export const associatesEn: Record<string, { role: string }> = {
  "Claudia Molina": { role: "Associate" },
  "Rodrigo Anleu": { role: "Associate" },
};

// English localization for associates with full profiles, keyed by slug
export const associateProfilesEn: Record<string, PartnerEn> = {
  "rodrigo-anleu": {
    role: "Associate",
    headline: "Corporate",
    bio: [
      "Rodrigo Anleu is an associate at the firm and developed his career as a legal assistant, accumulating more than four years of experience handling corporate matters for local and foreign clients. His track record includes participating in complex real estate law processes and contract review.",
      "His practice focuses on planning and implementing legal strategies aimed at protecting his clients' interests and supporting their business objectives. He combines legal analysis with an understanding of each business's needs to provide practical advice on decision making, risk assessment, and the management of corporate and real estate matters.",
      "He also has experience in notarial practice and voluntary jurisdiction proceedings, which allows him to provide comprehensive advice on legal transactions and business structuring.",
    ],
    education: [
      "Law Degree (Licenciatura en Ciencias Jurídicas y Sociales) – Universidad Rafael Landívar, Guatemala, 2026",
    ],
    memberships: ["Bar Association of Guatemala (CANG)"],
    languages: ["Spanish", "English"],
    practice: ["Corporate", "Real Estate", "Notarial Practice"],
  },
};
