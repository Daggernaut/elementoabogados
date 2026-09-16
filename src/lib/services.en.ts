export type ServiceEn = {
  title: string;
  desc: string;
  intro: string;
  imageAlt: string;
  paragraphs: string[];
};

export const servicesEn: Record<string, ServiceEn> = {
  "derecho-corporativo": {
    title: "Corporate Law",
    desc: "Solid corporate structuring for complex operations.",
    imageAlt: "Modern corporate lobby with executives",
    intro:
      "We advise companies, corporate groups, shareholders and investors in the structuring, organization and development of their corporate operations.",
    paragraphs: [
      "We advise companies, corporate groups, shareholders and investors in the structuring, organization and development of their corporate operations, supporting them throughout the various stages of their business evolution.",
      "Our practice covers the incorporation, reorganization, administration and dissolution of companies, as well as the design of corporate structures for both domestic and cross-border operations. We also advise on the negotiation and drafting of shareholders' agreements and other mechanisms intended to govern relationships among partners, company administration and strategic decision-making.",
      "We support boards of directors, shareholders and executive teams on corporate governance matters, including the definition of management structures, delegation-of-authority schemes, the formation and functioning of governing bodies, and the adoption of policies and internal mechanisms tailored to the structure and needs of each organization.",
      "We take part in the structuring and negotiation of joint ventures, strategic alliances, investment vehicles and other forms of business collaboration, designing structures that clearly define the economic and voting rights of the parties, decision-making mechanisms, risk allocation and exit alternatives.",
      "Our corporate advice is integrated with the firm's other practice areas to address, in a coordinated manner, the tax, labor, regulatory and compliance implications that may arise from our clients' decisions and operations.",
      "Our approach combines legal knowledge, business insight and a close understanding of each client's operations, allowing us to support decision-making, anticipate risks and develop corporate structures that meet their growth, investment and development objectives.",
    ],
  },
  "derecho-inmobiliario": {
    title: "Real Estate",
    desc: "Legal certainty for large-scale real estate projects.",
    imageAlt: "Real estate development and residential towers at sunset",
    intro:
      "We advise developers, investors, owners, operators and companies in the structuring, development, financing and execution of real estate projects and transactions.",
    paragraphs: [
      "We advise developers, investors, owners, operators and companies in the structuring, development, financing and execution of real estate projects and transactions.",
      "Our practice covers every stage of the real estate cycle, from the acquisition and disposition of assets and the legal feasibility analysis of a project through its structuring, financing, development, marketing and operation. We take part in negotiating purchase and sale agreements, leases, and development and construction contracts, as well as in due diligence processes and the corporate and tax structuring of transactions.",
      "We have extensive experience structuring projects under condominium and horizontal property regimes, including residential, commercial, industrial and mixed-use developments. We also advise on the structuring of industrial parks, hotel projects and other real estate developments that require the integration of various legal, operational and commercial components.",
      "We support our clients in structuring investment vehicles, administration and guaranty trusts, acquisition and construction financing schemes, and co-investment agreements, coordinating the various legal aspects required for project execution.",
      "Our practice also includes assistance with regulatory processes related to real estate development, including licenses, construction permits, environmental authorizations and other administrative matters necessary for the planning, development and operation of projects.",
      "We conduct real estate due diligence aimed at identifying and assessing matters related to title, liens, restrictions, easements, registry conditions and other contingencies that may affect the acquisition, financing, development or exploitation of an asset.",
      "Our approach combines knowledge of the real estate market, business insight and efficient legal execution, allowing us to anticipate risks, facilitate decision-making and support our clients from initial structuring through the development and operation of complex real estate projects.",
    ],
  },
  "fusiones-y-adquisiciones": {
    title: "Mergers & Acquisitions",
    desc: "Comprehensive strategic support in complex corporate transactions.",
    imageAlt: "Executives closing a deal in a boardroom",
    intro:
      "We advise companies, shareholders, investors and corporate groups in mergers, acquisitions, divestitures, reorganizations and other corporate transactions.",
    paragraphs: [
      "We advise companies, shareholders, investors and corporate groups in mergers, acquisitions, divestitures, reorganizations and other corporate transactions, both domestic and cross-border.",
      "Our practice covers every stage of a transaction, from initial structuring and due diligence through negotiation, documentation, closing and implementation. We approach each transaction from a comprehensive perspective, identifying its corporate, contractual, regulatory, tax and labor implications, as well as the risks that may affect its structure, valuation or execution.",
      "We represent both buyers and sellers in the acquisition and disposition of companies, equity interests, business units and assets. We also advise strategic investors and investment funds in structuring and executing their transactions.",
      "Our experience includes preparing and negotiating letters of intent, confidentiality agreements, memoranda of understanding, share and asset purchase agreements, investment agreements and other transaction-related documentation, including pricing structures, post-closing adjustments, earn-outs, representations and warranties, indemnities and other risk-allocation mechanisms.",
      "We conduct due diligence processes aimed at identifying and quantifying the main legal risks of a transaction and translating our findings into concrete decisions regarding its structure, negotiation and documentation.",
      "In transactions involving multiple jurisdictions or requiring specialized expertise, we coordinate closely with legal, financial, tax, accounting and technical advisors, enabling the client to manage the transaction under a unified strategy with a clear view of its main risks and objectives.",
      "Our approach combines business insight, negotiation skill and efficient legal execution, allowing us to anticipate risks, facilitate decision-making and support our clients in the structuring and closing of complex transactions.",
    ],
  },
  "sectores-regulados": {
    title: "Regulated Industries",
    desc: "Specialized representation before sector regulators.",
    imageAlt: "Energy and telecommunications infrastructure at dusk",
    intro:
      "We advise companies, investors and corporate groups engaged in activities subject to state regulation, supervision or authorization.",
    paragraphs: [
      "We advise companies, investors and corporate groups engaged in activities subject to state regulation, supervision or authorization, including the energy, mining, natural resources, telecommunications, financial services, food and beverage, and other regulated industries.",
      "Our practice covers the analysis and application of regulatory frameworks, the structuring of projects and operations subject to administrative authorization, and assistance in obtaining, amending and maintaining the licenses, permits, concessions, registrations and other approvals required for our clients' activities.",
      "We advise on public and private procurement processes, bidding procedures, concessions, operating licenses and other instruments related to private sector participation in regulated activities, as well as on matters relating to tariff structures, regulated pricing and conditions imposed by sector regulators.",
      "We represent our clients in their dealings with regulatory authorities and agencies, including administrative proceedings, information requests, audits, inspections, sanction proceedings and other actions that may affect their operations, assets or rights.",
      "We also support our clients in identifying and assessing regulatory changes that may affect their businesses, enabling them to anticipate the implications, adapt their operations and make strategic decisions in response to new regulatory scenarios.",
      "Our approach combines regulatory knowledge, industry understanding and business insight, allowing us to address matters in which regulatory decisions may have a significant impact on our clients' operations, investment and development.",
    ],
  },
  "propiedad-intelectual": {
    title: "Intellectual Property",
    desc: "Strategic protection of intangible and creative assets.",
    imageAlt: "Creative studio with brand blueprints and prototypes",
    intro:
      "We advise companies, rights holders and investors in the protection, management and enforcement of their intellectual property assets.",
    paragraphs: [
      "We advise companies, rights holders and investors in the protection, management and enforcement of their intellectual property assets, including trademarks, patents, copyrights and other intangible assets relevant to their operations and business strategy.",
      "Our practice covers the design and implementation of intellectual property protection strategies, from the registration and administration of rights to their enforcement against infringement, unauthorized use and other conduct that may affect their ownership, exclusivity or commercial value. We represent our clients in administrative proceedings, court actions and other measures aimed at protecting and enforcing their rights.",
      "We also advise on the exploitation and commercialization of intangible assets through the structuring and negotiation of licensing, franchising, technology transfer, assignment of rights and other intellectual property-related transactions. We further take part in reviewing and assessing intellectual property portfolios in the context of acquisitions, investments, reorganizations and other corporate transactions.",
      "In matters of counterfeiting and misuse of rights, we design comprehensive protection and enforcement strategies that may include preventive and deterrent measures, investigations, proceedings before administrative and customs authorities, and the pursuit of civil or criminal actions when the circumstances of the case so require.",
      "Our approach seeks to integrate the legal protection of intangible assets with the client's commercial objectives, allowing them not only to safeguard their rights against third parties but also to strategically manage their intellectual property as a key component of their business value and growth.",
    ],
  },
  "resolucion-de-controversias": {
    title: "Dispute Resolution",
    desc: "Civil, commercial and arbitral litigation in high-impact matters.",
    imageAlt: "Modern courtroom",
    intro:
      "We represent companies, corporate groups, shareholders and investors in complex disputes before domestic courts and in domestic and international arbitrations.",
    paragraphs: [
      "We represent companies, corporate groups, shareholders and investors in complex disputes and high-impact matters, before domestic courts and in domestic and international arbitrations. Our practice covers civil and commercial litigation, corporate and shareholder disputes, contractual conflicts, property claims and disputes arising from business operations and relationships.",
      "Our practice covers every stage of a dispute, from its prevention and early management through to final resolution. We advise our clients in identifying risks and potential areas of conflict, analyzing sensitive contractual and commercial relationships, and designing strategies aimed at preventing litigation, preserving rights and strengthening their position in the event of a dispute.",
      "When a dispute arises, we develop legal and procedural strategies tailored to each matter, taking into account not only its legal implications but also its commercial, economic and reputational effects. Our involvement includes defining case strategy, seeking interim measures for the protection of rights and assets, conducting proceedings at every stage and enforcing judgments and awards.",
      "We have extensive experience in institutional and ad hoc arbitrations, participating in every stage of the proceedings, from the analysis and drafting of arbitration agreements through the constitution of the tribunal, the presentation and defense of the case, evidentiary strategy, and the recognition and enforcement of awards.",
      "We also advise and represent our clients in negotiations, mediations and other alternative dispute resolution mechanisms. Our approach seeks to identify, at every stage, the path that best serves the client's objectives, including negotiated solutions when these allow value to be preserved, exposure to be reduced and more efficient outcomes to be achieved than through contentious proceedings.",
      "We combine legal rigor, procedural strategy and business understanding to anticipate scenarios, manage risk and conduct disputes with a comprehensive vision. Our goal is to protect our clients' position and reach solutions that serve both their legal interests and their business objectives.",
    ],
  },
  fiscal: {
    title: "Tax Law",
    desc: "Comprehensive tax strategy for domestic and international operations.",
    imageAlt: "Analysis of financial and tax documents",
    intro:
      "We advise companies, corporate groups and investors in the strategic planning and management of their tax affairs.",
    paragraphs: [
      "We advise companies, corporate groups and investors in the strategic planning and management of their tax affairs, combining technical knowledge of tax law with a comprehensive understanding of their operations and business objectives.",
      "Our practice covers the tax structuring of corporate operations and transactions, mergers, acquisitions, corporate reorganizations and investments, as well as the analysis of their tax implications and the design of efficient alternatives within a framework of strict legal compliance. We also advise on transfer pricing, international taxation and the application of double taxation treaties.",
      "We support our clients in identifying and proactively managing tax risks, through the review of structures, operations and internal practices that may give rise to tax contingencies. This approach allows us to anticipate potential areas of exposure and design strategies aimed at strengthening the client's position in tax audits and requirements from the tax authority.",
      "We represent our clients during audits and tax examination proceedings before the Superintendency of Tax Administration (SAT), including responding to information requests, discussing adjustments and tax assessments, and recovering tax credits.",
      "When a dispute must be challenged, we take on the client's defense both at the administrative and judicial levels, designing strategies that integrate the substantive, evidentiary and procedural aspects of each case.",
      "Our approach seeks to integrate planning, compliance and tax defense within a single strategy, allowing our clients to manage their tax obligations with certainty, anticipate risks and make business decisions with a proper understanding of their tax implications.",
    ],
  },
  "litigio-penal": {
    title: "Criminal Litigation",
    desc: "Strategic defense in criminal investigations and proceedings.",
    imageAlt: "Facade of a courthouse at night",
    intro:
      "We advise companies, executives and individuals both in defending against and pursuing criminal actions.",
    paragraphs: [
      "We advise companies, executives and individuals both in defending against and pursuing criminal actions, with a strategic approach aimed at protecting our clients' assets, operations and reputation in the face of criminal risk.",
      "We represent our clients in investigations and proceedings related to economic, financial, property and corporate crimes, either assuming their technical defense or pursuing the corresponding criminal actions when we identify the commission of criminal conduct affecting their interests.",
      "Our practice integrates preventive analysis, reputational crisis management and coordination with other areas of law, enabling us to provide an agile and comprehensive response at every stage of the process.",
      "We support our clients in internal corporate investigations, including interviews, document review and forensic analysis, to identify risks and act promptly. We also have extensive experience handling highly complex cases that require rigorous technical management and a specialized procedural strategy.",
      "We further design contingency response protocols that allow organizations to act quickly and in a coordinated manner in response to raids, information requests and notices of investigation, combining technical defense with communication strategies that protect our clients' institutional reputation.",
    ],
  },
  "derecho-constitucional": {
    title: "Constitutional Law",
    desc: "Protection of fundamental rights against the State.",
    imageAlt: "Facade of the supreme court under a dramatic sky",
    intro:
      "We represent companies, corporate groups and investors in high-relevance constitutional disputes.",
    paragraphs: [
      "We represent companies, corporate groups and investors in high-relevance constitutional disputes, particularly those involving actions by public authorities, administrative and regulatory decisions, and disputes that may affect their rights, operations or business interests.",
      "Our practice covers the filing and defense of amparo actions, unconstitutionality claims and other constitutional review mechanisms, aimed both at protecting fundamental rights and procedural guarantees and at challenging acts, rulings and regulations contrary to the constitutional order.",
      "We take part in constitutional matters arising from court litigation, administrative proceedings, and tax and regulatory disputes, developing strategies that address both the constitutional dimension of the conflict and its implications within the underlying proceeding or dispute.",
      "Our experience includes conducting constitutional proceedings before the various courts in the country, including matters submitted to the Constitutional Court.",
      "We approach each case through a rigorous analysis of the applicable law, constitutional case law and relevant precedent, integrating them into a procedural strategy designed around the particularities and objectives of each dispute.",
    ],
  },
  "banca-y-finanzas": {
    title: "Banking & Finance",
    desc: "Legal structuring of sophisticated financial transactions.",
    imageAlt: "Corporate financial district",
    intro:
      "We advise banks and financial institutions, insurers, investment funds, investors and companies in financing, lending and investment transactions.",
    paragraphs: [
      "We advise banks and financial institutions, insurers, investment funds, investors and companies in the structuring, negotiation and execution of financing, lending and investment transactions, both domestic and cross-border.",
      "Our practice covers corporate, bilateral and syndicated financings, project finance, credit lines and facilities, refinancings, debt restructurings and other transactions designed to meet our clients' capital, investment and growth needs.",
      "We represent both financial institutions and other capital providers, as well as borrowers, participating in the structuring and negotiation of the terms of each transaction and in preparing the documentation required for its implementation and closing.",
      "We advise on the design, creation and enforcement of security structures, including in rem and personal guarantees, administration and guaranty trusts, and other mechanisms designed to secure financial obligations and facilitate efficient financing structures.",
      "Our practice also includes regulatory advice to banks, financial institutions, insurers and other financial sector participants on matters related to their establishment, authorization, operation and regulatory compliance. We support foreign banks in establishing and operating representative offices and advise international financial institutions on cross-border marketing activities and the cross-border offering of financial products and services, taking into account the applicable regulatory restrictions and requirements in each case.",
      "We also advise on anti-money laundering matters, as well as in dealings with regulatory authorities and supervisory bodies on proceedings, information requests and other matters related to our clients' activities.",
      "We take part in transactions requiring the coordination of multiple participants, jurisdictions and areas of expertise, working together with financial institutions, international advisors, trustees and other parties involved to facilitate their proper execution.",
      "Our approach combines knowledge of the financial sector, business insight and execution capability, allowing us to understand the needs of the various parties to a transaction, anticipate its main risks and support our clients from initial structuring through closing.",
    ],
  },
  "compliance-y-gobierno-corporativo": {
    title: "Compliance & Corporate Governance",
    desc: "A culture of compliance and sound corporate governance.",
    imageAlt: "Board meeting reviewing corporate policies",
    intro:
      "We advise companies, corporate groups, boards of directors and senior management in the design and strengthening of compliance structures.",
    paragraphs: [
      "We advise companies, corporate groups, boards of directors and senior management in the design and strengthening of compliance structures aimed at identifying, preventing and managing legal, regulatory and reputational risks.",
      "Our practice covers the design, implementation and review of compliance programs tailored to each organization's structure, industry and risk profile, including integrity and anti-corruption policies, anti-money laundering and counter-terrorist financing prevention, codes of conduct, third-party and vendor due diligence procedures, internal reporting channels and protocols for identifying and managing potential violations.",
      "We support boards, committees and executive teams in assessing risks and adopting governance and control structures that strengthen internal decision-making processes and enable an appropriate response to regulatory changes, sensitive transactions or situations that may expose the organization and its directors.",
      "We also conduct internal investigations related to complaints, indications of wrongdoing, potential violations and other situations requiring an independent and confidential assessment. Our work includes defining the investigation strategy, reviewing and preserving information, conducting interviews, performing legal analysis of the findings, and advising on appropriate response and remediation measures.",
      "Our approach combines prevention, corporate governance and the ability to respond to critical situations, enabling our clients to develop compliance structures proportionate to their risks and consistent with the requirements of organizations operating under national and international standards.",
    ],
  },
  "migratorio-y-laboral": {
    title: "Immigration & Labor",
    desc: "Comprehensive management of human talent.",
    imageAlt: "Executives in transit at an airport terminal",
    intro:
      "Top-tier advice on human talent management, domestic and foreign hiring, and labor relations.",
    paragraphs: [
      "The growth and expansion of markets has driven companies to launch new operations, creating a need for qualified personnel to support the establishment, management and expansion of their operations.",
      "Our labor practice provides top-tier advice under an innovative methodology that combines legal rigor with a practical and modern approach to human talent management.",
      "We guide our clients through the hiring process, drafting of employment contracts, internal policies, variable compensation schemes and benefit plans aligned with best corporate talent management practices, for both domestic and foreign personnel.",
      "We support our clients in workforce restructuring processes, collective bargaining, preventive labor audits, and the resolution of individual and collective labor disputes, seeking solutions that balance regulatory compliance with business objectives and the organization's operational continuity.",
    ],
  },
  "planificacion-patrimonial-y-sucesoria": {
    title: "Estate & Succession Planning",
    desc: "Flexible structures for family wealth succession.",
    imageAlt: "Family in a home with warm light",
    intro:
      "We advise individuals, families and groups with significant wealth in the planning, organization and protection of their assets.",
    paragraphs: [
      "We advise individuals, families and groups with significant wealth in the planning, organization and protection of their assets, as well as in the design of structures that allow for an orderly wealth transition between generations and the continuity of their business interests.",
      "Our practice begins by understanding the composition of the estate, the relationships between its various components, and each client's long-term objectives. Based on this, we design tailored estate and succession structures aimed at organizing the transfer of assets, establishing appropriate mechanisms for their administration and governance, and preventing potential conflicts arising from succession processes.",
      "We advise on the structuring of administration and testamentary trusts, succession planning, family protocols, prenuptial agreements and other structures designed to organize the ownership, administration and transfer of wealth. When the estate includes interests in family businesses, we integrate succession planning with corporate governance mechanisms that preserve business continuity and establish clear rules for the involvement and participation of future generations.",
      "We also support estate reorganization and generational transition processes, coordinating, when necessary, with tax, financial and other specialized advisors to comprehensively address the various legal and economic dimensions of the estate.",
      "Our approach is based on a close, long-term relationship with each client, characterized by discretion, confidentiality and an understanding of their objectives. We seek to establish structures that protect, manage and transfer wealth in an orderly manner, preserving its value and continuity across generations.",
    ],
  },
};
