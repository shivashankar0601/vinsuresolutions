import React, { useState } from "react";
import {
	Button,
	Input,
	Textarea,
	Typography,
	IconButton,
	Card,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

const ContactDrawer = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => setOpen((prev) => !prev);

	return (
		<>
			{/* Contact Us Badge */}
			{/* <div className="fixed right-4 top-1/2 z-50">
				<Button
					onClick={toggleDrawer}
					size="sm"
					color="blue"
					className="rounded-full shadow-lg bg-primary-lite text-white"
				>
					Contact Us
				</Button>
			</div> */}

			<div className="fixed right-4 z-50 transform -translate-y-1/2">
				<Button
					onClick={toggleDrawer}
					// className="flex flex-col items-center gap-1 px-3 py-2 rounded-full shadow-xl bg-primary-lite text-white hover:scale-105 transition-transform"
					className="flex flex-col items-center gap-1 px-3 py-2 rounded-full shadow-xl bg-primary-lite text-white"
				>
					<ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
					<span className="text-xs font-medium">Contact</span>
				</Button>
			</div>

			{/* Drawer */}
			<div
				className={`fixed top-0 right-0 h-full w-full max-w-md z-50 transition-transform duration-500 ease-in-out transform ${
					open ? "translate-x-0" : "translate-x-full"
				} bg-white shadow-lg border-l border-gray-300`}
			>
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b">
					<Typography variant="h5" color="blue-gray">
						Get in Touch
					</Typography>
					<IconButton variant="text" onClick={toggleDrawer}>
						<XMarkIcon className="h-6 w-6 text-gray-600" />
					</IconButton>
				</div>

				{/* Form */}
				<Card className="p-6 shadow-none">
					<form className="flex flex-col gap-4">
						<div>
							<Typography
								variant="small"
								color="gray"
								className="mb-1"
							>
								Name
							</Typography>
							<Input label="Your Name" required />
						</div>

						<div>
							<Typography
								variant="small"
								color="gray"
								className="mb-1"
							>
								Email
							</Typography>
							<Input label="Your Email" type="email" required />
						</div>

						<div>
							<Typography
								variant="small"
								color="gray"
								className="mb-1"
							>
								Message
							</Typography>
							<Textarea label="Your Message" rows={4} required />
						</div>

						<Button color="blue" type="submit" className="mt-2">
							Send Message
						</Button>
					</form>
				</Card>
			</div>
		</>
	);
};

export default ContactDrawer;
