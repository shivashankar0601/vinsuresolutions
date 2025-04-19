import React from "react";
import "./Home.css";
import { Typography } from "@material-tailwind/react";
import ContactBadge from "@components/contact-drawer/ContactBadge";
import Search from "@components/search/Search";
import WhyChooseUs from "@components/why-choose-us/WhyChooseUs";
import OurServices from "@components/our-services/OurServices";
import Testimonials from "@components/testimonials/Testimonials";
import { Toaster } from "react-hot-toast";

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

	return (
		<div className="space-y-10 my-10">
			<Toaster position="top-right" />
			<section className="min-h-[300px] p-10 odd:bg-primary odd:bg-opacity-20 even:bg-white odd:shadow-md rounded">
				{/* <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-[url('/assets/background.svg')] bg-center bg-contain bg-no-repeat"> */}
				<div className="grid mt-16">
					<div className="container mx-auto px-4 text-center">
						<Typography
							variant="h1"
							color="blue-gray"
							className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl text-gray-600"
						>
							Get ready to experience a new era of{" "}
							<span className="text-primary leading-snug ">
								talent acquisition
							</span>{" "}
							and{" "}
							<span className="text-primary leading-snug">
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
				<ContactBadge />
			</section>
			<section className="min-h-[300px] p-10 odd:bg-gray-50 even:bg-white odd:shadow-md rounded">
				<Search />
			</section>
			<section className="min-h-[300px] p-10 odd:bg-gray-50 even:bg-white odd:shadow-md rounded">
				<OurServices />
			</section>
			<section className="min-h-[300px] p-10 odd:bg-gray-50 even:bg-white odd:shadow-md rounded">
				<WhyChooseUs />
			</section>
			<section className="min-h-[300px] p-10 odd:bg-gray-50 even:bg-white odd:shadow-md rounded">
				<Testimonials />
			</section>
			{/* <div className="container mx-auto text-center">
					<Typography variant="h2" className="mb-6 text-gray-800">
						Our Services
					</Typography>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						<div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
							<RectangleStackIcon className="h-12 w-12 mb-4 text-primary-dark" />
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
							<UserCircleIcon className="h-12 w-12 mb-4 text-primary-dark" />
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
							<CommandLineIcon className="h-12 w-12 mb-4 text-primary-dark" />
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
				</div> */}
			{/* <section className="min-h-[300px] p-10 odd:bg-gray-50 even:bg-white shadow-md rounded">
				<div className="container mx-auto text-center">
					<Typography variant="h2" className="mb-6 text-gray-800">
						Join Our Team
					</Typography>
					<Typography
						variant="paragraph"
						className="mb-6 text-gray-600"
					>
						We are always looking for talented individuals to join
						our team. Check out our current job openings.
					</Typography>
					<Button
						color="primary"
						size="lg"
						className="rounded-full px-8 py-3 bg-primary-dark font-semibold"
					>
						View Openings
					</Button>
				</div>
			</section> */}
			{/* <section className="min-h-[300px] p-10 odd:bg-gray-50 even:bg-white shadow-md rounded">
				<div className="container mx-auto text-center">
					<Typography variant="h2" className="mb-6 text-gray-800">
						Contact Us
					</Typography>
					<Typography
						variant="paragraph"
						className="mb-6 text-gray-600"
					>
						Have questions? Get in touch with us today.
					</Typography>
					<Button
						color="primary"
						size="lg"
						className="rounded-full px-8 py-3 bg-primary-dark font-semibold"
					>
						Get in Touch
					</Button>
				</div>
			</section> */}
			{/* <section className="min-h-[300px] p-10 odd:bg-gray-50 even:bg-white shadow-md rounded">
				<div className="container mx-auto text-center">
					<Typography variant="h2" className="mb-6 text-gray-800">
						Follow Us
					</Typography>
					<Typography
						variant="paragraph"
						className="mb-6 text-gray-600"
					>
						Stay updated with our latest news and insights.
					</Typography>
					<Button
						color="primary"
						size="lg"
						className="rounded-full px-8 py-3 bg-primary-dark font-semibold"
					>
						Follow Us
					</Button>
				</div>
			</section> */}
		</div>
	);
};

export default Home;
