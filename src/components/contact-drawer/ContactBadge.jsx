import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import ContactDrawer from "./ContactDrawer";

const ContactBadge = () => {
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => setOpen((prev) => !prev);

	return (
		<>
			<div className="fixed right-4 top-1/2 z-50 transform -translate-y-1/2">
				<Button
					onClick={toggleDrawer}
					color="blue"
					className="rounded-full p-3 shadow-xl bg-primary-lite text-white flex items-center gap-2"
				>
					<EnvelopeIcon className="h-5 w-5" />
					<span className="hidden md:inline-block">Contact Us</span>
				</Button>
			</div>

			<ContactDrawer open={open} toggleDrawer={toggleDrawer} />
		</>
	);
};

export default ContactBadge;
