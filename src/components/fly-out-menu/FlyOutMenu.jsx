import React from "react";
import {
	Menu,
	MenuHandler,
	MenuList,
	MenuItem,
	Card,
	Typography,
	Button,
} from "@material-tailwind/react";
import {
	ChevronRightIcon,
	CursorArrowRaysIcon,
} from "@heroicons/react/24/solid";

const submenuItems = [
	{
		title: "Material HTML",
		description: "Components & widgets for plain HTML.",
	},
	{
		title: "Material React",
		description: "Rich UI components for React.",
	},
	{
		title: "Tailwind PRO",
		description: "Premium UI kit for high-end apps.",
	},
];

const SubMenu = () => (
	<div className="absolute left-full top-0 z-50 w-[30rem] grid grid-cols-3 gap-4 rounded-lg bg-white p-4 shadow-lg">
		<Card
			color="gray"
			shadow={false}
			className="col-span-1 flex flex-col items-center justify-center rounded-xl p-4"
		>
			<CursorArrowRaysIcon className="h-10 w-10 text-white" />
			<Typography variant="h6" className="mt-2 text-white">
				Tailwind PRO
			</Typography>
		</Card>
		<div className="col-span-2 flex flex-col gap-2">
			{submenuItems.map(({ title, description }) => (
				<div key={title} className="p-2 hover:bg-gray-100 rounded">
					<Typography variant="h6" color="blue-gray">
						{title}
					</Typography>
					<Typography
						variant="small"
						color="gray"
						className="text-sm"
					>
						{description}
					</Typography>
				</div>
			))}
		</div>
	</div>
);

export default function FlyoutMenu() {
	const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

	return (
		<div className="relative inline-block">
			<Menu allowHover>
				<MenuHandler>
					<Button variant="text" className="capitalize font-medium">
						Services
					</Button>
				</MenuHandler>
				<MenuList className="w-56 p-2">
					<div
						className="relative group"
						onMouseEnter={() => setIsSubMenuOpen(true)}
						onMouseLeave={() => setIsSubMenuOpen(false)}
					>
						<MenuItem className="flex items-center justify-between">
							Technology
							<ChevronRightIcon className="h-4 w-4" />
						</MenuItem>

						{isSubMenuOpen && <SubMenu />}
					</div>
					<MenuItem>Consulting</MenuItem>
					<MenuItem>Support</MenuItem>
				</MenuList>
			</Menu>
		</div>
	);
}
