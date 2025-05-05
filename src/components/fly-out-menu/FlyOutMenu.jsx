import React, { useState, useEffect, useRef } from "react";
import { Typography, MenuItem } from "@material-tailwind/react";
import { Square3Stack3DIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import CourseCard from "./CourseCard";
import ServiceCard from "./ServiceCard";

const iconHeight = "h-[24px] w-[24px]";

const FlyOutMenu = ({ title, navListMenuItems, card }) => {
	const [activeMenu, setActiveMenu] = useState(false);
	const [activeSubmenu, setActiveSubmenu] = useState(null);
	const menuRef = useRef(null);
	const timeoutRef = useRef(null);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	const handleMenuEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setActiveMenu(true);
	};

	const handleMenuLeave = () => {
		timeoutRef.current = setTimeout(() => {
			if (!menuRef.current?.matches(":hover")) {
				setActiveMenu(false);
				setActiveSubmenu(null);
			}
		}, 300); // 300ms delay before closing
	};

	const handleItemEnter = (index) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setActiveSubmenu(index);
	};

	const handleItemLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setActiveSubmenu(null);
		}, 200);
	};

	const getCard = (card, menu) => {
		switch (card) {
			case "CourseCard":
				return <CourseCard course={menu} />;
			case "ServiceCard":
				return <ServiceCard service={menu} />;
		}
	};

	return (
		<div className="relative" ref={menuRef}>
			<Typography
				as="a"
				href="#"
				variant="small"
				className="font-normal"
				onMouseEnter={handleMenuEnter}
				onMouseLeave={handleMenuLeave}
			>
				<MenuItem className="hidden items-center gap-2 font-medium  lg:flex lg:rounded-full">
					<Square3Stack3DIcon className={iconHeight} />
					<span className="text-lg">{title}</span>
					<ChevronDownIcon
						strokeWidth={2}
						className={`h-4 w-4 mt-[5px] transition-transform ${
							activeMenu ? "rotate-180" : ""
						}`}
					/>
				</MenuItem>
			</Typography>

			{/* Main Menu Dropdown */}
			{activeMenu && (
				<div
					className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200"
					onMouseEnter={handleMenuEnter}
					onMouseLeave={handleMenuLeave}
				>
					{navListMenuItems.map((item, index) => (
						<div
							key={index}
							className="relative group text-primary"
							onMouseEnter={() => handleItemEnter(index)}
							onMouseLeave={handleItemLeave}
						>
							<button className="flex justify-between items-center w-full px-4 py-2 text-left hover:bg-gray-100 rounded">
								{item.title}
							</button>

							{/* Submenu */}
							{activeSubmenu === index && (
								<div
									className="absolute left-full top-0 ml-1 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-200"
									onMouseEnter={() => handleItemEnter(index)}
									onMouseLeave={handleItemLeave}
								>
									{/* <div className="p-3">
										<h3 className="font-bold mb-2 text-primary">
											{item.subMenu.title}
										</h3>
									</div> */}
									{getCard(card, item.subMenu)}
								</div>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default FlyOutMenu;
