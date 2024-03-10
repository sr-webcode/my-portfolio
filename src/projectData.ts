import {
	Main_Identifi,
	Main_InsiteLogic,
	Main_Outstaffer,
	Main_Reitscreener,
	Screen_Identifi1,
	Screen_Identifi2,
	Screen_Identifi3,
	Screen_InsiteLogic1,
	Screen_InsiteLogic2,
	Screen_InsiteLogic3,
	Screen_Outstaffer1,
	Screen_Outstaffer2,
	Screen_Outstaffer3,
	Screen_Reitscreener1,
	Screen_Reitscreener2,
	Screen_Reitscreener3
} from '@assets/index';

type TPlatformTypes = 'Web' | 'Mobile';

type TProjectImageAssets = {
	main: string;
	screenshots: string[];
};

type TProject = {
	id: string;
	name: string;
	description: string;
	contributions: string;
	url?: string;
	role?: string;
	platForms: TPlatformTypes[];
	assets?: TProjectImageAssets;
};

export const projects: TProject[] = [
	{
		id: 'outstaffer',
		platForms: ['Web'],
		name: 'Outstaffer GWP',
		role: 'Senior Front-end developer',
		url: 'https://www.google.com/',
		assets: {
			main: Main_Outstaffer,
			screenshots: [Screen_Outstaffer1, Screen_Outstaffer2, Screen_Outstaffer3]
		},
		description:
			'With Outstaffer, the process of hiring and managing global talent becomes remarkably straightforward. From recruitment to onboarding, compliance to payments, we handle every aspect of global HR, allowing companies to focus on their core objectives while we take care of the rest.',
		contributions:
			'As a senior front-end developer at Outstaffer, my role revolves around enhancing the user experience and functionality of our global platform product. From UI conversions to API integrations, I collaborate closely with the backend team to ensure seamless communication and integration between frontend and backend systems. Leveraging React for the frontend and Node.js for the backend, I work tirelessly to adapt and evolve our platform as it grows in size and complexity.'
	},
	{
		id: 'reitscreener',
		platForms: ['Web', 'Mobile'],
		name: 'Reitscreener',
		url: 'https://www.google.com/',
		assets: {
			main: Main_Reitscreener,
			screenshots: [
				Screen_Reitscreener1,
				Screen_Reitscreener2,
				Screen_Reitscreener3
			]
		},
		description:
			"Within the vibrant tapestry of real estate investing, REITScreener stands tall as a comprehensive suite, illuminating the path to success in REIT investments. It's your guiding light through the complexities of the market, offering actionable insights that pave the way for remarkable returns.",
		contributions:
			"As one of the front-end engineers behind REITScreener, my focus has been on the visual transformation of the user interface while maintaining the integrity of the platform for our pro-members. This involved crafting a seamless UI conversion that ensures a smooth transition for users, all while upholding the functionality and familiarity that our pro-members value. By meticulously refining every aspect of the front-end experience, I've contributed to enhancing the usability and accessibility of REITScreener, empowering investors to navigate the complex world of REIT investing with confidence."
	},
	{
		id: 'insite-logic',
		platForms: ['Web'],
		name: 'Insite Logic',
		url: 'https://www.google.com/',
		assets: {
			main: Main_InsiteLogic,
			screenshots: [
				Screen_InsiteLogic1,
				Screen_InsiteLogic2,
				Screen_InsiteLogic3
			]
		},
		description:
			"Catalyze your property development endeavors with InSite Logic — a sophisticated website software meticulously crafted for property developers and project marketers. With a keen eye on your prospective buyer's journey, InSite Logic is your indispensable ally, intelligently monitoring and illuminating buyer opportunities that empower your sales team.",
		contributions:
			'In this project, I spearheaded the front-end development using React, collaborating closely with a backend developer responsible for crafting robust API services. Together, we orchestrated a seamless integration of data and design, breathing life into the intricate analytics and dynamic user interface that define InSite Logic.'
	},
	{
		id: 'identifi',
		platForms: ['Web', 'Mobile'],
		name: 'Identifi',
		url: 'https://www.google.com/',
		assets: {
			main: Main_Identifi,
			screenshots: [Screen_Identifi1, Screen_Identifi2, Screen_Identifi3]
		},
		description:
			'In the realm of distributed teams, Identifi emerges as a beacon of connectivity and collaboration, empowering remote teams to thrive and excel. With a suite of intuitive tools, Identifi fosters a culture of support, recognition, and cohesion, ensuring every team member feels valued and empowered to do their best work.',
		contributions:
			'In my role as a front-end developer for Identifi, I initially provided support before transitioning to maintenance responsibilities. Leveraging technologies like Apollo GraphQL and Node.js on the backend, I collaborated closely with the backend team to ensure seamless integration of new APIs. Additionally, I led front-end conversions for new features and client requests, playing a pivotal role in enhancing the user experience and functionality of Identifi.'
	}
];
