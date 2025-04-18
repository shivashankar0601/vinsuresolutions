import React, { useState, useEffect } from "react";
import {
	Navbar,
	Typography,
	Button,
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Avatar,
	Card,
	IconButton,
	Collapse,
} from "@material-tailwind/react";

import {
	UserCircleIcon,
	Square3Stack3DIcon,
	ChevronDownIcon,
	Cog6ToothIcon,
	InboxArrowDownIcon,
	LifebuoyIcon,
	PowerIcon,
	RocketLaunchIcon,
	Bars2Icon,
	BanknotesIcon,
	UserGroupIcon,
	IdentificationIcon,
	GlobeAltIcon,
	InformationCircleIcon,
	ServerStackIcon,
	BriefcaseIcon,
} from "@heroicons/react/24/solid";

const profileMenuItems = [
	{ label: "My Profile", icon: UserCircleIcon },
	{ label: "Edit Profile", icon: Cog6ToothIcon },
	{ label: "Workspace", icon: BriefcaseIcon },
	{ label: "Help", icon: LifebuoyIcon },
	{ label: "Sign Out", icon: PowerIcon },
];

const ProfileMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
			<MenuHandler>
				<Button
					variant="text"
					color="blue-gray"
					className="flex items-center gap-1 rounded-full py-1 px-1.5"
				>
					<Avatar
						variant="circular"
						size="sm"
						alt="User avatar"
						className="p-0.5 h-9 w-9"
						src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80"
					/>
					<ChevronDownIcon
						strokeWidth={2.5}
						className={`text-primary h-3 w-3 transition-transform ${
							isMenuOpen ? "rotate-180" : ""
						}`}
					/>
				</Button>
			</MenuHandler>
			<MenuList className="p-1">
				{profileMenuItems.map(({ label, icon }, key) => {
					const isLastItem = key === profileMenuItems.length - 1;
					return (
						<MenuItem
							key={label}
							onClick={closeMenu}
							className={`flex items-center gap-2 rounded ${
								isLastItem ? "hover:bg-red-500/10" : ""
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

const navListMenuItems = [
	{
		title: "Java",
		description:
			"Java is a high-level, class-based, object-oriented programming language.",
	},
	{
		title: "Salesforce Admin",
		description:
			"Salesforce Admin is a cloud-based software platform for customer relationship management.",
	},
	{
		title: "Business Systems Analyst",
		description:
			"Business Systems Analyst is a professional who analyzes and designs information systems.",
	},
	{
		title: "Quality Analyst",
		description:
			"Quality Analyst is a professional who ensures that products meet quality standards.",
	},
	{
		title: "Project Management",
		description:
			"Project Management is the process of planning, executing, and closing projects.",
	},
];

const NavListMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const renderItems = navListMenuItems.map(({ title, description }) => (
		<a href="#" key={title}>
			<MenuItem>
				<Typography variant="h6" color="blue-gray" className="mb-1">
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

	return (
		<>
			<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
				<MenuHandler>
					<Typography
						as="a"
						href="#"
						variant="small"
						className="font-normal"
					>
						<MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
							<Square3Stack3DIcon className="h-[18px] w-[18px]" />
							<span className="font-bold">Training</span>
							<ChevronDownIcon
								strokeWidth={2}
								className={`h-3 w-3 transition-transform ${
									isMenuOpen ? "rotate-180" : ""
								}`}
							/>
						</MenuItem>
					</Typography>
				</MenuHandler>
				<MenuList className="hidden w-[40rem] grid-cols-1 overflow-visible lg:grid border-0 rounded-lg shadow-lg bg-white p-4">
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full hover:!border-0">
						{navListMenuItems.map(
							({ title, description, icon: Icon }) => (
								<li key={title} className="relative group">
									<a
										href="#"
										className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition-all p-4 rounded-lg"
									>
										{Icon && (
											<div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
												<Icon className="h-5 w-5" />
											</div>
										)}
										<span className="font-medium text-blue-gray-800">
											{title}
										</span>
									</a>

									{/* Tooltip */}
									<div className="absolute z-10 hidden group-hover:block bg-white text-sm text-gray-700 shadow-md rounded p-3 w-64 -bottom-24 left-0">
										{description}
									</div>
								</li>
							)
						)}
					</ul>
				</MenuList>
			</Menu>

			<MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
				<Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />
				Pages
			</MenuItem>

			<ul className="bg-white ml-6 flex flex-col gap-1 lg:hidden rounded-md no-border">
				{renderItems}
			</ul>
		</>
	);
};

const navListItems = [
	{ label: "Payroll", icon: BanknotesIcon },
	{ label: "Recruitment", icon: UserGroupIcon },
	{ label: "BPO & KPO", icon: GlobeAltIcon },
	{ label: "About Us", icon: InformationCircleIcon },
];

const NavList = () => (
	<ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
		<NavListMenu />
		{navListItems.map(({ label, icon }) => (
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
					<span className="vs-nav-label">{label}</span>
				</MenuItem>
			</Typography>
		))}
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
		<Navbar className="vs-nav border-0 border-radius-none py-1 rounded-none">
			<div className="relative mx-auto flex items-center justify-between container">
				<Typography
					as="a"
					href="#"
					className="text-2xl mx-4 cursor-pointer py-1.5 font-bold hover:!no-underline"
				>
					Vinsure Solutions
				</Typography>

				<div className="hidden lg:block">
					<NavList />
				</div>

				{window.innerWidth < 640 && (
					<IconButton
						size="sm"
						color="blue-gray"
						variant="text"
						onClick={toggleIsNavOpen}
						className="ml-auto mr-2 lg:hidden"
					>
						<Bars2Icon className="h-6 w-6" />
					</IconButton>
				)}

				<ProfileMenu />
			</div>

			<Collapse open={isNavOpen} className="overflow-scroll">
				<NavList />
			</Collapse>
		</Navbar>
	);
};

export default Header;
