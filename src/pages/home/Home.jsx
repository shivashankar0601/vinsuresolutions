import React from "react";
import "./Home.css";
import { Typography, Button } from "@material-tailwind/react";
import ContactBadge from "@components/contact-drawer/ContactBadge";
import Search from "@components/search/Search";
import WhyChooseUs from "@components/why-choose-us/WhyChooseUs";
import OurServices from "@components/our-services/OurServices";
import Testimonials from "@components/testimonials/Testimonials";
import {
	CommandLineIcon,
	RectangleStackIcon,
	UserCircleIcon,
} from "@heroicons/react/24/solid";
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
			<section className="min-h-[300px] p-10 even:bg-gray-50 ">
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
			<section className="min-h-[300px] p-10 even:bg-gray-50 ">
				<Search />
			</section>
			<section className="min-h-[300px] p-10 even:bg-gray-50 ">
				<OurServices />
			</section>
			<section className="min-h-[300px] p-10 even:bg-gray-50 ">
				<WhyChooseUs />
			</section>
			<section className="min-h-[300px] p-10 even:bg-gray-50 ">
				<Testimonials />
			</section>
			{/* <section className="min-h-[300px] p-10 even:bg-gray-50">
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
		</div>
	);
};

export default Home;
