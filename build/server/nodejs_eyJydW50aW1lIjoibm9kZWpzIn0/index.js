import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, NavLink, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, useLocation, useNavigate } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createElement, memo, useEffect, useState } from "react";
import { BellIcon, CalendarIcon, LocationMarkerIcon, MenuIcon, OfficeBuildingIcon, SearchIcon, XIcon } from "@heroicons/react/outline/esm/index.js";
import { Mail, PhoneCall } from "lucide-react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/assets/logo/IConSECPT.png
var IConSECPT_default = "/assets/IConSECPT-Xx3k_-xe.png";
//#endregion
//#region app/assets/logo/NITPY.png
var NITPY_default = "/assets/NITPY-B3XxQsIm.png";
//#endregion
//#region app/assets/images/committee-placeholder.svg
var committee_placeholder_default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsbGVkYnk9InRpdGxlIGRlc2MiPg0KICA8dGl0bGUgaWQ9InRpdGxlIj5Db21taXR0ZWUgcGxhY2Vob2xkZXIgcG9ydHJhaXQ8L3RpdGxlPg0KICA8ZGVzYyBpZD0iZGVzYyI+QSBzaW1wbGUgbmV1dHJhbCBwbGFjZWhvbGRlciBwb3J0cmFpdCBmb3IgY29tbWl0dGVlIG1lbWJlcnMgd2hvc2UgcGhvdG9zIGFyZSBub3QgeWV0IGF2YWlsYWJsZS48L2Rlc2M+DQogIDxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjRGN0ZBIi8+DQogIDxjaXJjbGUgY3g9IjIwMCIgY3k9IjEyOCIgcj0iNjIiIGZpbGw9IiNDOERBRTYiLz4NCiAgPHBhdGggZD0iTTg4IDMzMEM4OCAyNTMuNzU0IDE0OS43NTQgMTkyIDIyNiAxOTJIMTc0QzI1MC4yNDYgMTkyIDMxMiAyNTMuNzU0IDMxMiAzMzBWNDAwSDg4VjMzMFoiIGZpbGw9IiM4QkIwQzYiLz4NCiAgPHJlY3QgeD0iMTI4IiB5PSIzMjIiIHdpZHRoPSIxNDQiIGhlaWdodD0iMzQiIHJ4PSIxNyIgZmlsbD0iIzJCNTM3QSIvPg0KICA8dGV4dCB4PSIyMDAiIHk9IjM0NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iNzAwIiBsZXR0ZXItc3BhY2luZz0iNCI+VEJEPC90ZXh0Pg0KPC9zdmc+DQo=";
//#endregion
//#region app/assets/images/ieee_logo_icon.webp
var ieee_logo_icon_default = "/assets/ieee_logo_icon-CLjleu3n.webp";
//#endregion
//#region docs/price.jpeg
var price_default = "/assets/price-CK_z6Mm9.jpeg";
//#endregion
//#region app/content/siteContent.js
var navLinks = [
	{
		id: "cfp",
		title: "Call for Papers",
		url: "/call-for-papers"
	},
	{
		id: "dates",
		title: "Important Dates",
		url: "/important-dates"
	},
	{
		id: "guidelines",
		title: "Guidelines",
		url: "/guidelines"
	},
	{
		id: "registration",
		title: "Registration",
		url: "/registration"
	},
	{
		id: "committees",
		title: "Committees",
		url: "/committees"
	},
	{
		id: "sponsors",
		title: "Sponsors",
		url: "/sponsors"
	},
	{
		id: "about",
		title: "About",
		url: "/about-us"
	},
	{
		id: "contact",
		title: "Contact",
		url: "/contact-us"
	}
];
var createCommitteeMember = ({ role, name, designation, affiliation, image = committee_placeholder_default, alt, isPlaceholder = false }) => ({
	role,
	name,
	designation,
	affiliation,
	image,
	alt: alt || `${name} portrait`,
	isPlaceholder
});
var normalizeCommitteeName = (name) => {
	const cleanedName = String(name !== null && name !== void 0 ? name : "").replace(/\s+/g, " ").trim();
	if (!cleanedName) return cleanedName;
	const toTitleCaseName = (value) => value.split(" ").map((word) => word.split(/([.'-])/).map((segment) => {
		if (!/^[A-Za-z]+$/.test(segment)) return segment;
		if (segment.length === 1) return segment.toUpperCase();
		return `${segment.charAt(0).toUpperCase()}${segment.slice(1).toLowerCase()}`;
	}).join("")).join(" ");
	return `Dr. ${toTitleCaseName(cleanedName.replace(/^dr\.?\s*/i, ""))}`;
};
var parseCommitteeMeta = (meta) => {
	return String(meta !== null && meta !== void 0 ? meta : "").replace(/\r/g, "").replace(/\s*Designation\s*:/gi, "\nDesignation: ").replace(/\s*Department\s*:/gi, "\nDepartment: ").split(/\n+/).map((line) => line.trim()).filter(Boolean).reduce((result, line) => {
		if (/^Designation:/i.test(line)) return {
			...result,
			designation: line.replace(/^Designation:/i, "").trim()
		};
		if (/^Department:/i.test(line)) return {
			...result,
			affiliation: line.replace(/^Department:/i, "").trim()
		};
		if (!result.designation) return {
			...result,
			designation: line
		};
		return {
			...result,
			affiliation: result.affiliation ? `${result.affiliation}, ${line}` : line
		};
	}, {
		designation: "",
		affiliation: ""
	});
};
var createCommitteeMemberFromCsv = (role, name, meta, image) => {
	const { designation, affiliation } = parseCommitteeMeta(meta);
	return createCommitteeMember({
		role,
		name: normalizeCommitteeName(name),
		designation,
		affiliation,
		image
	});
};
var createCommitteeSection = (title, role, rows, layout = "gallery") => ({
	title,
	layout,
	members: rows.map(([name, meta, image]) => createCommitteeMemberFromCsv(role, name, meta, image))
});
var siteContent = {
	brand: {
		acronym: "IConSCEPT 2026",
		shortName: "IConSCEPT 2026",
		fullName: "2026 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication",
		edition: "Fourth Edition",
		mode: "Hybrid Mode",
		dates: "December 17-18, 2026",
		venue: "National Institute of Technology Puducherry, Karaikal, India",
		hostInstitute: "National Institute of Technology Puducherry",
		hostCampus: "Karaikal, India",
		organizers: "Departments of EEE, ECE, and CSE",
		technicalSponsor: "IEEE Madras Section",
		publicationTarget: "All accepted and presented papers will be submitted to IEEE Xplore for publication.",
		logo: NITPY_default,
		heroFacts: [
			{
				label: "Edition",
				detail: "Fourth Edition"
			},
			{
				label: "Mode",
				detail: "Hybrid Mode"
			},
			{
				label: "Dates",
				detail: "December 17-18, 2026"
			},
			{
				label: "Venue",
				detail: "Karaikal, India"
			}
		],
		profile: [
			{
				label: "Host institute",
				detail: "National Institute of Technology Puducherry"
			},
			{
				label: "Organizing departments",
				detail: "EEE, ECE, and CSE"
			},
			{
				label: "Technical sponsor",
				detail: "IEEE Madras Section"
			},
			{
				label: "Publication",
				detail: "Submission to IEEE Xplore"
			}
		]
	},
	aboutParagraphs: [
		"The 2026 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication (IConSCEPT) is the premier fourth edition conference of NIT Puducherry, scheduled to be held in a hybrid mode at the National Institute of Technology Puducherry, Karaikal, India, during December 17-18, 2026.",
		"Following the successful conduct of the 2023, 2024, and 2025 editions which were published in IEEE Xplore, this edition is collectively organized by the Departments of EEE, ECE, and CSE with the IEEE Madras Section as the technical sponsor.",
		"The conference aims to bring together leading academicians, scientists, engineers, and researchers on a common platform to share and exchange knowledge in broad areas of interest including wireless communication, VLSI and embedded systems, power electronics, renewable energy, robotics, and artificial intelligence. All accepted and presented papers will be submitted to IEEE Xplore for publication, and the organizing committee invites prospective authors to submit original contributions to 2026 IConSCEPT."
	],
	highlights: [
		{
			title: "Signal and Communication Systems",
			text: "Contemporary contributions in signal processing, RF systems, antennas, microwave engineering, optical links, and intelligent communication architectures."
		},
		{
			title: "Electronics and Embedded Design",
			text: "Research spanning VLSI design, embedded platforms, hardware acceleration, sensor interfaces, edge intelligence, and real-time systems."
		},
		{
			title: "Power and Sustainable Infrastructure",
			text: "Power electronics, renewable energy systems, energy conversion, electric mobility, smart grids, and resilient infrastructure technologies."
		},
		{
			title: "AI, Robotics, and Computation",
			text: "Automation, robotics, data-driven decision systems, machine learning, modeling, and computational methods for engineering applications."
		}
	],
	tracks: [
		{
			title: "Communication",
			description: "Wireless communication, signal processing, antenna and microwave systems, optical communication, satellite links, and computation-driven RF methods."
		},
		{
			title: "Microelectronics and VLSI",
			description: "VLSI design, embedded platforms, real-time systems, sensor networks, IoT architectures, hardware for AI, and secure edge devices."
		},
		{
			title: "Energy Conservation Systems",
			description: "Power converters, renewable generation, storage systems, electric mobility, grid intelligence, power quality, and adaptive energy management."
		},
		{
			title: "Power Systems, Automation & Control",
			description: "Industrial automation, robotics, control systems, instrumentation, cyber-physical integration, and intelligent actuation for modern infrastructure."
		},
		{
			title: "Data Learning (AI/ML/DL)",
			description: "Artificial intelligence, machine learning, deep learning, data analytics, cloud and edge computing, and intelligent system design."
		},
		{
			title: "Data Computing",
			description: "Algorithms, modeling, simulation, and computing methods that support electronics, telecommunication, power, and interdisciplinary engineering research."
		}
	],
	submission: {
		scope: "Prospective authors are invited to submit original and unpublished contributions aligned with the conference themes of signal processing, computation, electronics, power, telecommunication, and related intelligent systems.",
		paperFormat: "Full-length papers should follow IEEE double-column formatting and be prepared in English.",
		paperLength: "The final author kit will confirm the page limit, camera-ready refinements, and final compliance checks for the 2026 edition.",
		portalStatus: "Use the author guidelines below to prepare your manuscript early. The official submission portal and 2026 author kit will be announced on this page as soon as they are released by the organizing committee.",
		authorGuidelines: [
			{
				title: "Submission readiness",
				detail: "Prepare original and unpublished work in IEEE double-column format, with title, author names, affiliations, contact details, references, figures, and PDF readability checked before upload."
			},
			{
				title: "Author experience",
				detail: "Submit a clean reviewer-ready PDF and keep author metadata consistent between the manuscript and the portal."
			},
			{
				title: "Registration fees",
				detail: "Author registration is mandatory for accepted papers. Fee slabs and payment updates are published on the registration page."
			},
			{
				title: "Language",
				detail: "All papers must be written in English with clear technical presentation, readable figures, and consistent formatting."
			},
			{
				title: "Plagiarism notice",
				detail: "Submissions must be original and may be screened for plagiarism or significant overlap before review or publication."
			},
			{
				title: "Attendance expectation",
				detail: "At least one author of each accepted paper is expected to register and present the work during the conference."
			},
			{
				title: "Submission updates",
				detail: "The official submission link, camera-ready instructions, copyright details, and metadata requirements will be announced on the website with the final author kit."
			},
			{
				title: "Publication compliance",
				detail: "IConSCEPT 2026 currently follows an IEEE publication pathway, so final accepted papers must follow the official camera-ready and copyright instructions released by the conference."
			}
		],
		authorGuidanceNote: "Use the call-for-papers page for templates and the registration page for fee details. Do not rely on Springer-style or third-party instructions unless the organizing committee officially announces a different publication workflow."
	},
	publication: {
		overview: "All accepted and presented papers of IConSCEPT 2026 will be submitted to IEEE Xplore for publication, subject to IEEE policies and conference compliance requirements.",
		continuity: "The previous editions of the conference series were published in IEEE Xplore, and the 2026 edition continues that publication pathway.",
		workflow: [
			{
				title: "Peer review",
				text: "Each submission will undergo review for originality, technical merit, clarity, and relevance to the conference scope."
			},
			{
				title: "Camera-ready preparation",
				text: "Accepted papers must be revised and formatted in accordance with the final author instructions issued by the conference."
			},
			{
				title: "Registration and presentation",
				text: "At least one author of each accepted paper must complete registration and present the work during the conference."
			},
			{
				title: "IEEE Xplore submission",
				text: "Eligible accepted papers that are registered and presented will be submitted to IEEE Xplore after conference completion."
			}
		],
		notes: [
			"Final author kit will be announced in due course.",
			"IEEE copyright and metadata instructions will accompany the camera-ready guidelines.",
			"Publication remains subject to IEEE review policies and technical compliance."
		]
	},
	guidelines: {
		intro: "Author guidance, publication instructions, and final paper requirements for IConSCEPT 2026 are consolidated on this page.",
		authorGuidelines: [
			{
				title: "Originality",
				detail: "Only original technical papers that are not published or under review elsewhere should be submitted."
			},
			{
				title: "Language",
				detail: "All manuscripts must be written in English with clear technical presentation and readable figures."
			},
			{
				title: "Plagiarism",
				detail: "Similarity should remain within 15%, and submissions may be screened for overlap before review or publication."
			},
			{
				title: "Registration",
				detail: "At least one author of every accepted paper must complete a full registration for the paper to remain eligible for the conference proceedings."
			}
		],
		publicationGuidelines: [
			{
				title: "Pages",
				detail: "Full-length research papers should normally be prepared within the conference page limit, with up to 2 additional pages only if permitted in the final author instructions."
			},
			{
				title: "Format and font",
				detail: "Manuscripts must follow the IEEE double-column format and be submitted as a properly readable PDF.",
				templates: [{
					label: "Paper Template (MS Word)",
					href: "/IConSECPT-2026_Final_conference-template-A4.docx"
				}, {
					label: "Paper Template (LaTeX)",
					href: "/IEEE-LaTex-IconSECPT-2026.zip"
				}]
			},
			{
				title: "Submission portal",
				detail: "Microsoft CMT submission link coming shortly."
			},
			{
				title: "How to submit",
				detail: "Authors should complete the submission metadata carefully and upload the manuscript through Microsoft CMT once the portal is announced."
			}
		],
		publicationRequirementsIntro: "For accepted papers to be included in the conference proceedings and considered for inclusion in the IEEE Xplore® Digital Library, the following conditions must be met by the specified deadline:",
		publicationRequirements: [
			"Submission of the final version of the paper.",
			"Transfer of copyright to IEEE.",
			"At least one author must register for the conference with a full registration.",
			"The paper must be presented at the conference."
		],
		publicationRequirementsClosing: "Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.",
		cmtNotice: "The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support. "
	},
	importantDates2026: [
		{
			label: "Conference dates",
			value: "December 17-18, 2026",
			status: "Confirmed"
		},
		{
			label: "Call for papers release",
			value: "To be announced",
			status: "Awaited"
		},
		{
			label: "Last date for paper submission",
			value: "21.07.2026",
			status: "Confirmed"
		},
		{
			label: "Notification of acceptance",
			value: "06.10.2026",
			status: "Confirmed"
		},
		{
			label: "Final (Camera-ready) paper submission",
			value: "03.11.2026",
			status: "Confirmed"
		},
		{
			label: "Early bird registration deadline",
			value: "To be announced",
			status: "Awaited"
		},
		{
			label: "Author registration deadline",
			value: "To be announced",
			status: "Awaited"
		},
		{
			label: "Non-author registration deadline",
			value: "To be announced",
			status: "Awaited"
		}
	],
	registration: {
		notice: "The registration fee schedule below reflects the fee structure for the 2026 edition.",
		portalText: "The online registration portal and payment instructions will be announced on this website once released by the organizing committee.",
		indian: [
			{
				category: "Student author",
				earlyIEEE: "INR 8,000",
				earlyNonIEEE: "INR 9,000",
				standardIEEE: "INR 9,000",
				standardNonIEEE: "INR 10,000"
			},
			{
				category: "Academia author",
				earlyIEEE: "INR 9,000",
				earlyNonIEEE: "INR 10,000",
				standardIEEE: "INR 10,000",
				standardNonIEEE: "INR 11,000"
			},
			{
				category: "Industry author",
				earlyIEEE: "INR 10,000",
				earlyNonIEEE: "INR 11,000",
				standardIEEE: "INR 11,000",
				standardNonIEEE: "INR 12,000"
			},
			{
				category: "Non-author attendee",
				earlyIEEE: "INR 1,500",
				earlyNonIEEE: "INR 2,000",
				standardIEEE: "INR 1,500",
				standardNonIEEE: "INR 2,000"
			}
		],
		foreign: [
			{
				category: "Student author",
				earlyIEEE: "USD 100",
				earlyNonIEEE: "USD 150",
				standardIEEE: "USD 150",
				standardNonIEEE: "USD 200"
			},
			{
				category: "Academia author",
				earlyIEEE: "USD 150",
				earlyNonIEEE: "USD 200",
				standardIEEE: "USD 200",
				standardNonIEEE: "USD 250"
			},
			{
				category: "Industry author",
				earlyIEEE: "USD 200",
				earlyNonIEEE: "USD 250",
				standardIEEE: "USD 250",
				standardNonIEEE: "USD 300"
			},
			{
				category: "Non-author attendee",
				earlyIEEE: "USD 40",
				earlyNonIEEE: "USD 50",
				standardIEEE: "USD 40",
				standardNonIEEE: "USD 50"
			}
		],
		notes: [
			"Registration fee includes GST.",
			"Payment instructions will be published with the registration portal.",
			"Participants are advised to rely only on information published on the official conference website."
		],
		priceSheet: price_default
	},
	contacts: [{
		label: "General queries",
		type: "email",
		value: "iconscept@nitpy.ac.in",
		href: "mailto:iconscept@nitpy.ac.in"
	}, {
		label: "Phone coordination",
		type: "phone",
		people: [{
			name: "Vijaya Kumar K",
			value: "+91 9566453837",
			href: "tel:+919566453837"
		}, {
			name: "Priyadharshini R",
			value: "+91 7604900332",
			href: "tel:+917604900332"
		}]
	}],
	committeePage: {
		placeholderImage: committee_placeholder_default,
		intro: {
			tag: "Committees",
			title: "Leadership and committee structure for IConSCEPT 2026",
			text: "The conference committee brings together institutional leadership and organizing teams from ECE, EEE, and CSE responsible for the academic direction, publication workflow, publicity, sponsorship, registration, and hospitality for IConSCEPT 2026."
		},
		featuredMembers: [createCommitteeMemberFromCsv("Chief Patron", "Dr. Makarand Madhao Ghangrekar", `Director

NIT Puducherry`, "https://www.nitpy.ac.in/assets/images/faculties/admin/Director.jpg"), createCommitteeMemberFromCsv("Patron", "Dr. Sundaravarathan S", `Designation : Registrar

Department : NIT Puducherry`, "https://nitpy.ac.in/assets/images/faculties/admin/Sundaravarathan.jpg")],
		sections: [
			createCommitteeSection("Conference Chairs", "Conference Chair", [[
				"Dr. ANIRUDDHA KANHE",
				`Designation: Associate Professor

Department: Head of Department
Electronics & Communication Engineering`,
				"https://research.nitpy.ac.in/profile/photo/21/"
			], [
				"Dr. SURESH BALANETHIRAM",
				`Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
				"https://research.nitpy.ac.in/profile/photo/97/"
			]], "spotlight"),
			createCommitteeSection("Technical Program Chairs", "Technical Program Chair", [
				[
					"Dr. Lakshmi Sutha G",
					`Designation: Professor

Department: Electronics & Communication Engineering`,
					"https://research.nitpy.ac.in/profile/photo/30/"
				],
				[
					"Dr. Vinopraba. T",
					`Designation: Professor & Head

Department: Electrical & Electronics Engineering`,
					"https://research.nitpy.ac.in/profile/photo/1002/"
				],
				[
					"Dr. Venkatesan M",
					`Designation: Associate Professor & Head

Department: Computer Science & Engineering`,
					"https://research.nitpy.ac.in/profile/photo/105/"
				]
			]),
			createCommitteeSection("Publication Chairs", "Publication Chair", [
				[
					"Dr. YEDUKONDALA RAO VEERANKI",
					`Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
					"https://research.nitpy.ac.in/profile/photo/155/"
				],
				[
					"Hemachander Allamsetty",
					`Designation: Assistant Professor

Department: Electrical & Electronics Engineering`,
					"https://research.nitpy.ac.in/profile/photo/86/"
				],
				[
					"Dr. Kumaran P",
					`Designation: Assistant Professor

Department: Computer Science & Engineering`,
					"https://research.nitpy.ac.in/profile/photo/94/"
				]
			]),
			createCommitteeSection("Financial Chair", "Financial Chair", [[
				"Dr. SURENDAR M",
				`Designation: Associate Professor

Department: Electronics & Communication Engineering`,
				"https://research.nitpy.ac.in/profile/photo/55/"
			]]),
			createCommitteeSection("Keynote / Tutorial / Session Chairs", "Keynote/Tutorial/Session Chair", [
				[
					"Dr. HARIGOVINDAN V P",
					`Designation: Professor

Department: Electronics & Communication Engineering`,
					"https://research.nitpy.ac.in/profile/photo/7/"
				],
				[
					"Thangavel Subbaiyan",
					`Designation: Professor

Department: Electrical & Electronics Engineering`,
					"https://research.nitpy.ac.in/profile/photo/50/"
				],
				[
					"G Koperundevi",
					`Designation: Professor

Department: Electrical & Electronics Engineering`,
					"https://research.nitpy.ac.in/profile/photo/14/"
				],
				[
					"Dr. Surendiran B",
					`Designation: Professor

Department: Computer Science & Engineering`,
					"https://research.nitpy.ac.in/profile/photo/27/"
				],
				[
					"Dr. Narendran Rajagopalan",
					`Designation: Professor

Department: Computer Science & Engineering`,
					"https://research.nitpy.ac.in/profile/photo/16/"
				],
				[
					"Dr. BOOPATHI RANI R",
					`Designation: Associate Professor

Department: Electronics & Communication Engineering`,
					"https://research.nitpy.ac.in/profile/photo/10/"
				],
				[
					"Dr. R MURUGAN",
					`Designation: Associate Professor

Department: Electronics & Communication Engineering`,
					"https://research.nitpy.ac.in/profile/photo/25596602/"
				],
				[
					"Venkadesan Arunachalam",
					`Designation: Professor

Department: Electrical & Electronics Engineering`,
					"https://research.nitpy.ac.in/profile/photo/26/"
				],
				[
					"Dr. Sanjay Bankapur",
					`Designation: Assistant Professor

Department: Computer Science & Engineering`,
					"https://research.nitpy.ac.in/profile/photo/90/"
				]
			]),
			createCommitteeSection("Publicity Chairs", "Publicity Chair", [
				[
					"Dr. THOMAS JOSEPH",
					`Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
					"https://research.nitpy.ac.in/profile/photo/93/"
				],
				[
					"Dr. Praveen R",
					`Designation: Assistant Professor

Department: Computer Science & Engineering`,
					"https://research.nitpy.ac.in/profile/photo/1000015/"
				],
				[
					"Ram Jethmalani Chinnasamy Hemparuva",
					`Designation: Assistant Professor

Department: Electrical & Electronics Engineering`,
					"https://research.nitpy.ac.in/profile/photo/84/"
				]
			]),
			createCommitteeSection("Sponsorship Chairs", "Sponsorship Chair", [
				[
					"Dr. MALAYA KUMAR NATH",
					`Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
					"https://research.nitpy.ac.in/profile/photo/15/"
				],
				[
					"Navin Sam K",
					`Designation: Associate Professor

Department: Electrical & Electronics Engineering`,
					"https://research.nitpy.ac.in/profile/photo/48/"
				],
				[
					"Dr. Vani V",
					`Designation: Assistant Professor

Department: Computer Science & Engineering`,
					"https://research.nitpy.ac.in/profile/photo/112/"
				]
			]),
			createCommitteeSection("Registration Chairs", "Registration Chair", [
				[
					"Dr. KULEEN KUMAR",
					`Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
					"https://research.nitpy.ac.in/profile/photo/165/"
				],
				[
					"Gowrishankar S",
					`Designation: Assistant Professor

Department: Electrical & Electronics Engineering`,
					"https://research.nitpy.ac.in/profile/photo/126/"
				],
				[
					"Dr. Karthik N",
					`Designation: Assistant Professor

Department: Computer Science & Engineering`,
					"https://research.nitpy.ac.in/profile/photo/119/"
				]
			]),
			createCommitteeSection("Hospitality Chairs", "Hospitality Chair", [
				[
					"Dr. SUNANDA AMBULKER",
					`Designation: Assistant Professor

Department: Electronics & Communication Engineering`,
					"https://research.nitpy.ac.in/profile/photo/92/"
				],
				[
					"Saravana Prakash P",
					"Designation: Assistant Professor Department: Electrical & Electronics Engineering",
					"https://research.nitpy.ac.in/profile/photo/166/"
				],
				[
					"Dr. Ansuman Mahapatra",
					`Designation: Associate Professor

Department: Computer Science & Engineering`,
					"https://research.nitpy.ac.in/profile/photo/49/"
				]
			])
		],
		technicalProgramCommittee: null
	},
	sponsorsPage: {
		intro: {
			tag: "Sponsors and Partners",
			title: "Technical sponsorship and collaboration opportunities",
			text: "IConSCEPT 2026 is supported by institutional leadership at NIT Puducherry and welcomes collaboration from technical sponsors, academic partners, industry organizations, and exhibitors."
		},
		technicalSponsor: {
			name: "IEEE Madras Section",
			role: "Technical Sponsor",
			status: "Confirmed",
			logo: ieee_logo_icon_default,
			alt: "IEEE Madras Section logo",
			description: "IEEE Madras Section is the confirmed technical sponsor for IConSCEPT 2026 and supports the conference’s academic and publication framework."
		},
		institutionalSupport: [
			{
				title: "Host Institute",
				value: "National Institute of Technology Puducherry"
			},
			{
				title: "Organizing Departments",
				value: "Departments of EEE, ECE, and CSE"
			},
			{
				title: "Conference Venue",
				value: "Karaikal, India"
			}
		],
		opportunityTracks: [
			{
				title: "Academic Partners",
				status: "Open",
				text: "Universities, research groups, and professional communities can collaborate through knowledge partnerships and outreach support."
			},
			{
				title: "Industry Sponsors",
				status: "Open",
				text: "Organizations can support the conference through branding, technical engagement, student outreach, and session participation."
			},
			{
				title: "Exhibition Partners",
				status: "Open",
				text: "Technology exhibitors and innovation-focused organizations can connect with attendees through showcase and engagement opportunities."
			},
			{
				title: "Institutional Collaborators",
				status: "Open",
				text: "Professional bodies, incubators, and innovation cells can partner on visibility, participation, and conference ecosystem activities."
			}
		],
		featuredBenefits: [
			"Visibility on the official conference website and communication materials",
			"Association with a national conference hosted at NIT Puducherry",
			"Access to academic, research, and industry participants",
			"Opportunities for technical engagement and institutional branding"
		],
		contact: {
			label: "Sponsorship and partnerships",
			value: "nitpy.iconscept@gmail.com",
			href: "mailto:nitpy.iconscept@gmail.com",
			note: "Write to the sponsorship desk for partnership discussions, support categories, branding opportunities, and collaboration details."
		}
	},
	sponsorNotes: ["IEEE Madras Section is the technical sponsor for IConSCEPT 2026.", "Additional sponsors, exhibitors, and institutional partners will be announced in due course."]
};
//#endregion
//#region app/components/layout/Header.jsx
var desktopNavLink = "whitespace-nowrap rounded-full border px-3 py-2 text-[0.67rem] font-medium uppercase tracking-[0.14em] transition-all duration-200 ease-smooth 2xl:text-[0.71rem]";
var mobileNavLink = "rounded-[1rem] border px-4 py-3 text-[0.76rem] font-medium uppercase tracking-[0.18em] transition-all duration-200 ease-smooth";
function Header() {
	const location = useLocation();
	const [mobileOpen, setMobileOpen] = useState(false);
	const isHome = location.pathname === "/";
	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === "Escape") setMobileOpen(false);
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, []);
	useEffect(() => {
		setMobileOpen(false);
	}, [location.pathname]);
	return /* @__PURE__ */ jsx("header", {
		className: ["fixed inset-x-0 top-0 z-50", isHome ? "border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,10,16,0.96)_0%,rgba(7,10,16,0.78)_60%,rgba(7,10,16,0.16)_100%)] backdrop-blur-sm" : "border-b border-light-divider/80 bg-light-pb"].join(" "),
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-[92rem]",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid items-center gap-4 px-5 py-3 md:px-6 xl:grid-cols-[auto,minmax(0,1fr),auto]",
				children: [
					/* @__PURE__ */ jsx(NavLink, {
						to: "/",
						className: "flex min-w-0 items-center gap-3 xl:max-w-[15rem] 2xl:max-w-[16.5rem]",
						onClick: () => setMobileOpen(false),
						children: /* @__PURE__ */ jsx("span", {
							className: ["flex shrink-0 items-center justify-center rounded-full border px-3 py-2 transition-all duration-200 ease-smooth", isHome ? "border-[#9fe3ff]/45 bg-[linear-gradient(180deg,rgba(248,252,255,0.96)_0%,rgba(232,242,248,0.9)_100%)] shadow-[0_12px_30px_rgba(6,18,28,0.24)]" : "border-primary-400/60 bg-[linear-gradient(180deg,#fbfdff_0%,#eef6fb_100%)] shadow-[0_12px_30px_rgba(15,23,42,0.08)]"].join(" "),
							children: /* @__PURE__ */ jsx("img", {
								src: IConSECPT_default,
								alt: "IConSCEPT 2026 logo",
								className: "h-12 w-auto object-contain md:h-[3.15rem]"
							})
						})
					}),
					/* @__PURE__ */ jsx("nav", {
						className: "hidden min-w-0 items-center justify-center gap-3 xl:flex 2xl:gap-5",
						children: navLinks.map(({ id, title, url }) => /* @__PURE__ */ jsx(NavLink, {
							to: url,
							end: true,
							className: ({ isActive }) => [desktopNavLink, isActive ? isHome ? "border-[#9fe3ff]/45 bg-[rgba(159,227,255,0.14)] text-[#f4fbff] shadow-[0_12px_30px_rgba(6,18,28,0.18)]" : "border-primary-400/60 bg-light-altBg text-primary-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)]" : isHome ? "border-transparent text-white hover:border-white/12 hover:bg-white/8 hover:text-[#9fe3ff]" : "border-transparent text-light-muted hover:border-light-divider/80 hover:bg-light-sb hover:text-light-pt"].join(" "),
							children: id === "contact" ? "CONTACT US" : title
						}, id))
					}),
					/* @__PURE__ */ jsx("div", {
						className: "ml-auto flex items-center justify-end gap-2 xl:ml-0",
						children: /* @__PURE__ */ jsx("button", {
							onClick: () => setMobileOpen((open) => !open),
							"aria-label": "Toggle navigation",
							"aria-expanded": mobileOpen,
							className: ["p-2.5 transition-colors xl:hidden", isHome ? "text-white hover:text-[#9fe3ff]" : "text-light-pt hover:text-primary-600"].join(" "),
							children: mobileOpen ? /* @__PURE__ */ jsx(XIcon, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(MenuIcon, { className: "h-4 w-4" })
						})
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: ["grid overflow-hidden transition-all duration-200 ease-smooth xl:hidden", mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"].join(" "),
				children: /* @__PURE__ */ jsx("div", {
					className: ["overflow-hidden px-5 pb-4 pt-2", isHome ? "border-t border-white/10 bg-[rgba(8,12,18,0.96)] backdrop-blur-sm" : "bg-light-pb"].join(" "),
					children: /* @__PURE__ */ jsx("nav", {
						className: "flex flex-col gap-2",
						children: navLinks.map(({ id, title, url }) => /* @__PURE__ */ jsx(NavLink, {
							to: url,
							end: true,
							onClick: () => setMobileOpen(false),
							className: ({ isActive }) => [mobileNavLink, isActive ? isHome ? "border-[#9fe3ff]/35 bg-[rgba(159,227,255,0.12)] text-[#9fe3ff]" : "border-primary-400/45 bg-light-altBg text-primary-700" : isHome ? "border-white/10 text-white hover:border-white/16 hover:bg-white/6 hover:text-[#9fe3ff]" : "border-light-divider/70 text-light-pt hover:border-primary-300/50 hover:bg-light-sb hover:text-primary-600"].join(" "),
							children: id === "contact" ? "CONTACT US" : title
						}, id))
					})
				})
			})]
		})
	});
}
//#endregion
//#region app/components/common/Section.jsx
var Section = ({ className = "", id, customPaddings, children, reveal = true, ...props }) => {
	return /* @__PURE__ */ jsx("section", {
		id,
		...props,
		className: [
			"relative",
			customPaddings || "py-18 md:py-22 lg:py-26",
			className
		].filter(Boolean).join(" "),
		children
	});
};
//#endregion
//#region app/components/common/MotionReveal.jsx
function MotionReveal({ as = "div", children, className = "", delay = 0, ...props }) {
	return createElement(as, {
		className,
		...props
	}, children);
}
//#endregion
//#region app/components/layout/Footer.jsx
var quickLinks = [{
	id: "home",
	label: "Home",
	to: "/"
}, ...navLinks.filter((link) => [
	"/about-us",
	"/call-for-papers",
	"/important-dates",
	"/registration",
	"/contact-us"
].includes(link.url)).map((link) => ({
	id: link.id,
	label: link.title,
	to: link.url
}))];
var Footer = () => {
	return /* @__PURE__ */ jsx(Section, {
		className: "border-t border-light-divider/80 !py-14 md:!py-16",
		role: "contentinfo",
		"aria-labelledby": "footer-heading",
		reveal: false,
		children: /* @__PURE__ */ jsx("div", {
			className: "container",
			children: /* @__PURE__ */ jsxs(MotionReveal, {
				className: "py-2",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "grid items-start gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.8fr)_minmax(0,0.9fr)] lg:gap-12",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "max-w-lg",
							children: [
								/* @__PURE__ */ jsx("h2", {
									id: "footer-heading",
									className: "sr-only",
									children: "Footer"
								}),
								/* @__PURE__ */ jsx("p", {
									className: "site-eyebrow",
									children: "IConSCEPT 2026"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-5 space-y-2.5 text-sm leading-7 text-light-st",
									children: [
										/* @__PURE__ */ jsxs("p", { children: [
											"Hosted by ",
											siteContent.brand.hostInstitute,
											", ",
											siteContent.brand.hostCampus,
											"."
										] }),
										/* @__PURE__ */ jsxs("p", { children: [
											"Organized by the ",
											siteContent.brand.organizers,
											"."
										] }),
										/* @__PURE__ */ jsxs("p", { children: [
											"Technical sponsor: ",
											siteContent.brand.technicalSponsor,
											"."
										] })
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs("nav", {
							className: "flex flex-col gap-3 self-start",
							"aria-label": "Footer navigation",
							children: [/* @__PURE__ */ jsx("p", {
								className: "site-eyebrow",
								children: "Navigation"
							}), quickLinks.map((link) => /* @__PURE__ */ jsx(NavLink, {
								to: link.to,
								end: true,
								className: ({ isActive }) => ["text-sm transition-colors", isActive ? "text-primary-600" : "text-light-st hover:text-light-pt"].join(" "),
								children: link.label
							}, link.id))]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex max-w-sm flex-col gap-3 self-start",
							children: [/* @__PURE__ */ jsx("p", {
								className: "site-eyebrow",
								children: "Contact"
							}), siteContent.contacts.slice(0, 1).map((contact) => /* @__PURE__ */ jsx("a", {
								href: contact.href,
								className: "text-sm text-light-st transition-colors hover:text-light-pt",
								children: contact.value
							}, contact.label))]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-8 border-t border-light-divider/80 pt-5 text-sm text-light-st",
					children: [
						"Copyright © ",
						siteContent.brand.shortName,
						". All rights reserved."
					]
				})]
			})
		})
	});
};
//#endregion
//#region app/components/layout/SiteBackground.jsx
var SiteBackground = memo(function SiteBackground() {
	return /* @__PURE__ */ jsx("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden",
		children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(232,215,189,0.62),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(245,236,224,0.82),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(247,244,238,0.72))]" })
	});
});
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	default: () => root_default,
	links: () => links,
	meta: () => meta$11
});
function links() {
	return [
		{
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
		},
		{
			rel: "icon",
			type: "image/svg+xml",
			href: "/conference.svg"
		},
		{
			rel: "canonical",
			href: "https://www.iconscept.in/"
		}
	];
}
function meta$11() {
	return [
		{ charset: "utf-8" },
		{
			name: "viewport",
			content: "width=device-width, initial-scale=1.0"
		},
		{ title: "IConSCEPT 2026 | NIT Puducherry" },
		{
			name: "description",
			content: "Official website of IConSCEPT 2026, the 2026 International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication at NIT Puducherry, Karaikal, India."
		},
		{
			name: "keywords",
			content: "IConSCEPT 2026, NIT Puducherry conference, signal processing conference, electronics conference, power conference, telecommunication conference, IEEE Madras Section"
		},
		{
			name: "author",
			content: "IConSCEPT 2026 Organizing Committee"
		},
		{
			name: "robots",
			content: "index, follow"
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:url",
			content: "https://www.iconscept.in/"
		},
		{
			property: "og:title",
			content: "IConSCEPT 2026 | NIT Puducherry"
		},
		{
			property: "og:description",
			content: "Fourth edition of the International Conference on Signal Processing, Computation, Electronics, Power and Telecommunication at NIT Puducherry."
		},
		{
			property: "og:image",
			content: ""
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:url",
			content: "https://www.iconscept.in/"
		},
		{
			name: "twitter:title",
			content: "IConSCEPT 2026 | NIT Puducherry"
		},
		{
			name: "twitter:description",
			content: "Official website for IConSCEPT 2026 at NIT Puducherry, Karaikal, India."
		},
		{
			name: "twitter:image",
			content: ""
		}
	];
}
var root_default = UNSAFE_withComponentProps(function Root() {
	const isHome = useLocation().pathname === "/";
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [/* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative min-h-screen overflow-x-clip",
				children: [/* @__PURE__ */ jsx(SiteBackground, {}), /* @__PURE__ */ jsxs("div", {
					className: "relative z-10",
					children: [
						/* @__PURE__ */ jsx(Header, {}),
						/* @__PURE__ */ jsx("div", {
							className: isHome ? "" : "pt-28 md:pt-32",
							children: /* @__PURE__ */ jsx(Outlet, {})
						}),
						/* @__PURE__ */ jsx(Footer, {})
					]
				})]
			}),
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
});
//#endregion
//#region app/assets/images/hero.jpeg
var hero_default = "/assets/hero-C-SX0nYP.jpeg";
//#endregion
//#region app/pages/Home.jsx
var CONFERENCE_START = "2026-12-17T00:00:00+05:30";
var CONFERENCE_END = "2026-12-18T23:59:59+05:30";
var HERO_TICKER_ITEMS = [{
	label: "Venue",
	value: "NIT Puducherry, Karaikal, UT of Puducherry, India"
}];
var HERO_ORGANIZER_UNITS = [
	"Department of ECE",
	"Department of EEE",
	"Department of CSE"
];
var HERO_SUPPORT_PANEL = "flex h-full flex-col justify-between rounded-[1.3rem] border border-white/10 bg-[rgba(8,12,18,0.46)] px-5 py-5 backdrop-blur-sm md:px-6";
var HERO_SUPPORT_HEADING = "text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-[#8fc6d8]";
var HERO_SUPPORT_TEXT = "text-[0.9rem] font-medium leading-6 text-[#d7e4eb]";
var HOME_ANNOUNCEMENTS = [
	"Important notifications can be posted here.",
	"Submission updates will be published on the official conference website.",
	"Registration and camera-ready instructions will be announced soon."
];
var HOME_QUICK_INFO = [
	{
		icon: OfficeBuildingIcon,
		text: "NIT Puducherry"
	},
	{
		icon: LocationMarkerIcon,
		text: "Karaikal, India"
	},
	{
		icon: CalendarIcon,
		text: "December 17-18, 2026"
	}
];
var HOME_IMPORTANT_DATES = siteContent.importantDates2026.filter(({ label }) => [
	"Last date for paper submission",
	"Notification of acceptance",
	"Final (Camera-ready) paper submission"
].includes(label));
var HOME_CONFERENCE_TRACKS = [
	{
		id: "Track-1",
		title: "Communication"
	},
	{
		id: "Track-2",
		title: "Microelectronics and VLSI"
	},
	{
		id: "Track-3",
		title: "Energy Conservation Systems"
	},
	{
		id: "Track-4",
		title: "Power Systems, Automation and Control"
	},
	{
		id: "Track-5",
		title: "Data Learning (AI/ML/DL)"
	},
	{
		id: "Track-6",
		title: "Data Computing"
	}
];
function getOrdinalSuffix(day) {
	const remainder = day % 100;
	if (remainder >= 11 && remainder <= 13) return "th";
	switch (day % 10) {
		case 1: return "st";
		case 2: return "nd";
		case 3: return "rd";
		default: return "th";
	}
}
function getHeroDateCard(startDate, endDate) {
	const start = new Date(startDate);
	const end = new Date(endDate);
	if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return {
		startDay: "--",
		startSuffix: "",
		endDay: "--",
		endSuffix: "",
		month: "DECEMBER",
		year: "2026"
	};
	return {
		startDay: start.getDate(),
		startSuffix: getOrdinalSuffix(start.getDate()),
		endDay: end.getDate(),
		endSuffix: getOrdinalSuffix(end.getDate()),
		month: new Intl.DateTimeFormat("en-IN", { month: "long" }).format(start).toUpperCase(),
		year: new Intl.DateTimeFormat("en-IN", { year: "numeric" }).format(start)
	};
}
var HERO_DATE_CARD = getHeroDateCard(CONFERENCE_START, CONFERENCE_END);
var DateOrdinal = ({ day, suffix }) => /* @__PURE__ */ jsxs("span", {
	className: "inline-flex items-start",
	children: [/* @__PURE__ */ jsx("span", { children: day }), suffix ? /* @__PURE__ */ jsx("sup", {
		className: "ml-0.5 text-[0.42em] font-semibold leading-none",
		children: suffix
	}) : null]
});
function getCountdownParts(targetDate) {
	const target = new Date(targetDate).getTime();
	if (Number.isNaN(target)) return {
		days: "--",
		hours: "--",
		minutes: "--",
		seconds: "--"
	};
	const diff = Math.max(target - Date.now(), 0);
	const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
	const hours = Math.floor(diff / (1e3 * 60 * 60) % 24);
	const minutes = Math.floor(diff / (1e3 * 60) % 60);
	const seconds = Math.floor(diff / 1e3 % 60);
	return {
		days: String(days).padStart(2, "0"),
		hours: String(hours).padStart(2, "0"),
		minutes: String(minutes).padStart(2, "0"),
		seconds: String(seconds).padStart(2, "0")
	};
}
function useCountdown(targetDate) {
	const [parts, setParts] = useState(() => getCountdownParts(targetDate));
	useEffect(() => {
		setParts(getCountdownParts(targetDate));
		const id = window.setInterval(() => {
			setParts(getCountdownParts(targetDate));
		}, 1e3);
		return () => window.clearInterval(id);
	}, [targetDate]);
	return parts;
}
var CountdownGrid = memo(function CountdownGrid({ compact = false, inverse = false }) {
	const countdown = useCountdown(CONFERENCE_START);
	const countdownItems = [
		{
			label: "Days",
			value: countdown.days
		},
		{
			label: "Hours",
			value: countdown.hours
		},
		{
			label: "Minutes",
			value: countdown.minutes
		},
		{
			label: "Seconds",
			value: countdown.seconds
		}
	];
	return /* @__PURE__ */ jsx("div", {
		className: compact ? "grid grid-cols-4 gap-3" : "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
		children: countdownItems.map((item) => /* @__PURE__ */ jsxs("div", {
			className: compact ? "min-w-0 rounded-[0.9rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-2.5 py-3 text-center" : "rounded-[1.2rem] border border-light-divider/80 bg-light-sb/75 px-4 py-4 text-left",
			children: [/* @__PURE__ */ jsx("p", {
				className: compact ? ["tabular-nums text-[1rem] font-semibold leading-none tracking-tight md:text-[1.25rem]", inverse ? "text-[#f3fbff]" : "text-light-pt"].join(" ") : "tabular-nums text-[clamp(1.8rem,3vw,2.4rem)] font-semibold leading-none tracking-tight text-light-pt",
				children: item.value
			}), /* @__PURE__ */ jsx("p", {
				className: compact ? ["mt-2 text-[0.5rem] font-semibold uppercase tracking-[0.18em]", inverse ? "text-[#8fc6d8]" : "text-light-st"].join(" ") : "mt-3 text-[0.64rem] font-code uppercase tracking-[0.26em] text-light-muted",
				children: item.label
			})]
		}, item.label))
	});
});
function Home() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(Section, {
			id: "home-hero",
			className: "overflow-hidden",
			customPaddings: "py-0",
			"aria-labelledby": "home-hero-heading",
			reveal: false,
			children: /* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden border-b border-light-divider/80",
				children: [
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "absolute inset-0",
						children: /* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 bg-cover bg-center",
							style: {
								backgroundImage: `url(${hero_default})`,
								backgroundPosition: "center 55%"
							}
						})
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "absolute inset-0 bg-[linear-gradient(98deg,rgba(5,8,14,0.76)_0%,rgba(5,8,14,0.58)_34%,rgba(5,8,14,0.34)_62%,rgba(5,8,14,0.42)_100%),linear-gradient(180deg,rgba(5,8,14,0.28)_0%,rgba(5,8,14,0.1)_28%,rgba(5,8,14,0.5)_100%)]"
					}),
					/* @__PURE__ */ jsx("div", {
						"aria-hidden": "true",
						className: "absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_26%_34%,rgba(8,12,18,0.12)_0%,rgba(8,12,18,0.56)_38%,rgba(8,12,18,0)_72%)]"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "container relative z-10",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex min-h-[31rem] flex-col pb-4 pt-20 md:min-h-[35rem] md:pb-8 md:pt-24 lg:min-h-[39rem] lg:pb-10 lg:pt-[7.15rem]",
							children: /* @__PURE__ */ jsxs("div", {
								className: "mx-auto flex w-full max-w-[64rem] flex-1 flex-col",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex flex-1 items-center",
									children: /* @__PURE__ */ jsxs("div", {
										className: "grid w-full gap-7 md:grid-cols-[9.5rem,minmax(0,1fr)] md:items-center lg:grid-cols-[10.25rem,minmax(0,1fr)] lg:gap-9",
										children: [/* @__PURE__ */ jsxs(MotionReveal, {
											as: "div",
											delay: .08,
											className: "w-full max-w-[9.5rem] self-center rounded-[1.3rem] border border-white/10 bg-[rgba(8,12,18,0.46)] px-4 py-4 text-white backdrop-blur-sm md:max-w-[10.25rem] md:px-5 md:py-5",
											children: [
												/* @__PURE__ */ jsxs("p", {
													className: "flex flex-wrap items-start gap-2 text-[1.25rem] font-semibold tracking-[-0.04em] text-[#f2fbff] md:text-[1.55rem]",
													children: [
														/* @__PURE__ */ jsx(DateOrdinal, {
															day: HERO_DATE_CARD.startDay,
															suffix: HERO_DATE_CARD.startSuffix
														}),
														/* @__PURE__ */ jsx("span", {
															className: "text-white/56",
															children: "-"
														}),
														/* @__PURE__ */ jsx(DateOrdinal, {
															day: HERO_DATE_CARD.endDay,
															suffix: HERO_DATE_CARD.endSuffix
														})
													]
												}),
												/* @__PURE__ */ jsx("div", { className: "mt-4 h-px w-full bg-white/10" }),
												/* @__PURE__ */ jsx("p", {
													className: "mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#8fc6d8] md:text-[0.86rem]",
													children: HERO_DATE_CARD.month
												}),
												/* @__PURE__ */ jsx("p", {
													className: "mt-2 text-[1.5rem] font-semibold leading-none tracking-[-0.04em] text-[#f6fcff] md:text-[1.9rem]",
													children: HERO_DATE_CARD.year
												})
											]
										}), /* @__PURE__ */ jsxs("div", {
											className: "max-w-[35rem]",
											children: [/* @__PURE__ */ jsx(MotionReveal, {
												delay: .16,
												className: "max-w-[23rem]",
												children: /* @__PURE__ */ jsxs("p", {
													className: "text-[clamp(1.08rem,1.8vw,1.55rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-[#a7def0]",
													children: [
														/* @__PURE__ */ jsx(DateOrdinal, {
															day: "4",
															suffix: HERO_DATE_CARD.startSuffix
														}),
														" ",
														/* @__PURE__ */ jsx("br", {}),
														"International Conference on"
													]
												})
											}), /* @__PURE__ */ jsx(MotionReveal, {
												delay: .2,
												children: /* @__PURE__ */ jsxs("h1", {
													id: "home-hero-heading",
													className: "mt-3 max-w-[24ch] font-sans text-[clamp(1.45rem,3vw,3.15rem)] font-semibold leading-[0.95] tracking-[-0.045em] text-white",
													children: [/* @__PURE__ */ jsx("span", {
														className: "block md:whitespace-nowrap",
														children: "Signal Processing, Computation,"
													}), /* @__PURE__ */ jsx("span", {
														className: "block md:whitespace-nowrap",
														children: "Electronics, Power and Telecommunication"
													})]
												})
											})]
										})]
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "grid gap-4 pt-6 md:grid-cols-3 md:gap-5 md:pt-8 lg:gap-6 lg:pt-10",
									children: [
										/* @__PURE__ */ jsxs(MotionReveal, {
											as: "article",
											delay: .24,
											className: `${HERO_SUPPORT_PANEL} h-auto w-fit justify-self-start`,
											children: [/* @__PURE__ */ jsx("p", {
												className: HERO_SUPPORT_HEADING,
												children: "Organized by"
											}), /* @__PURE__ */ jsxs("div", {
												className: "mt-4 inline-grid grid-cols-[3.5rem_auto] items-center gap-x-4 gap-y-3",
												children: [
													/* @__PURE__ */ jsx("div", {
														className: "flex w-14 justify-center",
														children: /* @__PURE__ */ jsx("img", {
															src: siteContent.brand.logo,
															alt: siteContent.brand.hostInstitute,
															className: "h-14 w-fit shrink-0 rounded-full border border-white/10 bg-white/90 p-1.5 object-contain"
														})
													}),
													/* @__PURE__ */ jsx("div", {
														className: "space-y-0.5 text-[0.9rem] font-medium leading-5 text-[#d7e4eb]",
														children: HERO_ORGANIZER_UNITS.map((unit) => /* @__PURE__ */ jsx("p", { children: unit }, unit))
													}),
													/* @__PURE__ */ jsx("p", {
														className: "text-center text-[0.95rem] font-semibold leading-none tracking-[-0.01em] text-[#eef7fb]",
														children: "NIT"
													}),
													/* @__PURE__ */ jsx("p", {
														className: "text-[0.95rem] font-semibold leading-none tracking-[-0.01em] text-[#eef7fb]",
														children: "Puducherry"
													})
												]
											})]
										}),
										/* @__PURE__ */ jsxs(MotionReveal, {
											as: "article",
											delay: .26,
											className: "flex h-full flex-col items-center justify-center px-2 text-center",
											children: [/* @__PURE__ */ jsx("p", {
												className: HERO_SUPPORT_HEADING,
												children: "Countdown"
											}), /* @__PURE__ */ jsx("div", {
												className: "mt-4 w-full",
												children: /* @__PURE__ */ jsx(CountdownGrid, {
													compact: true,
													inverse: true
												})
											})]
										}),
										/* @__PURE__ */ jsxs(MotionReveal, {
											as: "article",
											delay: .28,
											className: HERO_SUPPORT_PANEL,
											children: [/* @__PURE__ */ jsx("p", {
												className: HERO_SUPPORT_HEADING,
												children: "Technical sponsor"
											}), /* @__PURE__ */ jsxs("div", {
												className: "mt-4 flex items-center gap-5",
												children: [/* @__PURE__ */ jsx("div", {
													className: "flex h-16 w-24 shrink-0 items-center justify-center self-center rounded-[1rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-3",
													children: /* @__PURE__ */ jsx("img", {
														src: ieee_logo_icon_default,
														alt: "IEEE logo",
														className: "mx-auto max-h-full max-w-full object-contain"
													})
												}), /* @__PURE__ */ jsxs("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ jsx("p", {
														className: "text-[0.95rem] font-semibold leading-none tracking-[-0.01em] text-[#eef7fb]",
														children: "IEEE"
													}), /* @__PURE__ */ jsx("p", {
														className: `mt-2 ${HERO_SUPPORT_TEXT}`,
														children: siteContent.brand.technicalSponsor
													})]
												})]
											})]
										})
									]
								})]
							})
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative z-10 border-t border-white/10 bg-[rgba(8,12,18,0.9)] backdrop-blur-sm",
						children: /* @__PURE__ */ jsx("div", {
							className: "container py-2.5 md:py-3",
							children: /* @__PURE__ */ jsx("div", {
								className: "mx-auto flex max-w-[64rem] flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center font-sans text-white",
								children: HERO_TICKER_ITEMS.map((item) => /* @__PURE__ */ jsxs("span", {
									className: "flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#8fc6d8]",
										children: item.label
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[0.82rem] font-medium leading-6 tracking-[0.01em] text-[#d7e4eb] md:text-[0.88rem]",
										children: item.value
									})]
								}, item.label))
							})
						})
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			"aria-label": "Conference announcements",
			className: "border-y border-light-divider/80 bg-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container flex flex-col gap-3 py-3 md:flex-row md:items-center md:gap-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex shrink-0 items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-primary-600",
					children: [/* @__PURE__ */ jsx(BellIcon, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", { children: "Announcements" })]
				}), /* @__PURE__ */ jsx("div", {
					className: "announcement-marquee min-w-0 flex-1 overflow-hidden",
					children: /* @__PURE__ */ jsx("div", {
						className: "announcement-marquee-track",
						children: [0, 1].map((copyIndex) => /* @__PURE__ */ jsx("div", {
							className: "announcement-marquee-group",
							"aria-hidden": copyIndex === 1 ? "true" : void 0,
							children: HOME_ANNOUNCEMENTS.map((announcement) => /* @__PURE__ */ jsxs("span", {
								className: "flex shrink-0 items-center gap-3 whitespace-nowrap text-[0.88rem] font-medium text-light-pt",
								children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary-500" }), /* @__PURE__ */ jsx("span", { children: announcement })]
							}, `${copyIndex}-${announcement}`))
						}, copyIndex))
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			customPaddings: "pt-10 pb-12 md:pt-12 md:pb-14 lg:pt-14 lg:pb-16",
			children: /* @__PURE__ */ jsx("div", {
				className: "container",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:gap-10",
					children: [/* @__PURE__ */ jsx(MotionReveal, {
						className: "border-t border-light-divider/80 pt-6 md:pt-7",
						children: /* @__PURE__ */ jsxs("div", {
							className: "space-y-5",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
									className: "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-600",
									children: "Conference Tracks"
								}), /* @__PURE__ */ jsx("h2", {
									className: "mt-3 max-w-[18ch] text-[1.55rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.9rem]",
									children: "Areas open for paper submission"
								})] }), /* @__PURE__ */ jsx(Link, {
									to: "/guidelines",
									className: "inline-flex items-center justify-center self-start rounded-full border border-primary-500 bg-primary-500 px-7 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors duration-200 hover:border-primary-600 hover:bg-primary-600 md:self-auto",
									children: "View Gudilines"
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: HOME_CONFERENCE_TRACKS.map(({ id, title }) => /* @__PURE__ */ jsxs("div", {
									className: "rounded-[1.1rem] border border-light-divider/80 bg-light-sb/70 px-4 py-4",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-primary-600",
										children: id
									}), /* @__PURE__ */ jsx("p", {
										className: "mt-2 text-[1rem] font-semibold leading-6 tracking-[-0.02em] text-light-pt",
										children: title
									})]
								}, id))
							})]
						})
					}), /* @__PURE__ */ jsxs(MotionReveal, {
						as: "aside",
						delay: .06,
						className: "border-t border-light-divider/80 pt-6 md:pt-7",
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-[1.35rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.55rem]",
								children: siteContent.brand.shortName
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-5 space-y-4",
								children: HOME_QUICK_INFO.map(({ icon: Icon, text }) => /* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3 text-light-st",
									children: [/* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 shrink-0 text-primary-600" }), /* @__PURE__ */ jsx("span", {
										className: "text-[0.95rem] font-medium leading-6",
										children: text
									})]
								}, text))
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 border-t border-light-divider/80 pt-5",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-600",
									children: "Important Dates"
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-4 space-y-3",
									children: HOME_IMPORTANT_DATES.map(({ label, value }) => /* @__PURE__ */ jsxs("div", {
										className: "rounded-[1rem] border border-light-divider/80 bg-light-sb/60 px-4 py-3",
										children: [/* @__PURE__ */ jsx("p", {
											className: "text-[0.82rem] font-medium leading-5 text-light-st",
											children: label
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-1 text-[1rem] font-semibold tracking-[-0.02em] text-light-pt",
											children: value
										})]
									}, label))
								})]
							})
						]
					})]
				})
			})
		})
	] });
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	headers: () => headers$5,
	meta: () => meta$10
});
function meta$10() {
	return [{ title: "IConSCEPT 2026 | NIT Puducherry" }, {
		name: "description",
		content: "Official website of IConSCEPT 2026 at NIT Puducherry, Karaikal, India."
	}];
}
function headers$5() {
	return { "Cache-Control": "s-maxage=1, stale-while-revalidate=59" };
}
var home_default = UNSAFE_withComponentProps(function HomeRoute() {
	return /* @__PURE__ */ jsx(Home, {});
});
//#endregion
//#region app/pages/About.jsx
function About() {
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Section, {
		id: "about-page",
		className: "!pt-6 md:!pt-8",
		"aria-labelledby": "about-page-heading",
		reveal: false,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx("header", { children: /* @__PURE__ */ jsx("h1", {
				id: "about-page-heading",
				className: "mb-8 text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-none tracking-[-0.04em] text-light-pt",
				children: "IConSCEPT 2026"
			}) }), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 lg:grid-cols-[1.1fr,0.9fr]",
				children: [/* @__PURE__ */ jsx(MotionReveal, {
					as: "article",
					className: "surface-panel",
					children: /* @__PURE__ */ jsx("div", {
						className: "space-y-6 text-justify text-[1rem] leading-8 text-light-st",
						children: siteContent.aboutParagraphs.map((paragraph) => /* @__PURE__ */ jsx("p", { children: paragraph }, paragraph))
					})
				}), /* @__PURE__ */ jsxs("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: "surface-card",
						delay: .06,
						children: [/* @__PURE__ */ jsx("p", {
							className: "site-eyebrow",
							children: "Conference Profile"
						}), /* @__PURE__ */ jsxs("dl", {
							className: "mt-5 space-y-5",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted",
									children: "Dates"
								}), /* @__PURE__ */ jsx("dd", {
									className: "mt-2 text-sm leading-6 text-light-pt",
									children: siteContent.brand.dates
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted",
									children: "Venue"
								}), /* @__PURE__ */ jsx("dd", {
									className: "mt-2 text-sm leading-6 text-light-pt",
									children: siteContent.brand.venue
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted",
									children: "Organized by"
								}), /* @__PURE__ */ jsx("dd", {
									className: "mt-2 text-sm leading-6 text-light-pt",
									children: siteContent.brand.organizers
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted",
									children: "Technical sponsor"
								}), /* @__PURE__ */ jsx("dd", {
									className: "mt-2 text-sm leading-6 text-light-pt",
									children: siteContent.brand.technicalSponsor
								})] })
							]
						})]
					}), /* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: "surface-card",
						delay: .12,
						children: [/* @__PURE__ */ jsx("p", {
							className: "site-eyebrow",
							children: "Publication"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm leading-7 text-light-st",
							children: siteContent.brand.publicationTarget
						})]
					})]
				})]
			})]
		})
	}) });
}
//#endregion
//#region app/routes/about.tsx
var about_exports = /* @__PURE__ */ __exportAll({
	default: () => about_default,
	headers: () => headers$4,
	meta: () => meta$9
});
function meta$9() {
	return [{ title: "About Us" }];
}
function headers$4() {
	return { "Cache-Control": "s-maxage=1, stale-while-revalidate=59" };
}
var about_default = UNSAFE_withComponentProps(function AboutRoute() {
	return /* @__PURE__ */ jsx(About, {});
});
//#endregion
//#region app/components/common/Heading.jsx
var Heading = ({ className = "", title, text, tag: _tag, centered = true, ...props }) => {
	const rootClasses = [
		"mx-auto mb-12 max-w-[48rem] md:mb-16",
		centered ? "md:text-center" : "",
		className
	].filter(Boolean).join(" ");
	const textClasses = ["body mt-5 max-w-[42rem] text-light-muted", centered ? "md:mx-auto" : ""].filter(Boolean).join(" ");
	return /* @__PURE__ */ jsxs("div", {
		...props,
		className: rootClasses,
		children: [title ? /* @__PURE__ */ jsx("h2", {
			className: "h2 text-light-pt",
			children: title
		}) : null, text ? /* @__PURE__ */ jsx("p", {
			className: textClasses,
			children: text
		}) : null]
	});
};
//#endregion
//#region app/pages/CallForPaper.jsx
function CallForPaper() {
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Section, {
		id: "call-for-papers",
		className: "!pt-6 md:!pt-8",
		"aria-label": "Call for papers",
		reveal: false,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx(Heading, {
				title: "Conference Tracks",
				text: "IConSCEPT 2026 invites papers across the core technical areas. Authors should align their submissions with one of the tracks below."
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
				children: siteContent.tracks.map((track, index) => /* @__PURE__ */ jsxs(MotionReveal, {
					as: "article",
					delay: .04 * index,
					className: "rounded-[2rem] border border-light-divider/80 bg-white/85 px-6 py-7 shadow-soft backdrop-blur-sm md:px-7",
					children: [
						/* @__PURE__ */ jsxs("p", {
							className: "text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-primary-600",
							children: ["Track ", index + 1]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 text-[1.18rem] font-semibold leading-7 tracking-[-0.03em] text-light-pt",
							children: track.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm leading-7 text-light-st",
							children: track.description
						})
					]
				}, track.title))
			})]
		})
	}) });
}
//#endregion
//#region app/routes/call-for-papers.tsx
var call_for_papers_exports = /* @__PURE__ */ __exportAll({
	default: () => call_for_papers_default,
	headers: () => headers$3,
	meta: () => meta$8
});
function meta$8() {
	return [{ title: "Call for Papers" }];
}
function headers$3() {
	return { "Cache-Control": "s-maxage=1, stale-while-revalidate=59" };
}
var call_for_papers_default = UNSAFE_withComponentProps(function CallForPaperRoute() {
	return /* @__PURE__ */ jsx(CallForPaper, {});
});
//#endregion
//#region app/pages/ImportantDates.jsx
function StatusBadge({ status }) {
	return /* @__PURE__ */ jsx("span", {
		className: `rounded-full border px-3 py-1 text-[0.64rem] font-code uppercase tracking-[0.2em] ${status === "Confirmed" ? "border-primary-400/40 bg-primary-400/12 text-primary-300" : "border-highlight-500/40 bg-highlight-500/12 text-highlight-300"}`,
		children: status
	});
}
function ImportantDates() {
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Section, {
		id: "important-dates",
		className: "!pt-6 md:!pt-8",
		"aria-labelledby": "important-dates-heading",
		reveal: false,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx(Heading, {
				id: "important-dates-heading",
				tag: "Important Dates",
				title: "Schedule for IConSCEPT 2026",
				text: "The conference dates and currently published submission milestones are listed below. Registration deadlines that are not yet finalized will be announced on this website."
			}), /* @__PURE__ */ jsx("div", {
				className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4",
				children: siteContent.importantDates2026.map((item, index) => /* @__PURE__ */ jsxs(MotionReveal, {
					as: "article",
					className: "surface-card",
					delay: index * .05,
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "text-base font-semibold leading-6 text-light-pt",
							children: item.label
						}), /* @__PURE__ */ jsx(StatusBadge, { status: item.status })]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-6 text-lg font-semibold text-primary-600",
						children: item.value
					})]
				}, item.label))
			})]
		})
	}) });
}
//#endregion
//#region app/routes/important-dates.tsx
var important_dates_exports = /* @__PURE__ */ __exportAll({
	default: () => important_dates_default,
	headers: () => headers$2,
	meta: () => meta$7
});
function meta$7() {
	return [{ title: "Important Dates" }];
}
function headers$2() {
	return { "Cache-Control": "s-maxage=1, stale-while-revalidate=59" };
}
var important_dates_default = UNSAFE_withComponentProps(function ImportantDatesRoute() {
	return /* @__PURE__ */ jsx(ImportantDates, {});
});
//#endregion
//#region app/pages/Committees.jsx
function getAffiliationLines(affiliation) {
	if (Array.isArray(affiliation)) return affiliation;
	return String(affiliation).split(",").map((part) => part.trim()).filter(Boolean);
}
function createPlaceholderMember(role, affiliation = "IConSCEPT 2026") {
	return {
		role,
		name: "TBD",
		designation: "Committee member to be announced",
		affiliation,
		image: siteContent.committeePage.placeholderImage,
		alt: `${role} placeholder portrait`,
		isPlaceholder: true
	};
}
function MemberImage({ member, className, imgClassName, loading = "lazy" }) {
	const fallbackImage = siteContent.committeePage.placeholderImage;
	const [imageSrc, setImageSrc] = useState(member.image || fallbackImage);
	return /* @__PURE__ */ jsx("div", {
		className,
		children: /* @__PURE__ */ jsx("img", {
			src: imageSrc,
			alt: member.alt || `${member.name} portrait`,
			loading,
			width: "176",
			height: "176",
			className: imgClassName,
			onError: () => {
				setImageSrc((currentImage) => currentImage === fallbackImage ? currentImage : fallbackImage);
			}
		})
	});
}
function SpotlightMember({ member }) {
	const affiliationLines = getAffiliationLines(member.affiliation);
	const hasMeta = Boolean(member.designation) || affiliationLines.length > 0;
	return /* @__PURE__ */ jsxs("article", {
		className: "grid gap-5 rounded-[1.7rem] border border-[#eadfce] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(250,246,239,0.94)_100%)] px-5 py-5 shadow-[0_22px_45px_-38px_rgba(92,74,42,0.38)] md:grid-cols-[10rem_minmax(0,1fr)] md:items-start md:px-6",
		children: [/* @__PURE__ */ jsx(MemberImage, {
			member,
			className: "mx-auto w-40 shrink-0 overflow-hidden rounded-[1.3rem] border border-[#e8dcc9] bg-[#f8f2e8] p-1.5 md:mx-0",
			imgClassName: "h-40 w-40 rounded-[0.95rem] object-cover object-top",
			loading: "eager"
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "inline-flex rounded-full border border-[#d8c3a2] bg-[#f7efe2] px-3 py-1 text-[0.68rem] font-code uppercase tracking-[0.22em] text-[#94682e]",
					children: member.role
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 capitalize text-[1.08rem] font-semibold leading-tight tracking-[-0.02em] text-[#234f90] md:text-[1.22rem]",
					children: member.name
				}),
				hasMeta ? /* @__PURE__ */ jsxs(Fragment, { children: [
					/* @__PURE__ */ jsx("div", { className: "mt-4 h-px w-full bg-[#d7c8b2]" }),
					member.designation ? /* @__PURE__ */ jsx("p", {
						className: "mt-4 text-[0.92rem] font-medium leading-6 text-[#4c5968]",
						children: member.designation
					}) : null,
					affiliationLines.length > 0 ? /* @__PURE__ */ jsx("div", {
						className: "mt-1.5 space-y-0.5 text-[0.9rem] leading-7 text-[#243242]",
						children: affiliationLines.map((line) => /* @__PURE__ */ jsx("p", { children: line }, line))
					}) : null
				] }) : null
			]
		})]
	});
}
function GalleryMember({ member }) {
	const affiliationLines = getAffiliationLines(member.affiliation);
	const hasMeta = Boolean(member.designation) || affiliationLines.length > 0;
	return /* @__PURE__ */ jsxs("article", {
		className: "flex w-40 flex-col rounded-[1.5rem] border border-[#ece2d3] bg-white/95 p-4 text-center shadow-[0_20px_38px_-34px_rgba(92,74,42,0.42)] md:w-44 md:p-[1.125rem]",
		children: [/* @__PURE__ */ jsx(MemberImage, {
			member,
			className: "mx-auto w-full overflow-hidden rounded-[1.15rem] border border-[#eadfce] bg-[#f8f2e8] p-1.5",
			imgClassName: "h-40 w-full rounded-[0.85rem] object-cover object-top md:h-44"
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-4 flex flex-1 flex-col",
			children: [/* @__PURE__ */ jsx("div", {
				className: "min-h-[3.9rem]",
				children: /* @__PURE__ */ jsx("p", {
					className: "text-[0.92rem] capitalize font-semibold leading-tight text-[#31475f] md:text-[0.98rem]",
					children: member.name
				})
			}), hasMeta ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				className: "mt-1.5 min-h-[2rem]",
				children: member.designation ? /* @__PURE__ */ jsx("p", {
					className: "text-[0.86rem] font-medium leading-6 text-[#5a6570]",
					children: member.designation
				}) : null
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-1 min-h-[5rem]",
				children: affiliationLines.length > 0 ? /* @__PURE__ */ jsx("div", {
					className: "space-y-0.5 text-[0.84rem] leading-6 text-[#4d5b6c]",
					children: affiliationLines.map((line) => /* @__PURE__ */ jsx("p", { children: line }, line))
				}) : null
			})] }) : null]
		})]
	});
}
function CommitteeGallery({ section, delay }) {
	const members = section.members.length > 0 ? section.members : [createPlaceholderMember(section.title)];
	return /* @__PURE__ */ jsxs(MotionReveal, {
		as: "section",
		delay,
		className: "mt-16 overflow-hidden rounded-[2rem] border border-light-divider/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(249,244,236,0.9)_100%)] px-5 py-10 shadow-[0_26px_60px_-48px_rgba(92,74,42,0.38)] md:px-8 md:py-12 lg:px-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-3xl text-center",
			children: [/* @__PURE__ */ jsx("h2", {
				className: "text-[1.45rem] font-medium italic leading-none text-[#4c5968] md:text-[1.85rem]",
				children: section.title
			}), /* @__PURE__ */ jsx("div", { className: "mx-auto mt-5 h-px w-24 bg-[#dbc9af]" })]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-10 flex flex-wrap justify-center gap-x-8 gap-y-8 px-1 md:gap-x-10 md:gap-y-10 md:px-3",
			children: members.map((member, index) => /* @__PURE__ */ jsx(GalleryMember, { member }, `${section.title}-${member.name}-${index}`))
		})]
	});
}
function Committees() {
	const { committeePage } = siteContent;
	const spotlightSections = committeePage.sections.filter((section) => section.layout === "spotlight");
	const gallerySections = committeePage.sections.filter((section) => section.layout === "gallery");
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Section, {
		id: "committees",
		className: "!pt-6 md:!pt-8",
		customPaddings: "pt-6 pb-16 md:pt-8 md:pb-20",
		"aria-labelledby": "committees-heading",
		reveal: false,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsx("header", {
					className: "sr-only",
					children: /* @__PURE__ */ jsx("h1", {
						id: "committees-heading",
						children: committeePage.intro.title
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 space-y-12",
					children: [/* @__PURE__ */ jsxs(MotionReveal, {
						as: "section",
						className: "overflow-hidden rounded-[2rem] border border-light-divider/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(250,246,239,0.92)_100%)] px-4 py-8 shadow-[0_26px_60px_-48px_rgba(92,74,42,0.38)] md:px-6 lg:px-8",
						delay: .06,
						children: [/* @__PURE__ */ jsxs("div", {
							className: "mx-auto max-w-3xl text-center",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[0.68rem] font-code uppercase tracking-[0.24em] text-[#a9793f]",
									children: "Leadership"
								}),
								/* @__PURE__ */ jsx("h2", {
									className: "mt-3 text-[1.45rem] font-medium italic leading-none text-[#4c5968] md:text-[1.9rem]",
									children: "Institutional Leadership"
								}),
								/* @__PURE__ */ jsx("div", { className: "mx-auto mt-5 h-px w-24 bg-[#dbc9af]" })
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid gap-x-8 gap-y-12 xl:grid-cols-2",
							children: committeePage.featuredMembers.map((member) => /* @__PURE__ */ jsx(SpotlightMember, { member }, member.role))
						})]
					}), spotlightSections.map((section, index) => {
						const members = section.members.length > 0 ? section.members : [createPlaceholderMember(section.title)];
						return /* @__PURE__ */ jsxs(MotionReveal, {
							as: "section",
							className: "overflow-hidden rounded-[2rem] border border-light-divider/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(250,246,239,0.92)_100%)] px-4 py-8 shadow-[0_26px_60px_-48px_rgba(92,74,42,0.38)] md:px-6 lg:px-8",
							delay: .12 + index * .04,
							children: [/* @__PURE__ */ jsxs("div", {
								className: "mx-auto max-w-3xl text-center",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "text-[1.45rem] font-medium italic leading-none text-[#4c5968] md:text-[1.9rem]",
									children: section.title
								}), /* @__PURE__ */ jsx("div", { className: "mx-auto mt-5 h-px w-24 bg-[#dbc9af]" })]
							}), /* @__PURE__ */ jsx("div", {
								className: "grid gap-x-8 gap-y-12 xl:grid-cols-2",
								children: members.map((member, memberIndex) => /* @__PURE__ */ jsx(SpotlightMember, { member }, `${section.title}-${member.name}-${memberIndex}`))
							})]
						}, section.title);
					})]
				}),
				gallerySections.map((section, index) => /* @__PURE__ */ jsx(CommitteeGallery, {
					section,
					delay: .28 + index * .05
				}, section.title))
			]
		})
	}) });
}
//#endregion
//#region app/routes/committees.tsx
var committees_exports = /* @__PURE__ */ __exportAll({
	default: () => committees_default,
	headers: () => headers$1,
	meta: () => meta$6
});
function meta$6() {
	return [{ title: "Committees" }];
}
function headers$1() {
	return { "Cache-Control": "s-maxage=1, stale-while-revalidate=59" };
}
var committees_default = UNSAFE_withComponentProps(function CommitteesRoute() {
	return /* @__PURE__ */ jsx(Committees, {});
});
//#endregion
//#region app/pages/Registration.jsx
function FeesTable({ title, rows, delay = 0 }) {
	return /* @__PURE__ */ jsxs(MotionReveal, {
		as: "article",
		className: "surface-card",
		delay,
		children: [/* @__PURE__ */ jsx("h2", {
			className: "text-xl font-semibold text-light-pt",
			children: title
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-5 overflow-x-auto",
			children: /* @__PURE__ */ jsxs("table", {
				className: "min-w-full border-collapse text-left text-sm",
				children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
					className: "border-b border-light-divider/70",
					children: [
						/* @__PURE__ */ jsx("th", {
							className: "px-3 py-3 font-semibold text-light-pt",
							children: "Category"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-3 py-3 font-semibold text-light-pt",
							children: "Early IEEE"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-3 py-3 font-semibold text-light-pt",
							children: "Early Non-IEEE"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-3 py-3 font-semibold text-light-pt",
							children: "Standard IEEE"
						}),
						/* @__PURE__ */ jsx("th", {
							className: "px-3 py-3 font-semibold text-light-pt",
							children: "Standard Non-IEEE"
						})
					]
				}) }), /* @__PURE__ */ jsx("tbody", { children: rows.map((row) => /* @__PURE__ */ jsxs("tr", {
					className: "border-b border-light-divider/60",
					children: [
						/* @__PURE__ */ jsx("td", {
							className: "px-3 py-4 font-medium text-light-pt",
							children: row.category
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-3 py-4 text-light-st",
							children: row.earlyIEEE
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-3 py-4 text-light-st",
							children: row.earlyNonIEEE
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-3 py-4 text-light-st",
							children: row.standardIEEE
						}),
						/* @__PURE__ */ jsx("td", {
							className: "px-3 py-4 text-light-st",
							children: row.standardNonIEEE
						})
					]
				}, row.category)) })]
			})
		})]
	});
}
function Registration() {
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Section, {
		id: "registration",
		className: "!pt-6 md:!pt-8",
		"aria-labelledby": "registration-heading",
		reveal: false,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx(Heading, {
				id: "registration-heading",
				tag: "Registration",
				title: "Registration fees for IConSCEPT 2026",
				text: siteContent.registration.notice
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 lg:grid-cols-[1.1fr,0.9fr]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ jsx(FeesTable, {
						title: "Indian registration (INR)",
						rows: siteContent.registration.indian
					}), /* @__PURE__ */ jsx(FeesTable, {
						title: "Foreign registration (USD)",
						rows: siteContent.registration.foreign,
						delay: .06
					})]
				}), /* @__PURE__ */ jsxs("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: "surface-card",
						delay: .08,
						children: [/* @__PURE__ */ jsx("p", {
							className: "site-eyebrow",
							children: "Registration Notes"
						}), /* @__PURE__ */ jsx("ul", {
							className: "mt-5 space-y-3 text-sm leading-6 text-light-st",
							children: siteContent.registration.notes.map((note) => /* @__PURE__ */ jsx("li", { children: note }, note))
						})]
					}), /* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: "surface-card",
						delay: .14,
						children: [/* @__PURE__ */ jsx("p", {
							className: "site-eyebrow",
							children: "Online Portal"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm leading-7 text-light-st",
							children: siteContent.registration.portalText
						})]
					})]
				})]
			})]
		})
	}) });
}
//#endregion
//#region app/routes/registration.tsx
var registration_exports = /* @__PURE__ */ __exportAll({
	default: () => registration_default,
	headers: () => headers,
	meta: () => meta$5
});
function meta$5() {
	return [{ title: "Registration" }];
}
function headers() {
	return { "Cache-Control": "s-maxage=1, stale-while-revalidate=59" };
}
var registration_default = UNSAFE_withComponentProps(function RegistrationRoute() {
	return /* @__PURE__ */ jsx(Registration, {});
});
//#endregion
//#region app/pages/RegistrationPortal.jsx
function RegistrationPortal() {
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Section, {
		id: "registration-portal",
		className: "!pt-6 md:!pt-8",
		"aria-labelledby": "registration-portal-heading",
		reveal: false,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container max-w-4xl",
			children: [
				/* @__PURE__ */ jsx(Heading, {
					id: "registration-portal-heading",
					tag: "Registration Portal",
					title: "Online registration portal",
					text: siteContent.registration.portalText
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: "surface-panel",
						children: [/* @__PURE__ */ jsx("p", {
							className: "site-eyebrow",
							children: "Payment Instructions"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm leading-7 text-light-st",
							children: "Payment instructions will be published together with the official registration portal."
						})]
					}), /* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: "surface-card",
						delay: .08,
						children: [/* @__PURE__ */ jsx("p", {
							className: "site-eyebrow",
							children: "Participant Guidance"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm leading-7 text-light-st",
							children: "Participants may consult the registration page for the tentative fee schedule and official contact channels."
						})]
					})]
				}),
				/* @__PURE__ */ jsxs(MotionReveal, {
					className: "mt-8 flex flex-wrap gap-4",
					delay: .12,
					children: [/* @__PURE__ */ jsx(Link, {
						to: "/registration",
						className: "button-primary",
						children: "Back to Registration"
					}), /* @__PURE__ */ jsx(Link, {
						to: "/contact-us",
						className: "button-secondary",
						children: "Contact Organizers"
					})]
				})
			]
		})
	}) });
}
//#endregion
//#region app/routes/registration-form.tsx
var registration_form_exports = /* @__PURE__ */ __exportAll({
	default: () => registration_form_default,
	meta: () => meta$4
});
function meta$4() {
	return [{ title: "Registration Portal" }];
}
var registration_form_default = UNSAFE_withComponentProps(function RegistrationPortalRoute() {
	return /* @__PURE__ */ jsx(RegistrationPortal, {});
});
//#endregion
//#region app/pages/Gudilines.jsx
var topCardClass = "rounded-[2.2rem] border border-light-divider/80 bg-white/85 px-6 py-7 shadow-soft backdrop-blur-sm md:px-8 md:py-8";
var wideCardClass = "rounded-[2.4rem] border border-light-divider/80 bg-light-sb/80 px-6 py-7 shadow-soft backdrop-blur-sm md:px-8 md:py-8";
var bulletListClass = "mt-6 space-y-5 text-sm leading-7 text-light-st";
function Gudilines() {
	const { intro, authorGuidelines, publicationGuidelines, publicationRequirementsIntro, publicationRequirements, publicationRequirementsClosing, cmtNotice } = siteContent.guidelines;
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Section, {
		id: "gudilines",
		className: "!pt-6 md:!pt-8",
		"aria-labelledby": "gudilines-heading",
		reveal: false,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsx(Heading, {
					id: "gudilines-heading",
					title: "Guidelines",
					text: intro
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: topCardClass,
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-[1.45rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.7rem]",
								children: "Author Guidelines"
							}),
							/* @__PURE__ */ jsx("ul", {
								className: bulletListClass,
								children: authorGuidelines.map((item) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-3",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" }), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { children: item.detail }) })]
								}, item.title))
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-6",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/registration",
									className: "button-secondary",
									children: "View registration fees"
								})
							})
						]
					}), /* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: topCardClass,
						delay: .06,
						children: [
							/* @__PURE__ */ jsx("h2", {
								className: "text-[1.45rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.7rem]",
								children: "Submission Guidelines"
							}),
							/* @__PURE__ */ jsx("ul", {
								className: bulletListClass,
								children: publicationGuidelines.map((item) => {
									var _item$templates;
									return /* @__PURE__ */ jsxs("li", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ jsx("span", { className: "mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", { children: item.detail }), ((_item$templates = item.templates) === null || _item$templates === void 0 ? void 0 : _item$templates.length) ? /* @__PURE__ */ jsx("div", {
											className: "mt-4 flex flex-wrap gap-3",
											children: item.templates.map((template) => /* @__PURE__ */ jsx("a", {
												href: template.href,
												download: true,
												className: "inline-flex items-center justify-center rounded-full border border-primary-300/70 bg-white/90 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary-700 transition-colors duration-200 hover:border-primary-500 hover:text-primary-800",
												children: template.label
											}, template.href))
										}) : null] })]
									}, item.title);
								})
							}),
							/* @__PURE__ */ jsx("div", { className: "mt-6" })
						]
					})]
				}),
				/* @__PURE__ */ jsxs(MotionReveal, {
					as: "article",
					className: `${wideCardClass} mt-6`,
					delay: .1,
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[1.45rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[1.7rem]",
							children: "Publication Requirements"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm leading-7 text-light-st",
							children: publicationRequirementsIntro
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-5 space-y-3 text-sm leading-7 text-light-st",
							children: publicationRequirements.map((item) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ jsx("span", { className: "mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" }), /* @__PURE__ */ jsx("span", { children: item })]
							}, item))
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm leading-7 text-light-st",
							children: publicationRequirementsClosing
						})
					]
				}),
				/* @__PURE__ */ jsx(MotionReveal, {
					as: "article",
					className: `${wideCardClass} mt-6`,
					delay: .14,
					children: /* @__PURE__ */ jsx("p", {
						className: " text-sm leading-7 text-light-st",
						children: cmtNotice
					})
				})
			]
		})
	}) });
}
//#endregion
//#region app/routes/guidelines.tsx
var guidelines_exports = /* @__PURE__ */ __exportAll({
	default: () => guidelines_default,
	meta: () => meta$3
});
function meta$3() {
	return [{ title: "Guidelines" }];
}
var guidelines_default = UNSAFE_withComponentProps(function GuidelinesRoute() {
	return /* @__PURE__ */ jsx(Gudilines, {});
});
//#endregion
//#region app/pages/Sponsors.jsx
function SponsorStatus({ children }) {
	return /* @__PURE__ */ jsx("span", {
		className: "inline-flex rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[0.64rem] font-code uppercase tracking-[0.2em] text-primary-700",
		children
	});
}
function Sponsors() {
	const { brand, sponsorsPage } = siteContent;
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Section, {
		id: "sponsors",
		className: "!pt-6 md:!pt-8",
		"aria-labelledby": "sponsors-heading",
		reveal: false,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [/* @__PURE__ */ jsx("header", {
				className: "sr-only",
				children: /* @__PURE__ */ jsx("h1", {
					id: "sponsors-heading",
					children: sponsorsPage.intro.title
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]",
				children: [/* @__PURE__ */ jsxs(MotionReveal, {
					as: "article",
					className: "rounded-[1.4rem] border border-light-divider/80 bg-light-sb/95 p-6 shadow-soft",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center justify-between gap-3",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "site-eyebrow",
							children: sponsorsPage.technicalSponsor.role
						}), /* @__PURE__ */ jsx("h2", {
							className: "mt-3 text-[1.8rem] font-semibold tracking-[-0.03em] text-light-pt md:text-[2.15rem]",
							children: sponsorsPage.technicalSponsor.name
						})] }), /* @__PURE__ */ jsx(SponsorStatus, { children: sponsorsPage.technicalSponsor.status })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-6 grid gap-6 md:grid-cols-[8rem_minmax(0,1fr)] md:items-center",
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex h-28 w-28 items-center justify-center rounded-[1.2rem] border border-light-divider/80 bg-white p-4",
							children: /* @__PURE__ */ jsx("img", {
								src: sponsorsPage.technicalSponsor.logo,
								alt: sponsorsPage.technicalSponsor.alt,
								className: "max-h-full max-w-full object-contain"
							})
						}), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-sm leading-7 text-light-st",
								children: sponsorsPage.technicalSponsor.description
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-light-muted",
								children: "Publication pathway"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm leading-7 text-light-pt",
								children: brand.publicationTarget
							})
						] })]
					})]
				}), /* @__PURE__ */ jsxs(MotionReveal, {
					as: "aside",
					className: "surface-panel",
					delay: .06,
					children: [/* @__PURE__ */ jsx("p", {
						className: "site-eyebrow",
						children: "Conference Support"
					}), /* @__PURE__ */ jsx("dl", {
						className: "mt-5 space-y-5",
						children: sponsorsPage.institutionalSupport.map((item) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "text-[0.68rem] font-code uppercase tracking-[0.22em] text-light-muted",
							children: item.title
						}), /* @__PURE__ */ jsx("dd", {
							className: "mt-2 text-sm leading-7 text-light-pt",
							children: item.value
						})] }, item.title))
					})]
				})]
			})]
		})
	}) });
}
//#endregion
//#region app/routes/sponsors.tsx
var sponsors_exports = /* @__PURE__ */ __exportAll({
	default: () => sponsors_default,
	meta: () => meta$2
});
function meta$2() {
	return [{ title: "Sponsors" }];
}
var sponsors_default = UNSAFE_withComponentProps(function SponsorsRoute() {
	return /* @__PURE__ */ jsx(Sponsors, {});
});
//#endregion
//#region app/pages/Contact.jsx
function Contact() {
	const primaryContacts = siteContent.contacts.slice(0, 2);
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Section, {
		id: "contact",
		className: "!pt-6 md:!pt-8",
		"aria-labelledby": "contact-heading",
		reveal: false,
		children: /* @__PURE__ */ jsxs("div", {
			className: "container",
			children: [
				/* @__PURE__ */ jsx(Heading, {
					id: "contact-heading",
					tag: "Contact",
					title: "Official communication channels",
					text: "For all conference communication, please use the official email and phone contacts listed below."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mx-auto grid max-w-5xl gap-8 md:grid-cols-2",
					children: primaryContacts.map((contact, index) => /* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: "surface-card grid h-full w-full max-w-none grid-cols-[2.5rem,minmax(0,1fr)] gap-x-5 gap-y-3 sm:grid-cols-[3rem,minmax(0,1fr)] sm:gap-x-6",
						delay: index * .05,
						children: [/* @__PURE__ */ jsx("div", {
							className: "flex items-start justify-center pt-1 text-light-pt",
							children: contact.type === "phone" ? /* @__PURE__ */ jsx(PhoneCall, {
								className: "h-9 w-9",
								strokeWidth: 1.8,
								"aria-hidden": "true"
							}) : /* @__PURE__ */ jsx(Mail, {
								className: "h-9 w-9",
								strokeWidth: 1.8,
								"aria-hidden": "true"
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ jsx("p", {
								className: "site-eyebrow !flex",
								children: contact.label
							}), contact.type === "phone" ? /* @__PURE__ */ jsx("div", {
								className: "mt-4 grid gap-2.5 text-[1.05rem] leading-7 text-light-pt",
								children: contact.people.map((person) => /* @__PURE__ */ jsxs("div", {
									className: "grid gap-0.5 sm:grid-cols-[max-content,1fr] sm:items-baseline sm:gap-x-3",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "font-medium",
										children: [person.name, " :"]
									}), /* @__PURE__ */ jsx("a", {
										href: person.href,
										className: "hover:text-primary-600",
										children: person.value
									})]
								}, person.name))
							}) : /* @__PURE__ */ jsx("a", {
								href: contact.href,
								className: "mt-4 block text-[1.05rem] leading-7 text-light-pt hover:text-primary-600",
								children: contact.value
							})]
						})]
					}, contact.label))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-[1fr,1fr]",
					children: [/* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: "surface-panel",
						children: [/* @__PURE__ */ jsx("p", {
							className: "site-eyebrow",
							children: "Venue"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-5 overflow-hidden rounded-[1.4rem] border border-light-divider/80 shadow-soft",
							children: /* @__PURE__ */ jsx("iframe", {
								src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6676737725215!2d79.84310747509168!3d10.988437389173518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a55112cc3dc97d9%3A0x6b8a0f3ccb72149e!2sNational%20Institute%20of%20Technology%2C%20Puducherry%20Science%20Block!5e0!3m2!1sen!2sin!4v1774534443298!5m2!1sen!2sin",
								className: "h-[20rem] w-full",
								style: { border: 0 },
								allowFullScreen: true,
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade",
								title: "National Institute of Technology Puducherry map"
							})
						})]
					}), /* @__PURE__ */ jsxs(MotionReveal, {
						as: "article",
						className: "surface-card",
						delay: .08,
						children: [/* @__PURE__ */ jsx("p", {
							className: "site-eyebrow",
							children: "Correspondence"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm leading-7 text-light-st",
							children: "Updates regarding submission, registration, committees, and brochure release will be published on the official website and communicated through the conference email channels."
						})]
					})]
				})
			]
		})
	}) });
}
//#endregion
//#region app/routes/contact.tsx
var contact_exports = /* @__PURE__ */ __exportAll({
	default: () => contact_default,
	meta: () => meta$1
});
function meta$1() {
	return [{ title: "Contact Us" }];
}
var contact_default = UNSAFE_withComponentProps(function ContactRoute() {
	return /* @__PURE__ */ jsx(Contact, {});
});
//#endregion
//#region app/components/Nopage.jsx
var NoPage = () => {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();
	const handleSearch = (event) => {
		event.preventDefault();
		if (query.trim()) navigate(`/search?query=${encodeURIComponent(query.trim())}`);
	};
	return /* @__PURE__ */ jsxs("main", {
		role: "main",
		"aria-labelledby": "page-not-found-title",
		className: "flex min-h-screen flex-col items-center justify-center bg-light-pb px-4 py-12",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "mb-8",
				children: /* @__PURE__ */ jsx("img", {
					src: "/assets/illustrations/404-robot.svg",
					alt: "",
					"aria-hidden": "true",
					className: "h-40 w-40 sm:h-56 sm:w-56"
				})
			}),
			/* @__PURE__ */ jsx("h1", {
				id: "page-not-found-title",
				className: "mb-4 h1 text-primary-600",
				children: "Oops! Page Not Found"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "body mb-8 max-w-lg text-center text-light-st",
				children: "We can't seem to find the page you're looking for. Try searching below or jump back to one of our popular pages."
			}),
			/* @__PURE__ */ jsxs("form", {
				onSubmit: handleSearch,
				className: "mb-8 flex w-full max-w-md items-center overflow-hidden rounded-lg border border-light-divider bg-white focus-within:ring-2 focus-within:ring-primary-500",
				role: "search",
				"aria-label": "Site search",
				children: [/* @__PURE__ */ jsx("input", {
					type: "text",
					"aria-label": "Search the site",
					placeholder: "Search...",
					value: query,
					onChange: (event) => setQuery(event.target.value),
					className: "flex-1 bg-transparent px-4 py-2 text-light-pt placeholder-light-st focus:outline-none"
				}), /* @__PURE__ */ jsx("button", {
					type: "submit",
					"aria-label": "Submit search",
					className: "bg-primary-500 p-2 text-white transition-colors hover:bg-primary-600",
					children: /* @__PURE__ */ jsx(SearchIcon, { className: "h-5 w-5" })
				})]
			}),
			/* @__PURE__ */ jsxs("nav", {
				"aria-label": "Popular pages",
				className: "mb-12 flex flex-wrap justify-center gap-4",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "rounded bg-light-pt px-6 py-2 font-medium text-light-pb transition-colors hover:bg-primary-600",
						children: "Home"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/call-for-papers",
						className: "rounded bg-primary-100 px-6 py-2 font-medium text-primary-700 transition-colors hover:bg-primary-200",
						children: "Call for Papers"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/registration",
						className: "rounded border border-primary-500 px-6 py-2 font-medium text-primary-500 transition-colors hover:bg-primary-50",
						children: "Registration"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/about-us",
						className: "rounded border border-light-border px-6 py-2 font-medium text-light-pt transition-colors hover:bg-light-altBg",
						children: "About Us"
					})
				]
			}),
			/* @__PURE__ */ jsx("button", {
				onClick: () => navigate(-1),
				className: "text-sm text-light-st hover:underline focus:outline-none",
				children: "← Go Back"
			})
		]
	});
};
//#endregion
//#region app/routes/not-found.tsx
var not_found_exports = /* @__PURE__ */ __exportAll({
	default: () => not_found_default,
	meta: () => meta
});
function meta() {
	return [{ title: "404 - Page Not Found" }];
}
var not_found_default = UNSAFE_withComponentProps(function NotFoundRoute() {
	return /* @__PURE__ */ jsx(NoPage, {});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-_4tItPWt.js",
		"imports": ["/assets/jsx-runtime-VoBP9gd0.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/root-D58gM-lN.js",
			"imports": [
				"/assets/jsx-runtime-VoBP9gd0.js",
				"/assets/MotionReveal-DWupHUFH.js",
				"/assets/esm-BtW72w9X.js"
			],
			"css": ["/assets/root-CivW9UIu.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-c3ndSzlB.js",
			"imports": [
				"/assets/jsx-runtime-VoBP9gd0.js",
				"/assets/MotionReveal-DWupHUFH.js",
				"/assets/esm-BtW72w9X.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/about": {
			"id": "routes/about",
			"parentId": "root",
			"path": "about-us",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/about-DHVPwiaj.js",
			"imports": ["/assets/jsx-runtime-VoBP9gd0.js", "/assets/MotionReveal-DWupHUFH.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/call-for-papers": {
			"id": "routes/call-for-papers",
			"parentId": "root",
			"path": "call-for-papers",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/call-for-papers-1JhsPBc9.js",
			"imports": [
				"/assets/jsx-runtime-VoBP9gd0.js",
				"/assets/MotionReveal-DWupHUFH.js",
				"/assets/Heading-Tblznj8a.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/important-dates": {
			"id": "routes/important-dates",
			"parentId": "root",
			"path": "important-dates",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/important-dates-DfZp8H4Z.js",
			"imports": [
				"/assets/jsx-runtime-VoBP9gd0.js",
				"/assets/MotionReveal-DWupHUFH.js",
				"/assets/Heading-Tblznj8a.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/committees": {
			"id": "routes/committees",
			"parentId": "root",
			"path": "committees",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/committees-BTwzSBWW.js",
			"imports": ["/assets/jsx-runtime-VoBP9gd0.js", "/assets/MotionReveal-DWupHUFH.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/registration": {
			"id": "routes/registration",
			"parentId": "root",
			"path": "registration",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/registration-BF7708uN.js",
			"imports": [
				"/assets/jsx-runtime-VoBP9gd0.js",
				"/assets/MotionReveal-DWupHUFH.js",
				"/assets/Heading-Tblznj8a.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/registration-form": {
			"id": "routes/registration-form",
			"parentId": "root",
			"path": "registration/form",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/registration-form-DpGQ9pAy.js",
			"imports": [
				"/assets/jsx-runtime-VoBP9gd0.js",
				"/assets/MotionReveal-DWupHUFH.js",
				"/assets/Heading-Tblznj8a.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/guidelines": {
			"id": "routes/guidelines",
			"parentId": "root",
			"path": "guidelines",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/guidelines-BWW0Nuta.js",
			"imports": [
				"/assets/jsx-runtime-VoBP9gd0.js",
				"/assets/MotionReveal-DWupHUFH.js",
				"/assets/Heading-Tblznj8a.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/sponsors": {
			"id": "routes/sponsors",
			"parentId": "root",
			"path": "sponsors",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/sponsors-CP_WQjOo.js",
			"imports": ["/assets/jsx-runtime-VoBP9gd0.js", "/assets/MotionReveal-DWupHUFH.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/contact": {
			"id": "routes/contact",
			"parentId": "root",
			"path": "contact-us",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/contact-Cgv-B4go.js",
			"imports": [
				"/assets/jsx-runtime-VoBP9gd0.js",
				"/assets/MotionReveal-DWupHUFH.js",
				"/assets/Heading-Tblznj8a.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/not-found": {
			"id": "routes/not-found",
			"parentId": "root",
			"path": "*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/not-found-9wOFDjIz.js",
			"imports": ["/assets/jsx-runtime-VoBP9gd0.js", "/assets/esm-BtW72w9X.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-6aa8465b.js",
	"version": "6aa8465b",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build\\client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"unstable_passThroughRequests": false,
	"unstable_subResourceIntegrity": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/about": {
		id: "routes/about",
		parentId: "root",
		path: "about-us",
		index: void 0,
		caseSensitive: void 0,
		module: about_exports
	},
	"routes/call-for-papers": {
		id: "routes/call-for-papers",
		parentId: "root",
		path: "call-for-papers",
		index: void 0,
		caseSensitive: void 0,
		module: call_for_papers_exports
	},
	"routes/important-dates": {
		id: "routes/important-dates",
		parentId: "root",
		path: "important-dates",
		index: void 0,
		caseSensitive: void 0,
		module: important_dates_exports
	},
	"routes/committees": {
		id: "routes/committees",
		parentId: "root",
		path: "committees",
		index: void 0,
		caseSensitive: void 0,
		module: committees_exports
	},
	"routes/registration": {
		id: "routes/registration",
		parentId: "root",
		path: "registration",
		index: void 0,
		caseSensitive: void 0,
		module: registration_exports
	},
	"routes/registration-form": {
		id: "routes/registration-form",
		parentId: "root",
		path: "registration/form",
		index: void 0,
		caseSensitive: void 0,
		module: registration_form_exports
	},
	"routes/guidelines": {
		id: "routes/guidelines",
		parentId: "root",
		path: "guidelines",
		index: void 0,
		caseSensitive: void 0,
		module: guidelines_exports
	},
	"routes/sponsors": {
		id: "routes/sponsors",
		parentId: "root",
		path: "sponsors",
		index: void 0,
		caseSensitive: void 0,
		module: sponsors_exports
	},
	"routes/contact": {
		id: "routes/contact",
		parentId: "root",
		path: "contact-us",
		index: void 0,
		caseSensitive: void 0,
		module: contact_exports
	},
	"routes/not-found": {
		id: "routes/not-found",
		parentId: "root",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: not_found_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
