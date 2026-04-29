import nitpyLogo from "../assets/logo/NITPY.png";
import committeePlaceholder from "../assets/images/committee-placeholder.svg";
import ieeeLogoIcon from "../assets/images/ieee_logo_icon.webp";
import priceSheet from "../../docs/price.jpeg";

export const navLinks = [
  
  { id: "cfp", title: "Call for Papers", url: "/call-for-papers" },
  { id: "dates", title: "Important Dates", url: "/important-dates" },
  { id: "guidelines", title: "Guidelines", url: "/guidelines" },
  { id: "registration", title: "Registration", url: "/registration" },
  { id: "committees", title: "Committees", url: "/committees" },
  { id: "sponsors", title: "Sponsors", url: "/sponsors" },
  { id: "about", title: "About", url: "/about-us" },
  { id: "contact", title: "Contact", url: "/contact-us" },
];

const createCommitteeMember = ({
  role,
  name,
  designation,
  affiliation,
  image = committeePlaceholder,
  alt,
  isPlaceholder = false,
}) => ({
  role,
  name,
  designation,
  affiliation,
  image,
  alt: alt || `${name} portrait`,
  isPlaceholder,
});

const normalizeCommitteeName = (name) => {
  const cleanedName = String(name ?? "")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleanedName) {
    return cleanedName;
  }

  const toTitleCaseName = (value) =>
    value
      .split(" ")
      .map((word) =>
        word
          .split(/([.'-])/)
          .map((segment) => {
            if (!/^[A-Za-z]+$/.test(segment)) {
              return segment;
            }

            if (segment.length === 1) {
              return segment.toUpperCase();
            }

            return `${segment.charAt(0).toUpperCase()}${segment.slice(1).toLowerCase()}`;
          })
          .join("")
      )
      .join(" ");

  const withoutHonorific = cleanedName.replace(/^dr\.?\s*/i, "");
  return `Dr. ${toTitleCaseName(withoutHonorific)}`;
};

const parseCommitteeMeta = (meta) => {
  const metaLines = String(meta ?? "")
    .replace(/\r/g, "")
    .replace(/\s*Designation\s*:/gi, "\nDesignation: ")
    .replace(/\s*Department\s*:/gi, "\nDepartment: ")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  return metaLines.reduce(
    (result, line) => {
      if (/^Designation:/i.test(line)) {
        return {
          ...result,
          designation: line.replace(/^Designation:/i, "").trim(),
        };
      }

      if (/^Department:/i.test(line)) {
        return {
          ...result,
          affiliation: line.replace(/^Department:/i, "").trim(),
        };
      }

      if (!result.designation) {
        return {
          ...result,
          designation: line,
        };
      }

      return {
        ...result,
        affiliation: result.affiliation ? `${result.affiliation}, ${line}` : line,
      };
    },
    { designation: "", affiliation: "" }
  );
};

const createCommitteeMemberFromCsv = (role, name, meta, image) => {
  const { designation, affiliation } = parseCommitteeMeta(meta);

  return createCommitteeMember({
    role,
    name: normalizeCommitteeName(name),
    designation,
    affiliation,
    image,
  });
};

const createCommitteeSection = (title, role, rows, layout = "gallery") => ({
  title,
  layout,
  members: rows.map(([name, meta, image]) => createCommitteeMemberFromCsv(role, name, meta, image)),
});

export const siteContent = {
  brand: {
    acronym: "IConSCEPT 2026",
    shortName: "IConSCEPT 2026",
    fullName:
      "2026 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication",
    edition: "Fourth Edition",
    mode: "Hybrid Mode",
    dates: "December 17-18, 2026",
    venue: "National Institute of Technology Puducherry, Karaikal, India",
    hostInstitute: "National Institute of Technology Puducherry",
    hostCampus: "Karaikal, India",
    organizers: "Departments of EEE, ECE, and CSE",
    technicalSponsor: "IEEE Madras Section",
    publicationTarget:
      "All accepted and presented papers will be submitted to IEEE Xplore for publication.",
    logo: nitpyLogo,
    heroFacts: [
      { label: "Edition", detail: "Fourth Edition" },
      { label: "Mode", detail: "Hybrid Mode" },
      { label: "Dates", detail: "December 17-18, 2026" },
      { label: "Venue", detail: "Karaikal, India" },
    ],
    profile: [
      { label: "Host institute", detail: "National Institute of Technology Puducherry" },
      { label: "Organizing departments", detail: "EEE, ECE, and CSE" },
      { label: "Technical sponsor", detail: "IEEE Madras Section" },
      { label: "Publication", detail: "Submission to IEEE Xplore" },
    ],
  },
  aboutParagraphs: [
    "The 2026 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT) is the premier fourth edition conference of NIT Puducherry, scheduled to be held in a hybrid mode at the National Institute of Technology Puducherry, Karaikal, India, during December 17-18, 2026.",
    "Following the successful conduct of the 2023, 2024, and 2025 editions which were published in IEEE Xplore, this edition is collectively organized by the Departments of EEE, ECE, and CSE with the IEEE Madras Section as the technical sponsor.",
    "The conference aims to bring together leading academicians, scientists, engineers, and researchers on a common platform to share and exchange knowledge in broad areas of interest including wireless communication, VLSI and embedded systems, power electronics, renewable energy, robotics, and artificial intelligence. All accepted and presented papers will be submitted to IEEE Xplore for publication, and the organizing committee invites prospective authors to submit original contributions to 2026 IConSCEPT.",
  ],
  highlights: [
    {
      title: "Signal and Communication Systems",
      text: "Contemporary contributions in signal processing, RF systems, antennas, microwave engineering, optical links, and intelligent communication architectures.",
    },
    {
      title: "Electronics and Embedded Design",
      text: "Research spanning VLSI design, embedded platforms, hardware acceleration, sensor interfaces, edge intelligence, and real-time systems.",
    },
    {
      title: "Power and Sustainable Infrastructure",
      text: "Power electronics, renewable energy systems, energy conversion, electric mobility, smart grids, and resilient infrastructure technologies.",
    },
    {
      title: "AI, Robotics, and Computation",
      text: "Automation, robotics, data-driven decision systems, machine learning, modeling, and computational methods for engineering applications.",
    },
  ],
  tracks: [
    {
      title: "Communication",
      description:
        "Wireless communication, signal processing, antenna and microwave systems, optical communication, satellite links, and computation-driven RF methods.",
    },
    {
      title: "Microelectronics and VLSI",
      description:
        "VLSI design, embedded platforms, real-time systems, sensor networks, IoT architectures, hardware for AI, and secure edge devices.",
    },
    {
      title: "Energy Conservation Systems",
      description:
        "Power converters, renewable generation, storage systems, electric mobility, grid intelligence, power quality, and adaptive energy management.",
    },
    {
      title: "Power Systems, Automation & Control",
      description:
        "Industrial automation, robotics, control systems, instrumentation, cyber-physical integration, and intelligent actuation for modern infrastructure.",
    },
    {
      title: "Data Learning (AI/ML/DL)",
      description:
        "Artificial intelligence, machine learning, deep learning, data analytics, cloud and edge computing, and intelligent system design.",
    },
    {
      title: "Data Computing",
      description:
        "Algorithms, modeling, simulation, and computing methods that support electronics, telecommunication, power, and interdisciplinary engineering research.",
    },
  ],
  submission: {
    scope:
      "Prospective authors are invited to submit original and unpublished contributions aligned with the conference themes of signal processing, computation, electronics, power, telecommunication, and related intelligent systems.",
    paperFormat:
      "Full-length papers should follow IEEE double-column formatting and be prepared in English.",
    paperLength:
      "The final author kit will confirm the page limit, camera-ready refinements, and final compliance checks for the 2026 edition.",
    portalStatus:
      "Use the author guidelines below to prepare your manuscript early. The official Microsoft CMT submission portal is now available for paper uploads.",
    authorGuidelines: [
      {
        title: "Submission readiness",
        detail:
          "Prepare original and unpublished work in IEEE double-column format, with title, author names, affiliations, contact details, references, figures, and PDF readability checked before upload.",
      },
      {
        title: "Author experience",
        detail:
          "Submit a clean reviewer-ready PDF and keep author metadata consistent between the manuscript and the portal.",
      },
      {
        title: "Registration fees",
        detail:
          "Author registration is mandatory for accepted papers. Fee slabs and payment updates are published on the registration page.",
      },
      {
        title: "Language",
        detail:
          "All papers must be written in English with clear technical presentation, readable figures, and consistent formatting.",
      },
      {
        title: "Plagiarism notice",
        detail:
          "Submissions must be original and may be screened for plagiarism or significant overlap before review or publication.",
      },
      {
        title: "Attendance expectation",
        detail:
          "At least one author of each accepted paper is expected to register and present the work during the conference.",
      },
      {
        title: "Submission updates",
        detail:
          "Use the official Microsoft CMT submission portal published on the website for paper upload. Camera-ready instructions, copyright details, and metadata requirements will continue to be updated here.",
      },
      {
        title: "Publication compliance",
        detail:
          "IConSCEPT 2026 currently follows an IEEE publication pathway, so final accepted papers must follow the official camera-ready and copyright instructions released by the conference.",
      },
    ],
    authorGuidanceNote:
      "Use the call-for-papers page for templates and the registration page for fee details. Do not rely on Springer-style or third-party instructions unless the organizing committee officially announces a different publication workflow.",
  },
  publication: {
    overview:
      "All accepted and presented papers of IConSCEPT 2026 will be submitted to IEEE Xplore for publication, subject to IEEE policies and conference compliance requirements.",
    continuity:
      "The previous editions of the conference series were published in IEEE Xplore, and the 2026 edition continues that publication pathway.",
    workflow: [
      {
        title: "Peer review",
        text: "Each submission will undergo review for originality, technical merit, clarity, and relevance to the conference scope.",
      },
      {
        title: "Camera-ready preparation",
        text: "Accepted papers must be revised and formatted in accordance with the final author instructions issued by the conference.",
      },
      {
        title: "Registration and presentation",
        text: "At least one author of each accepted paper must complete registration and present the work during the conference.",
      },
      {
        title: "IEEE Xplore submission",
        text: "Eligible accepted papers that are registered and presented will be submitted to IEEE Xplore after conference completion.",
      },
    ],
    notes: [
      "Final author kit will be announced in due course.",
      "IEEE copyright and metadata instructions will accompany the camera-ready guidelines.",
      "Publication remains subject to IEEE review policies and technical compliance.",
    ],
  },
  guidelines: {
    intro:
      "Author guidance, publication instructions, and final paper requirements for IConSCEPT 2026 are consolidated on this page.",
    authorGuidelines: [
      {
        title: "Originality",
        detail:
          "Only original technical papers that are not published or under review elsewhere should be submitted.",
      },
      {
        title: "Language",
        detail:
          "All manuscripts must be written in English with clear technical presentation and readable figures.",
      },
      {
        title: "Plagiarism",
        detail:
          "Similarity should remain within 15%, and submissions may be screened for overlap before review or publication.",
      },
      {
        title: "Registration",
        detail:
          "At least one author of every accepted paper must complete a full registration for the paper to remain eligible for the conference proceedings.",
      },
    ],
    publicationGuidelines: [
      {
        title: "Pages",
        detail:
          "Full-length research papers should normally be prepared within the conference page limit, with up to 2 additional pages only if permitted in the final author instructions.",
      },
      {
        title: "Format and font",
        detail:
          "Manuscripts must follow the IEEE double-column format and be submitted as a properly readable PDF.",
        templates: [
          {
            label: "Paper Template (MS Word)",
            href: "/IConSECPT-2026_Final_conference-template-A4.docx",
          },
          {
            label: "Paper Template (LaTeX)",
            href: "/IEEE-LaTex-IconSECPT-2026.zip",
          },
        ],
      },
      {
        title: "Submission portal",
        detail:
          "Submit your manuscript through the official Microsoft CMT portal.",
        href: "https://cmt3.research.microsoft.com/IConSCEPT2026/Submission/Index",
        linkLabel: "Open Microsoft CMT submission portal",
      },
      {
        title: "How to submit",
        detail:
          "Authors should complete the submission metadata carefully and upload the manuscript through Microsoft CMT using the official portal link.",
      },
    ],
    publicationRequirementsIntro:
      "For accepted papers to be included in the conference proceedings and considered for inclusion in the IEEE Xplore® Digital Library, the following conditions must be met by the specified deadline:",
    publicationRequirements: [
      "Submission of the final version of the paper.",
      "Transfer of copyright to IEEE.",
      "At least one author must register for the conference with a full registration.",
      "The paper must be presented at the conference.",
    ],
    publicationRequirementsClosing:
      "Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.",
    cmtNotice:
      "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support. ",
  },
  importantDates2026: [
    { label: "Conference dates", value: "December 17-18, 2026", status: "Confirmed" },
    { label: "Call for papers release", value: "To be announced", status: "Awaited" },
    { label: "Last date for paper submission", value: "21.07.2026", status: "Confirmed" },
    { label: "Notification of acceptance", value: "06.10.2026", status: "Confirmed" },
    { label: "Final (Camera-ready) paper submission", value: "03.11.2026", status: "Confirmed" },
    { label: "Early bird registration deadline", value: "To be announced", status: "Awaited" },
    { label: "Author registration deadline", value: "To be announced", status: "Awaited" },
    { label: "Non-author registration deadline", value: "To be announced", status: "Awaited" },
  ],
  registration: {
    notice:
      "The registration fee schedule below reflects the fee structure for the 2026 edition.",
    portalText:
      "The online registration portal and payment instructions will be announced on this website once released by the organizing committee.",
    indian: [
      {
        category: "Student author",
        earlyIEEE: "INR 8,000",
        earlyNonIEEE: "INR 9,000",
        standardIEEE: "INR 9,000",
        standardNonIEEE: "INR 10,000",
      },
      {
        category: "Academia author",
        earlyIEEE: "INR 9,000",
        earlyNonIEEE: "INR 10,000",
        standardIEEE: "INR 10,000",
        standardNonIEEE: "INR 11,000",
      },
      {
        category: "Industry author",
        earlyIEEE: "INR 10,000",
        earlyNonIEEE: "INR 11,000",
        standardIEEE: "INR 11,000",
        standardNonIEEE: "INR 12,000",
      },
      {
        category: "Non-author attendee",
        earlyIEEE: "INR 1,500",
        earlyNonIEEE: "INR 2,000",
        standardIEEE: "INR 1,500",
        standardNonIEEE: "INR 2,000",
      },
    ],
    foreign: [
      {
        category: "Student author",
        earlyIEEE: "USD 100",
        earlyNonIEEE: "USD 150",
        standardIEEE: "USD 150",
        standardNonIEEE: "USD 200",
      },
      {
        category: "Academia author",
        earlyIEEE: "USD 150",
        earlyNonIEEE: "USD 200",
        standardIEEE: "USD 200",
        standardNonIEEE: "USD 250",
      },
      {
        category: "Industry author",
        earlyIEEE: "USD 200",
        earlyNonIEEE: "USD 250",
        standardIEEE: "USD 250",
        standardNonIEEE: "USD 300",
      },
      {
        category: "Non-author attendee",
        earlyIEEE: "USD 40",
        earlyNonIEEE: "USD 50",
        standardIEEE: "USD 40",
        standardNonIEEE: "USD 50",
      },
    ],
    notes: [
      "Registration fee includes GST.",
      "Payment instructions will be published with the registration portal.",
      "Participants are advised to rely only on information published on the official conference website.",
    ],
    priceSheet,
  },
  contacts: [
    {
      label: "General queries",
      type: "email",
      value: "iconscept@nitpy.ac.in",
      href: "mailto:iconscept@nitpy.ac.in",
    },
    {
      label: "Phone coordination",
      type: "phone",
      people: [
        {
          name: "Vijaya Kumar K",
          value: "+91 9566453837",
          href: "tel:+919566453837",
        },
        {
          name: "Priyadharshini R",
          value: "+91 7604900332",
          href: "tel:+917604900332",
        },
      ],
    },
  ],
  committeePage: {
    placeholderImage: committeePlaceholder,
    intro: {
      tag: "Committees",
      title: "Leadership and committee structure for IConSCEPT 2026",
      text:
        "The conference committee brings together institutional leadership and organizing teams from ECE, EEE, and CSE responsible for the academic direction, publication workflow, publicity, sponsorship, registration, and hospitality for IConSCEPT 2026.",
    },
    featuredMembers: [
      createCommitteeMemberFromCsv(
        "Chief Patron",
        "Dr. Makarand Madhao Ghangrekar",
        `Director

NIT Puducherry`,
        "https://www.nitpy.ac.in/assets/images/faculties/admin/Director.jpg"
      ),
      createCommitteeMemberFromCsv(
        "Patron",
        "Dr. Sundaravarathan S",
        `Designation : Registrar

Department : NIT Puducherry`,
        "https://nitpy.ac.in/assets/images/faculties/admin/Sundaravarathan.jpg"
      ),
    ],
    sections: [
      createCommitteeSection("Conference Chairs", "Conference Chair", [
        [
          "Dr. ANIRUDDHA KANHE",
          `Designation: Associate Professor

Department: Head of Department
Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/21/",
        ],
                [
          "Dr. SURESH BALANETHIRAM",
          `Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/97/",
        ],
      ], "spotlight"),
      createCommitteeSection("Technical Program Chairs", "Technical Program Chair", [
        [
          "Dr. Lakshmi Sutha G",
          `Designation: Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/30/",
        ],
        [
          "Dr. Vinopraba. T",
          `Designation: Professor & Head

Department: Electrical & Electronics Engineering`,
          "https://research.nitpy.ac.in/profile/photo/1002/",
        ],
        [
          "Dr. Venkatesan M",
          `Designation: Associate Professor & Head

Department: Computer Science & Engineering`,
          "https://research.nitpy.ac.in/profile/photo/105/",
        ],
      ]),
      createCommitteeSection("Publication Chairs", "Publication Chair", [
        [
          "Dr. YEDUKONDALA RAO VEERANKI",
          `Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/155/",
        ],
        [
          "Hemachander Allamsetty",
          `Designation: Assistant Professor

Department: Electrical & Electronics Engineering`,
          "https://research.nitpy.ac.in/profile/photo/86/",
        ],
        [
          "Dr. Kumaran P",
          `Designation: Assistant Professor

Department: Computer Science & Engineering`,
          "https://research.nitpy.ac.in/profile/photo/94/",
        ],
      ]),
      createCommitteeSection("Financial Chair", "Financial Chair", [
        [
          "Dr. SURENDAR M",
          `Designation: Associate Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/55/",
        ],
      ]),
      createCommitteeSection("Keynote / Tutorial / Session Chairs", "Keynote/Tutorial/Session Chair", [
        [
          "Dr. HARIGOVINDAN V P",
          `Designation: Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/7/",
        ],
        [
          "Thangavel Subbaiyan",
          `Designation: Professor

Department: Electrical & Electronics Engineering`,
          "https://research.nitpy.ac.in/profile/photo/50/",
        ],
        [
          "G Koperundevi",
          `Designation: Professor

Department: Electrical & Electronics Engineering`,
          "https://research.nitpy.ac.in/profile/photo/14/",
        ],
        [
          "Dr. Surendiran B",
          `Designation: Professor

Department: Computer Science & Engineering`,
          "https://research.nitpy.ac.in/profile/photo/27/",
        ],
        [
          "Dr. Narendran Rajagopalan",
          `Designation: Professor

Department: Computer Science & Engineering`,
          "https://research.nitpy.ac.in/profile/photo/16/",
        ],
        [
          "Dr. BOOPATHI RANI R",
          `Designation: Associate Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/10/",
        ],
        [
          "Dr. R MURUGAN",
          `Designation: Associate Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/25596602/",
        ],
        [
          "Venkadesan Arunachalam",
          `Designation: Professor

Department: Electrical & Electronics Engineering`,
          "https://research.nitpy.ac.in/profile/photo/26/",
        ],
        [
          "Dr. Sanjay Bankapur",
          `Designation: Assistant Professor

Department: Computer Science & Engineering`,
          "https://research.nitpy.ac.in/profile/photo/90/",
        ],

      ]),
      createCommitteeSection("Publicity Chairs", "Publicity Chair", [
        [
          "Dr. THOMAS JOSEPH",
          `Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/93/",
        ],
        [
          "Dr. Praveen R",
          `Designation: Assistant Professor

Department: Computer Science & Engineering`,
          "https://research.nitpy.ac.in/profile/photo/1000015/",
        ],
        [
          "Ram Jethmalani Chinnasamy Hemparuva",
          `Designation: Assistant Professor

Department: Electrical & Electronics Engineering`,
          "https://research.nitpy.ac.in/profile/photo/84/",
        ],
      ]),
      createCommitteeSection("Sponsorship Chairs", "Sponsorship Chair", [
        [
          "Dr. MALAYA KUMAR NATH",
          `Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/15/",
        ],
        [
          "Navin Sam K",
          `Designation: Associate Professor

Department: Electrical & Electronics Engineering`,
          "https://research.nitpy.ac.in/profile/photo/48/",
        ],
        [
          "Dr. Vani V",
          `Designation: Assistant Professor

Department: Computer Science & Engineering`,
          "https://research.nitpy.ac.in/profile/photo/112/",
        ],

      ]),
      createCommitteeSection("Registration Chairs", "Registration Chair", [
        [
          "Dr. KULEEN KUMAR",
          `Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/165/",
        ],
        [
          "Gowrishankar S",
          `Designation: Assistant Professor

Department: Electrical & Electronics Engineering`,
          "https://research.nitpy.ac.in/profile/photo/126/",
        ],
        [
          "Dr. Karthik N",
          `Designation: Assistant Professor

Department: Computer Science & Engineering`,
          "https://research.nitpy.ac.in/profile/photo/119/",
        ],

      ]),
      createCommitteeSection("Hospitality Chairs", "Hospitality Chair", [
        [
          "Dr. SUNANDA AMBULKER",
          `Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
          "https://research.nitpy.ac.in/profile/photo/92/",
        ],
        [
          "Saravana Prakash P",
          "Designation: Assistant Professor Department: Electrical & Electronics Engineering",
          "https://research.nitpy.ac.in/profile/photo/166/",
        ],
        [
          "Dr. Ansuman Mahapatra",
          `Designation: Associate Professor

Department: Computer Science & Engineering`,
          "https://research.nitpy.ac.in/profile/photo/49/",
        ],
      ]),
    ],
    technicalProgramCommittee: null,
  },
  sponsorsPage: {
    intro: {
      tag: "Sponsors and Partners",
      title: "Technical sponsorship and collaboration opportunities",
      text:
        "IConSCEPT 2026 is supported by institutional leadership at NIT Puducherry and welcomes collaboration from technical sponsors, academic partners, industry organizations, and exhibitors.",
    },
    technicalSponsor: {
      name: "IEEE Madras Section",
      role: "Technical Sponsor",
      status: "Confirmed",
      logo: ieeeLogoIcon,
      alt: "IEEE Madras Section logo",
      description:
        "IEEE Madras Section is the confirmed technical sponsor for IConSCEPT 2026 and supports the conference’s academic and publication framework.",
    },
    institutionalSupport: [
      {
        title: "Host Institute",
        value: "National Institute of Technology Puducherry",
      },
      {
        title: "Organizing Departments",
        value: "Departments of EEE, ECE, and CSE",
      },
      {
        title: "Conference Venue",
        value: "Karaikal, India",
      },
    ],
    opportunityTracks: [
      {
        title: "Academic Partners",
        status: "Open",
        text: "Universities, research groups, and professional communities can collaborate through knowledge partnerships and outreach support.",
      },
      {
        title: "Industry Sponsors",
        status: "Open",
        text: "Organizations can support the conference through branding, technical engagement, student outreach, and session participation.",
      },
      {
        title: "Exhibition Partners",
        status: "Open",
        text: "Technology exhibitors and innovation-focused organizations can connect with attendees through showcase and engagement opportunities.",
      },
      {
        title: "Institutional Collaborators",
        status: "Open",
        text: "Professional bodies, incubators, and innovation cells can partner on visibility, participation, and conference ecosystem activities.",
      },
    ],
    featuredBenefits: [
      "Visibility on the official conference website and communication materials",
      "Association with a national conference hosted at NIT Puducherry",
      "Access to academic, research, and industry participants",
      "Opportunities for technical engagement and institutional branding",
    ],
    contact: {
      label: "Sponsorship and partnerships",
      value: "nitpy.iconscept@gmail.com",
      href: "mailto:nitpy.iconscept@gmail.com",
      note:
        "Write to the sponsorship desk for partnership discussions, support categories, branding opportunities, and collaboration details.",
    },
  },
  sponsorNotes: [
    "IEEE Madras Section is the technical sponsor for IConSCEPT 2026.",
    "Additional sponsors, exhibitors, and institutional partners will be announced in due course.",
  ],
};
