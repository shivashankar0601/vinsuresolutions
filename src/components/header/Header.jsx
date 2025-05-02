import React, { useState, useEffect } from "react";
import Logo from "@assets/logo";

import "./Header.css";
import {
	Navbar,
	Typography,
	Button,
	MenuItem,
	IconButton,
	Collapse,
} from "@material-tailwind/react";

import {
	Square3Stack3DIcon,
	Bars2Icon,
	BanknotesIcon,
	UserGroupIcon,
	GlobeAltIcon,
	InformationCircleIcon,
} from "@heroicons/react/24/solid";

import FlyOutMenu from "../fly-out-menu/FlyOutMenu";

const trainingMenuItems = [
	{
		title: "Java",
		subMenu: {
			title: "Java Basics",
			description:
				"Java is a versatile and platform-independent programming language widely used in enterprise applications. Our training covers core concepts like OOP, data structures, exception handling, JDBC, and more.",
			duration: "6 Weeks",
			level: "Beginner to Intermediate",
			certification: true,
		},
	},
	{
		title: "Salesforce Admin",
		subMenu: {
			title: "Salesforce Basics",
			description:
				"Designed for aspiring Salesforce Administrators. Learn user management, workflow automation, reports, dashboards, and security model essentials with hands-on labs.",
			duration: "5 Weeks",
			level: "Beginner",
			certification: true,
		},
	},
	{
		title: "Business Systems Analyst",
		subMenu: {
			title: "Business Systems Analyst Basics",
			description:
				"Gain the analytical and communication skills needed to bridge business needs and IT solutions. Includes use case modeling, business process diagrams, and tools like Jira & Visio.",
			duration: "4 Weeks",
			level: "Intermediate",
			certification: false,
		},
	},
	{
		title: "Quality Analyst",
		subMenu: {
			title: "Quality Analyst Basics",
			description:
				"Master manual testing, writing test cases, defect tracking, and basics of automation tools like Selenium. Ideal for those stepping into software quality assurance.",
			duration: "5 Weeks",
			level: "Beginner to Intermediate",
			certification: true,
		},
	},
	{
		title: "Project Management",
		subMenu: {
			title: "Project Management Basics",
			description:
				"Learn key project management methodologies (Agile, Scrum, Waterfall), stakeholder communication, planning & execution. Great prep for PMP or Scrum Master roles.",
			duration: "6 Weeks",
			level: "Intermediate",
			certification: false,
		},
	},
];

const servicesMenuItems = [
	{
		title: "BPO",
		subMenu: {
			title: "Business Process Outsourcing",
			description:
				"Our BPO services streamline your business operations through expert customer support, back-office processing, and data entry — allowing you to focus on core business growth.",
			keyFeatures: ["24/7 Support", "Cost Efficiency", "Scalability"],
		},
	},
	{
		title: "KPO",
		subMenu: {
			title: "Knowledge Process Outsourcing",
			description:
				"We deliver specialized knowledge services including financial analysis, legal processing, market research, and high-end analytics with domain expertise.",
			keyFeatures: [
				"Expert Talent Pool",
				"Data-Driven Insights",
				"High-Quality Delivery",
			],
		},
	},
	{
		title: "Web Development",
		subMenu: {
			title: "Responsive Web Solutions",
			description:
				"Our web development team crafts modern, responsive, and scalable websites tailored to your business goals. We handle everything from frontend design to backend systems.",
			keyFeatures: [
				"React, Angular, Vue",
				"Node.js, Django",
				"SEO Optimization",
			],
		},
	},
	{
		title: "App Development",
		subMenu: {
			title: "Mobile App Development",
			description:
				"We build high-performance Android and iOS apps using native and cross-platform technologies. From design to deployment, we ensure your app delivers great user experiences.",
			keyFeatures: [
				"React Native & Flutter",
				"iOS & Android",
				"App Store Deployment",
			],
		},
	},
];

const navListItems = [
	{ label: "Payroll", icon: BanknotesIcon },
	{ label: "Recruitment", icon: UserGroupIcon },
	{
		label: "Training",
		icon: Square3Stack3DIcon,
		subMenu: trainingMenuItems,
		card: "CourseCard",
	},
	{
		label: "Services",
		icon: GlobeAltIcon,
		subMenu: servicesMenuItems,
		card: "ServiceCard",
	},
	{ label: "About Us", icon: InformationCircleIcon },
];

const NavList = () => (
	<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
		{navListItems.map(({ label, icon, card, subMenu }) =>
			subMenu ? (
				// <NavListMenu key={label} />
				<FlyOutMenu
					key={label}
					title={label}
					card={card}
					navListMenuItems={subMenu}
				/>
			) : (
				<Typography
					key={label}
					as="a"
					href="#"
					variant="small"
					className="font-medium"
				>
					<MenuItem className="flex items-center gap-x-2 lg:rounded-full">
						{React.createElement(icon, {
							className: "h-[24px] w-[24px]",
						})}
						<span className="text-lg">{label}</span>
					</MenuItem>
				</Typography>
			)
		)}
	</ul>
);

