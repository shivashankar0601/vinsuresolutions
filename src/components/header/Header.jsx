import React, { useState, useEffect } from "react";
import "./Header.css";
import {
	Navbar,
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
	IconButton,
	Collapse,
	Card,
} from "@material-tailwind/react";

import {
	UserCircleIcon,
	Square3Stack3DIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	LifebuoyIcon,
	PowerIcon,
	Bars2Icon,
	BanknotesIcon,
	UserGroupIcon,
	GlobeAltIcon,
	InformationCircleIcon,
	BriefcaseIcon,
	ChevronRightIcon,
} from "@heroicons/react/24/solid";

const profileMenuItems = [
	{ label: "My Profile", icon: UserCircleIcon },
	{ label: "Edit Profile", icon: Cog6ToothIcon },
	{ label: "Workspace", icon: BriefcaseIcon },
	{ label: "Help", icon: LifebuoyIcon },
	{ label: "Sign Out", icon: PowerIcon },
];

const navListMenuItems = [
	{
		title: "Java",
		subMenu: [
			{
				title: "Java Basics",
				description:
					"Java is a high-level, class-based, object-oriented programming language.",
			},
		],
	},
	{
		title: "Salesforce Admin",
		subMenu: [
			{
				title: "Salesforce Basics",
				description:
					"Salesforce Admin is a cloud-based software platform for customer relationship management.",
			},
		],
	},
	{
		title: "Business Systems Analyst",
		subMenu: [
			{
				title: "Business Systems Analyst Basics",

				description:
					"Business Systems Analyst is a professional who analyzes and designs information systems.",
			},
		],
	},
	{
		title: "Quality Analyst",
		subMenu: [
			{
				title: "Quality Analyst Basics",

				description:
					"Quality Analyst is a professional who ensures that products meet quality standards.",
			},
		],
	},
	{
		title: "Project Management",
		subMenu: [
			{
				title: "Project Management Basics",
				description:
					"Project Management is the process of planning, executing, and closing projects.",
			},
		],
	},
];

const navListItems = [
	{ label: "Payroll", icon: BanknotesIcon },
	{ label: "Recruitment", icon: UserGroupIcon },
	{ label: "Training", icon: Square3Stack3DIcon },
	{ label: "BPO & KPO", icon: GlobeAltIcon },
	{ label: "About Us", icon: InformationCircleIcon },
];

const iconHeight = "h-[24px] w-[24px]";

const ProfileMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				<Button
					variant="text"
					color="blue-gray"
					className="flex items-center gap-1 rounded-full py-1 px-1.5 bg-white"
				>
					<Avatar
						variant="circular"
						size="sm"
						alt="User avatar"
						className="h-10 w-10"
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80"
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`text-primary h-4 w-4 transition-transform ${
							isMenuOpen ? "rotate-180" : ""
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className="p-1 focus:outline-none border-0">
				{profileMenuItems.map(({ label, icon }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					return (
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex items-center gap-2 rounded ${
								isLastItem
									? "hover:bg-red-500/10"
									: "hover:bg-gray-500/10"
							}`}
						>
							{React.createElement(icon, {
								className: `h-4 w-4 ${
									isLastItem ? "text-red-500" : ""
								}`,
								strokeWidth: 2,
							})}
							<Typography
								as="span"
								variant="small"
								className="font-normal"
								color={isLastItem ? "red" : "inherit"}
							>
								{label}
							</Typography>
						</MenuItem>
					);
				})}
			</MenuList>
		</Menu>
	);
};

const NavListMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSubmenu, setActiveSubmenu] = useState(null);

	return (
		<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
			<MenuHandler>
				<Typography
					as="a"
					href="#"
					variant="small"
					className="font-normal"
				>
					<MenuItem className="hidden items-center gap-2 font-medium  lg:flex lg:rounded-full">
						<Square3Stack3DIcon className={iconHeight} />
						<span className="text-lg">Training</span>
						<ChevronDownIcon
							strokeWidth={2}
							className={`h-4 w-4 mt-[5px] transition-transform ${
								isMenuOpen ? "rotate-180" : ""
							}`}
						/>
					</MenuItem>
				</Typography>
			</MenuHandler>

			{/* MenuList must be relatively positioned container */}
			<MenuList className="p-1 focus:outline-none border-0 relative z-10">
				{navListMenuItems.map(({ title, subMenu }) => (
					<div
						key={title}
						className="relative group"
						onMouseEnter={() => setActiveSubmenu(title)}
						onMouseLeave={() => setActiveSubmenu(null)}
					>
						<MenuItem className="flex items-center gap-2 rounded hover:bg-gray-100">
							<Typography
								as="span"
								variant="small"
								className="font-normal"
								color="inherit"
							>
								{title}
							</Typography>
						</MenuItem>

						{subMenu && (
							<Card
								className={
									"absolute top-0 left-full ml-2 w-64 h-full shadow-lg bg-white flex flex-col justify-center p-4 z-20 " +
									`${activeSubmenu === title ? "" : ""}`
								}
							>
								<ul className="flex flex-col gap-4">
									{subMenu.map((item) => (
										<li key={item.title}>
											<Typography
												variant="small"
												className="font-medium text-gray-900"
											>
												{item.title}
											</Typography>
											<Typography
												variant="small"
												className="text-gray-600 text-sm"
											>
												{item.description}
											</Typography>
										</li>
									))}
								</ul>
							</Card>
						)}
					</div>
				))}
			</MenuList>
		</Menu>
	);

	{
		/* <MenuItem className="flex items-center gap-2 font-medium  lg:hidden">
		<Square3Stack3DIcon className={iconHeight} />
		Pages
	</MenuItem>

	<ul className="bg-white ml-6 flex flex-col gap-1 lg:hidden rounded-md no-border">
		{renderItems}
	</ul> */
	}

	const renderItems = navListMenuItems.map(({ title, description }) => (
		<a href="#" key={title}>
			<MenuItem>
				<Typography variant="h6" className="mb-1">
					{title}
				</Typography>
				<Typography
					variant="small"
					color="gray"
					className="font-normal"
				>
					{description}
				</Typography>
			</MenuItem>
		</a>
	));
};

const NavList = () => (
	<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
		{navListItems.map(({ label, icon }) =>
			label === "Training" ? (
				// <NavListMenu key={label} />
				<NestedMenu key={label} />
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

const SubMenuCard = () => {
	return (
		<Card className="p-4 shadow-lg w-80">
			<Typography variant="h6" className="mb-2 text-primary">
				What We Offer
			</Typography>
			<ul className="space-y-2">
				<li>
					<Typography variant="small" className="font-medium">
						Training Services
					</Typography>
					<Typography variant="small" color="gray">
						Upskill with our tailored training programs.
					</Typography>
				</li>
				<li>
					<Typography variant="small" className="font-medium">
						Payroll Management
					</Typography>
					<Typography variant="small" color="gray">
						Simplify your employee compensation process.
					</Typography>
				</li>
				<li>
					<Typography variant="small" className="font-medium">
						Recruitment Solutions
					</Typography>
					<Typography variant="small" color="gray">
						Find top talent for any role, fast.
					</Typography>
				</li>
			</ul>
		</Card>
	);
};

// ✅ Main Menu Component
const NestedMenu = () => {
	const [openMenu, setOpenMenu] = React.useState(false);
	const [activeSubmenu, setActiveSubmenu] = useState(null);

	return (
		<Menu allowHover open={openMenu} handler={setOpenMenu}>
			<MenuHandler>
				<Typography
					as="a"
					href="#"
					variant="small"
					className="font-normal"
				>
					<MenuItem className="hidden items-center gap-2 font-medium  lg:flex lg:rounded-full">
						<Square3Stack3DIcon className={iconHeight} />
						<span className="text-lg">Training</span>
						<ChevronDownIcon
							strokeWidth={2}
							className={`h-4 w-4 mt-[5px] transition-transform ${
								openMenu ? "rotate-180" : ""
							}`}
						/>
					</MenuItem>
				</Typography>
			</MenuHandler>

			<MenuList className="relative">
				<MenuItem>Menu Item 1</MenuItem>
				<MenuItem>Menu Item 2</MenuItem>

				{/* Nested Submenu */}
				<Menu
					placement="right-start"
					open={activeSubmenu}
					handler={setActiveSubmenu}
					allowHover
					offset={15}
				>
					<MenuHandler className="flex items-center justify-between">
						<MenuItem className="flex items-center justify-between w-full">
							Services Overview
						</MenuItem>
					</MenuHandler>

					<MenuList className="p-0 overflow-visible shadow-none">
						<SubMenuCard />
					</MenuList>
				</Menu>

				<MenuItem>Menu Item 3</MenuItem>
			</MenuList>
		</Menu>
	);
};

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
				<Typography
					as="a"
					href="#"
					className="text-4xl mx-4 cursor-pointer py-1.5 font-bold hover:!no-underline"
				>
					Vinsure Solutions
				</Typography>

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
					className="rounded-full bg-white text-primary btn-primary hover:shadow-md"
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
