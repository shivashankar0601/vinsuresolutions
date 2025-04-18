// import React, { useState } from "react";
// import {
// 	Menu,
// 	MenuHandler,
// 	MenuList,
// 	MenuItem,
// 	Collapse,
// 	Typography,
// 	ListItem,
// } from "@material-tailwind/react";
// import {
// 	ChevronDownIcon,
// 	Bars4Icon,
// 	GlobeAmericasIcon,
// 	NewspaperIcon,
// 	PhoneIcon,
// 	RectangleGroupIcon,
// 	SquaresPlusIcon,
// 	SunIcon,
// 	TagIcon,
// 	UserGroupIcon,
// } from "@heroicons/react/24/solid";

// const navListMenuItems = [
// 	{
// 		title: "Products",
// 		description: "Find the perfect solution for your needs.",
// 		icon: SquaresPlusIcon,
// 	},
// 	{
// 		title: "About Us",
// 		description: "Meet and learn about our dedication",
// 		icon: UserGroupIcon,
// 	},
// 	{
// 		title: "Blog",
// 		description: "Find the perfect solution for your needs.",
// 		icon: Bars4Icon,
// 	},
// 	{
// 		title: "Services",
// 		description: "Learn how we can help you achieve your goals.",
// 		icon: SunIcon,
// 	},
// 	{
// 		title: "Support",
// 		description: "Reach out to us for assistance or inquiries",
// 		icon: GlobeAmericasIcon,
// 	},
// 	{
// 		title: "Contact",
// 		description: "Get in touch with our support team.",
// 		icon: PhoneIcon,
// 	},
// 	{
// 		title: "News",
// 		description: "Read insightful articles, tips, and expert opinions.",
// 		icon: NewspaperIcon,
// 	},
// 	{
// 		title: "More Products",
// 		description: "Explore our product range.",
// 		icon: RectangleGroupIcon,
// 	},
// 	{
// 		title: "Special Offers",
// 		description: "Explore limited-time deals and bundles",
// 		icon: TagIcon,
// 	},
// ];

// const NavListMenu = () => {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
// 	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// 	const renderItems = navListMenuItems.map(
// 		({ icon, title, description }, index) => (
// 			<a href="#" key={index}>
// 				<MenuItem className="flex items-center gap-3 rounded-lg">
// 					<div className="rounded-lg bg-blue-gray-50 p-2">
// 						{React.createElement(icon, {
// 							className: "h-6 w-6 text-gray-900",
// 						})}
// 					</div>
// 					<div>
// 						<Typography
// 							variant="h6"
// 							color="blue-gray"
// 							className="text-sm font-bold"
// 						>
// 							{title}
// 						</Typography>
// 						<Typography
// 							variant="paragraph"
// 							className="text-xs font-medium text-blue-gray-500"
// 						>
// 							{description}
// 						</Typography>
// 					</div>
// 				</MenuItem>
// 			</a>
// 		)
// 	);

// 	return (
// 		<>
// 			<Menu
// 				open={isMenuOpen}
// 				handler={setIsMenuOpen}
// 				offset={{ mainAxis: 20 }}
// 				placement="bottom"
// 				allowHover
// 			>
// 				<MenuHandler>
// 					<Typography
// 						as="div"
// 						variant="small"
// 						className="font-medium"
// 					>
// 						<ListItem
// 							className="flex items-center gap-2 py-2 pr-4 text-gray-900"
// 							selected={isMenuOpen || isMobileMenuOpen}
// 							onClick={() => setIsMobileMenuOpen((prev) => !prev)}
// 						>
// 							Resources
// 							<ChevronDownIcon
// 								className={`h-3 w-3 transition-transform ${
// 									isMenuOpen || isMobileMenuOpen
// 										? "rotate-180"
// 										: ""
// 								}`}
// 							/>
// 						</ListItem>
// 					</Typography>
// 				</MenuHandler>
// 				<MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
// 					<ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
// 				</MenuList>
// 			</Menu>

// 			<div className="block lg:hidden">
// 				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
// 			</div>
// 		</>
// 	);
// };

// export default NavListMenu;
