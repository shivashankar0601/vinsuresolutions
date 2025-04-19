// import React, { useState } from "react";
// import {
// 	Button,
// 	Input,
// 	Textarea,
// 	Typography,
// 	IconButton,
// 	Card,
// } from "@material-tailwind/react";
// import { XMarkIcon } from "@heroicons/react/24/solid";
// import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";

// const ContactDrawer = () => {
// 	const [open, setOpen] = useState(false);

// 	const toggleDrawer = () => setOpen((prev) => !prev);

// 	return (
// 		<>
// 			{/* Contact Us Badge */}
// 			{/* <div className="fixed right-4 top-1/2 z-50">
// 				<Button
// 					onClick={toggleDrawer}
// 					size="sm"
// 					color="blue"
// 					className="rounded-full shadow-lg bg-primary-dark text-white"
// 				>
// 					Contact Us
// 				</Button>
// 			</div> */}

// 			<div className="fixed right-4 z-50 transform -translate-y-1/2">
// 				<Button
// 					onClick={toggleDrawer}
// 					// className="flex flex-col items-center gap-1 px-3 py-2 rounded-full shadow-xl bg-primary-dark text-white hover:scale-105 transition-transform"
// 					className="flex flex-col items-center gap-1 px-3 py-2 rounded-full shadow-xl bg-primary-dark text-white flex flex-row gap-2"
// 				>
// 					<ChatBubbleBottomCenterTextIcon className="h-4 w-4" />
// 					<span className="text-xs font-bold">Contact US</span>
// 				</Button>
// 			</div>

// 			{/* Drawer */}
// 			<div
// 				className={`fixed top-0 right-0 h-full w-full max-w-md z-50 transition-transform duration-500 ease-in-out transform ${
// 					open ? "translate-x-0" : "translate-x-full"
// 				} bg-white shadow-xl border-l border-gray-200`}
// 			>
// 				{/* Header */}
// 				<div className="flex items-center justify-between p-4 border-b bg-gray-50">
// 					<Typography variant="h5" color="blue-gray">
// 						Get in Touch
// 					</Typography>
// 					<IconButton variant="text" onClick={toggleDrawer}>
// 						<XMarkIcon className="h-6 w-6 text-gray-600" />
// 					</IconButton>
// 				</div>

// 				{/* Form */}
// 				<Card className="p-6 shadow-none bg-white h-full overflow-auto">
// 					<form className="flex flex-col gap-6">
// 						<div>
// 							<Typography
// 								variant="small"
// 								color="gray"
// 								className="mb-1 font-medium"
// 							>
// 								Name
// 							</Typography>
// 							<Input
// 								label="Your Name"
// 								required
// 								className="focus:border-primary"
// 							/>
// 						</div>

// 						<div>
// 							<Typography
// 								variant="small"
// 								color="gray"
// 								className="mb-1 font-medium"
// 							>
// 								Email
// 							</Typography>
// 							<Input
// 								label="Your Email"
// 								type="email"
// 								required
// 								className="focus:border-primary"
// 							/>
// 						</div>

// 						<div>
// 							<Typography
// 								variant="small"
// 								color="gray"
// 								className="mb-1 font-medium"
// 							>
// 								Message
// 							</Typography>
// 							<Textarea
// 								label="Your Message"
// 								rows={4}
// 								required
// 								className="focus:border-primary"
// 							/>
// 						</div>

// 						<Button
// 							color="blue"
// 							type="submit"
// 							className="mt-4 bg-primary hover:bg-primary-dark transition-all duration-300"
// 						>
// 							Send Message
// 						</Button>
// 					</form>
// 				</Card>
// 			</div>
// 		</>
// 	);
// };

// export default ContactDrawer;

import React, { useState } from "react";
import {
	Button,
	Card,
	Input,
	Textarea,
	Typography,
	IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";

const ContactDrawer = ({ open, toggleDrawer }) => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		// Simulate API call
		setTimeout(() => {
			setLoading(false);
			toast.success("Message sent successfully!");
			setForm({ name: "", email: "", message: "" });
			toggleDrawer();
		}, 1500);
	};

	return (
		<>
			{/* Backdrop */}
			{open && (
				<div
					className="fixed inset-0 bg-black bg-opacity-30 z-40"
					onClick={toggleDrawer}
				/>
			)}

			<div
				className={`fixed top-0 right-0 h-full w-full max-w-md z-50 transition-transform duration-500 ease-in-out transform ${
					open ? "translate-x-0" : "translate-x-full"
				} bg-white shadow-2xl border-l border-gray-200 flex flex-col`}
			>
				{/* Header */}
				<div className="flex items-center justify-between p-4 border-b bg-gray-50">
					<Typography variant="h5" color="blue-gray">
						Get in Touch
					</Typography>
					<IconButton variant="text" onClick={toggleDrawer}>
						<XMarkIcon className="h-6 w-6 text-gray-600" />
					</IconButton>
				</div>

				{/* Form */}
				<Card className="p-6 shadow-none bg-white flex-1 overflow-auto rounded-none">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col gap-6"
					>
						<div>
							<Input
								label="Your Name"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								crossOrigin=""
								color="blue"
							/>
						</div>
						<div>
							<Input
								label="Your Email"
								name="email"
								type="email"
								value={form.email}
								onChange={handleChange}
								required
								crossOrigin=""
								color="blue"
							/>
						</div>
						<div>
							<Textarea
								label="Your Message"
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={4}
								color="blue"
							/>
						</div>

						<Button
							type="submit"
							disabled={loading}
							className="bg-primary text-white hover:bg-primary-dark transition duration-300"
							fullWidth
						>
							{loading ? "Sending..." : "Send Message"}
						</Button>
					</form>
				</Card>
			</div>
		</>
	);
};

export default ContactDrawer;
