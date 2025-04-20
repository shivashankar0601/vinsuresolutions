import React, { useState } from "react";
import {
	Button,
	Card,
	Input,
	Textarea,
	Typography,
	IconButton,
	Switch,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";

const ContactDrawer = ({ open, toggleDrawer }) => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
		whatsapp: false,
		tnc: false,
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
					className="fixed inset-0 bg-black opacity-30 z-40"
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
					<Typography
						variant="h5"
						className="text-primary text-2xl font-semibold"
					>
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
						<div className="mb-4">
							<Input
								label="Your Name"
								placeholder="John Doe"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								crossOrigin=""
								className="border-1 border-gray-50 outline-gray-200 focus:ring-0 shadow-md rounded-lg"
							/>
						</div>
						<div className="mb-4">
							<Input
								label="Your Email"
								placeholder="john.doe@lnsols.com"
								name="email"
								type="email"
								value={form.email}
								onChange={handleChange}
								required
								crossOrigin=""
								className="border-1 border-gray-50 outline-gray-200 focus:ring-0 shadow-md rounded-lg "
							/>
						</div>
						<div className="mb-4">
							<Textarea
								label="Your Message"
								placeholder="Type your message here..."
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={4}
								className="border-1 border-gray-50 outline-gray-200 focus:ring-0 shadow-md rounded-lg"
							/>
						</div>
						<div className="mt-10">
							<input
								type="checkbox"
								value={form.whatsapp}
								onChange={handleChange}
								id="whatsapp"
								className="mr-2 cursor-pointer"
								name="whatsapp"
								defaultChecked
							/>
							<label
								htmlFor="whatsapp"
								className="text-sm text-gray-700 cursor-pointer"
							>
								I agree to be contacted via{" "}
								<span className="font-medium text-green-600">
									WhatsApp
								</span>
								.
							</label>
						</div>
						<div className="mb-4">
							<input
								type="checkbox"
								value={form.tnc}
								onChange={handleChange}
								id="tnc"
								className="mr-2 cursor-pointer"
								name="tnc"
								defaultChecked
								required
							/>
							<label
								htmlFor="tnc"
								className="text-sm cursor-pointer"
							>
								I agree to be contacted by VinsureSolutions
								regarding this submission and accept the{" "}
								<a href="#" className="text-primary underline">
									terms & conditions
								</a>
								.
							</label>
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
