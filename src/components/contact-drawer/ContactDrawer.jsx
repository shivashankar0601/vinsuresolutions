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
		mobile: "",
		message: "",
		whatsapp: false,
		tnc: true,
	});
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);

	const validate = () => {
		const newErrors = {};
		if (!form.name.trim() || !/^[A-Za-z\s]/.test(form.name))
			newErrors.name = "Name is required. Only alphabets are allowed.";
		if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
			newErrors.email = "Email is required. Please enter a valid email.";
		if (!form.mobile || !/^[6-9]\d{9}$/.test(form.mobile))
			newErrors.mobile =
				"Mbile number is required. Enter a valid Indian mobile number.";
		if (!form.message.trim())
			newErrors.message = "Message is required. Enter a valid message.";
		if (!form.tnc) newErrors.tnc = "Please accept the terms & conditions.";
		return newErrors;
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setForm({ ...form, [name]: type === "checkbox" ? checked : value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setErrors({});
		setLoading(true);

		// Simulated API
		setTimeout(() => {
			setLoading(false);
			toast.success("Message sent successfully!");
			setForm({
				name: "",
				email: "",
				mobile: "",
				message: "",
				whatsapp: true,
				tnc: true,
			});
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
						className="flex flex-col gap-3"
					>
						<div>
							<label htmlFor="name" className="cursor-pointer">
								Your Name{" "}
								<span className="text-red-500">*</span>
							</label>
							<Input
								placeholder="John Doe"
								id="name"
								name="name"
								value={form.name}
								onChange={handleChange}
								labelProps={{ className: "!h-0" }}
								className="p-1 pl-2 border-1 border-gray-50 outline-gray-300 focus:ring-0 shadow-md rounded-lg"
							/>
							{errors.name && (
								<Typography
									variant="small"
									color="red"
									className="mt-1"
								>
									{errors.name}
								</Typography>
							)}
						</div>
						<div>
							<label htmlFor="email" className="cursor-pointer">
								Your Email{" "}
								<span className="text-red-500">*</span>
							</label>
							<Input
								placeholder="john.doe@lnsols.com"
								type="email"
								id="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								labelProps={{
									className: "!h-0",
								}}
								className="p-1 pl-2 border-1 border-gray-50 outline-gray-300 focus:ring-0 shadow-md rounded-lg "
							/>
							{errors.email && (
								<Typography
									variant="small"
									color="red"
									className="mt-1"
								>
									{errors.email}
								</Typography>
							)}
						</div>
						<div>
							<label htmlFor="mobile" className="cursor-pointer">
								Mobile Number{" "}
								<span className="text-red-500">*</span>
							</label>
							<Input
								id="mobile"
								name="mobile"
								type="tel"
								placeholder="e.g. 9876543210"
								value={form.mobile}
								onChange={handleChange}
								labelProps={{
									className: "!h-0",
								}}
								className="p-1 pl-2 border-1 border-gray-50 outline-gray-300 focus:ring-0 shadow-md rounded-lg"
								error={!!errors.mobile}
							/>
							{errors.mobile && (
								<Typography
									variant="small"
									color="red"
									className="mt-1"
								>
									{errors.mobile}
								</Typography>
							)}
						</div>
						<div>
							<label htmlFor="message" className="cursor-pointer">
								Your Message{" "}
								<span className="text-red-500">*</span>
							</label>
							<Textarea
								placeholder="Type your message here..."
								name="message"
								id="message"
								value={form.message}
								onChange={handleChange}
								rows={4}
								labelProps={{ className: "!h-0" }}
								className="p-1 pl-2 border-1 border-gray-50 outline-gray-300 focus:ring-0 shadow-md rounded-lg"
							/>
							{errors.message && (
								<Typography
									variant="small"
									color="red"
									className="mt-1"
								>
									{errors.message}
								</Typography>
							)}
						</div>
						<div className="mt-2">
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
								className="cursor-pointer text-sm text-gray-700 cursor-pointer"
							>
								I agree to be contacted via{" "}
								<span className="font-medium text-green-600">
									WhatsApp
								</span>
								.
							</label>
						</div>
						<div>
							<input
								type="checkbox"
								value={form.tnc}
								onChange={handleChange}
								id="tnc"
								className="mr-2 cursor-pointer"
								name="tnc"
								defaultChecked
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
						{errors.tnc && (
							<Typography
								variant="small"
								color="red"
								className="-mt-4 mb-2"
							>
								{errors.tnc}
							</Typography>
						)}
						<Button
							type="submit"
							disabled={loading}
							className="bg-primary text-white hover:bg-primary-dark transition duration-300"
							fullWidth
						>
							{loading ? "Submitting..." : "Submit"}
						</Button>
					</form>
				</Card>
			</div>
		</>
	);
};

export default ContactDrawer;