const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

	useEffect(() => {
		const resizeHandler = () => {
			if (window.innerWidth >= 960) setIsNavOpen(false);
		};
		window.addEventListener("resize", resizeHandler);
		return () => window.removeEventListener("resize", resizeHandler);
	}, []);

	return (
		<Navbar className="vs-nav bg-primary text-white border-0 border-radius-none py-8 rounded-none">
			<div className="relative mx-auto flex items-center justify-between container">
				<div className="cursor-pointer">
					<Logo height="44" logoFill="#FFF" textFill="#FFF" />
				</div>

				<div className="hidden lg:block">
					<NavList />
				</div>

				{window.innerWidth < 640 && (
					<IconButton
						size="sm"
						color="white"
						variant="text"
						onClick={toggleIsNavOpen}
						className="l-0 ml-auto mr-2 lg:hidden bg-white"
					>
						<Bars2Icon className="h-6 w-6" />
					</IconButton>
				)}

				{/* <ProfileMenu /> */}
				<Button
					variant="text"
					color="white"
					className="rounded-full bg-white text-primary btn-primary hover:shadow-md hover:!bg-gray-500 hover:!opacity-50 !cursor-not-allowed"
				>
					Login
				</Button>
				{/* 
				<Button
					variant="text"
					color="white"
					className="rounded-full bg-primary text-primary btn-secondary"
				>
					Sign Up
				</Button> */}
			</div>

			<Collapse open={isNavOpen} className="overflow-scroll">
				<NavList />
			</Collapse>
		</Navbar>
	);
};

export default Header;

// const profileMenuItems = [
// 	{ label: "My Profile", icon: UserCircleIcon },
// 	{ label: "Edit Profile", icon: Cog6ToothIcon },
// 	{ label: "Workspace", icon: BriefcaseIcon },
// 	{ label: "Help", icon: LifebuoyIcon },
// 	{ label: "Sign Out", icon: PowerIcon },
// ];

// const ProfileMenu = () => {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
// 	const closeMenu = () => setIsMenuOpen(false);

// 	return (
// 		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
// 			<MenuHandler>
// 				<Button
// 					variant="text"
// 					color="blue-gray"
// 					className="flex items-center gap-1 rounded-full py-1 px-1.5 bg-white"
// 				>
// 					<Avatar
// 						variant="circular"
// 						size="sm"
// 						alt="User avatar"
// 						className="h-10 w-10"
// 						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80"
// 					/>
// 					<ChevronDownIcon
// 						strokeWidth={2.5}
// 						className={`text-primary h-4 w-4 transition-transform ${
// 							isMenuOpen ? "rotate-180" : ""
// 						}`}
// 					/>
// 				</Button>
// 			</MenuHandler>
// 			<MenuList className="p-1 focus:outline-none border-0">
// 				{profileMenuItems.map(({ label, icon }, key) => {
// 					const isLastItem = key === profileMenuItems.length - 1;
// 					return (
// 						<MenuItem
// 							key={label}
// 							onClick={closeMenu}
// 							className={`flex items-center gap-2 rounded ${
// 								isLastItem
// 									? "hover:bg-red-500/10"
// 									: "hover:bg-gray-500/10"
// 							}`}
// 						>
// 							{React.createElement(icon, {
// 								className: `h-4 w-4 ${
// 									isLastItem ? "text-red-500" : ""
// 								}`,
// 								strokeWidth: 2,
// 							})}
// 							<Typography
// 								as="span"
// 								variant="small"
// 								className="font-normal"
// 								color={isLastItem ? "red" : "inherit"}
// 							>
// 								{label}
// 							</Typography>
// 						</MenuItem>
// 					);
// 				})}
// 			</MenuList>
// 		</Menu>
// 	);
// };

// const NavListMenu = () => {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
// 	const [activeSubmenu, setActiveSubmenu] = useState(null);

// 	return (
// 		<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
// 			<MenuHandler>
// 				<Typography
// 					as="a"
// 					href="#"
// 					variant="small"
// 					className="font-normal"
// 				>
// 					<MenuItem className="hidden items-center gap-2 font-medium  lg:flex lg:rounded-full">
// 						<Square3Stack3DIcon className={iconHeight} />
// 						<span className="text-lg">Training</span>
// 						<ChevronDownIcon
// 							strokeWidth={2}
// 							className={`h-4 w-4 mt-[5px] transition-transform ${
// 								isMenuOpen ? "rotate-180" : ""
// 							}`}
// 						/>
// 					</MenuItem>
// 				</Typography>
// 			</MenuHandler>

// 			{/* MenuList must be relatively positioned container */}
// 			<MenuList className="p-1 focus:outline-none border-0 relative z-10">
// 				{navListMenuItems.map(({ title, subMenu }) => (
// 					<div
// 						key={title}
// 						className="relative group"
// 						onMouseEnter={() => setActiveSubmenu(title)}
// 						onMouseLeave={() => setActiveSubmenu(null)}
// 					>
// 						<MenuItem className="flex items-center gap-2 rounded hover:bg-gray-100">
// 							<Typography
// 								as="span"
// 								variant="small"
// 								className="font-normal"
// 								color="inherit"
// 							>
// 								{title}
// 							</Typography>
// 						</MenuItem>

// 						{subMenu && (
// 							<Card
// 								className={
// 									"absolute top-0 left-full ml-2 w-64 h-full shadow-lg bg-white flex flex-col justify-center p-4 z-20 " +
// 									`${activeSubmenu === title ? "" : ""}`
// 								}
// 							>
// 								<ul className="flex flex-col gap-4">
// 									{subMenu.map((item) => (
// 										<li key={item.title}>
// 											<Typography
// 												variant="small"
// 												className="font-medium text-gray-900"
// 											>
// 												{item.title}
// 											</Typography>
// 											<Typography
// 												variant="small"
// 												className="text-gray-600 text-sm"
// 											>
// 												{item.description}
// 											</Typography>
// 										</li>
// 									))}
// 								</ul>
// 							</Card>
// 						)}
// 					</div>
// 				))}
// 			</MenuList>
// 		</Menu>
// 	);
// };
