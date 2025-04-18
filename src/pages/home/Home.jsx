import React from "react";
import "./Home.css";
import {
	Navbar,
	Collapse,
	Button,
	IconButton,
	Typography,
	Input,
} from "@material-tailwind/react";
import {
	RectangleStackIcon,
	UserCircleIcon,
	CommandLineIcon,
	Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import circles from "@assets/background.svg";
import ContactDrawer from "@components/contact-drawer/ContactDrawer";

function NavItem({ children }) {
	return (
		<li>
			<Typography
				as="a"
				href="#"
				variant="paragraph"
				color="blue-gray"
				className="text-blue-gray-700 flex items-center gap-2 font-medium"
			>
				{children}
			</Typography>
		</li>
	);
}

const Home = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen((cur) => !cur);

	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpen(false)
		);
	}, []);

	console.log(circles);

	return (
		<>
			<section className="p-8 pt-4">
				{/* <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/assets/background.svg')] bg-center bg-contain bg-no-repeat"> */}
				<div className="grid mt-16">
					<div className="container mx-auto px-4 text-center">
						<Typography
							variant="h1"
							color="blue-gray"
							className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
						>
							Get ready to experience a new era of{" "}
							<span className="text-primary-lite leading-snug ">
								talent acquisition
							</span>{" "}
							and{" "}
							<span className="text-primary-lite leading-snug">
								staffing excellence
							</span>
							.
						</Typography>
						<Typography
							variant="lead"
							className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
						>
							The time is now to hire with purpose. To grow with
							intention. To lead with the right people by your
							side.
						</Typography>
					</div>
				</div>
				<ContactDrawer />
			</section>
			<section className="bg-white py-8 px-4 lg:px-0">
				<div className="container mx-auto text-center">
					<Typography variant="h2" className="mb-6 text-gray-800">
						Our Services
					</Typography>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
							<RectangleStackIcon className="h-12 w-12 mb-4 text-primary-lite" />
							<Typography
								variant="h5"
								className="mb-2 text-gray-800"
							>
								Recruitment Process Outsourcing
							</Typography>
							<Typography
								variant="paragraph"
								className="text-gray-600"
							>
								Streamline your hiring process with our RPO
								solutions.
							</Typography>
						</div>
						<div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
							<UserCircleIcon className="h-12 w-12 mb-4 text-primary-lite" />
							<Typography
								variant="h5"
								className="mb-2 text-gray-800"
							>
								Talent Acquisition Consulting
							</Typography>
							<Typography
								variant="paragraph"
								className="text-gray-600"
							>
								Get expert guidance on your talent acquisition
								strategy.
							</Typography>
						</div>
						<div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
							<CommandLineIcon className="h-12 w-12 mb-4 text-primary-lite" />
							<Typography
								variant="h5"
								className="mb-2 text-gray-800"
							>
								Talent Mapping & Market Intelligence
							</Typography>
							<Typography
								variant="paragraph"
								className="text-gray-600"
							>
								Gain insights into the talent market and make
								informed decisions.
							</Typography>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
