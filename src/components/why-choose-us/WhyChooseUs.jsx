import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
	StarIcon,
	CheckCircleIcon,
	UsersIcon,
	ShieldCheckIcon,
	ClockIcon,
} from "@heroicons/react/24/solid";

const features = [
	{
		icon: <StarIcon className="h-8 w-8 text-primary" />,
		title: "Trusted by Industry Leaders",
		description:
			"We’ve partnered with top companies and placed thousands of professionals across industries.",
	},
	{
		icon: <CheckCircleIcon className="h-8 w-8 text-primary" />,
		title: "Proven Recruitment Success",
		description:
			"High placement rates with tailored hiring solutions for both permanent and contract roles.",
	},
	{
		icon: <UsersIcon className="h-8 w-8 text-primary" />,
		title: "People-Centric Approach",
		description:
			"We prioritize people, offering personal guidance, support, and career transformation.",
	},
	{
		icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
		title: "Secure & Compliant Payroll",
		description:
			"Our payroll systems are transparent, reliable, and meet all compliance standards.",
	},
	{
		icon: <ClockIcon className="h-8 w-8 text-primary" />,
		title: "Quick Turnaround",
		description:
			"Our agile team delivers results fast without compromising on quality.",
	},
];

const WhyChooseUs = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-6 text-center">
				<Typography variant="h2" className="text-gray-800 mb-6">
					Why Choose Vinsure Solutions ?
				</Typography>
				<Typography
					variant="lead"
					className="text-gray-600 max-w-3xl mx-auto mb-12"
				>
					We don’t just provide services — we deliver success. Here’s
					why organizations and job seekers trust us.
				</Typography>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{features.map(({ icon, title, description }) => (
						<Card
							key={title}
							shadow={false}
							className="p-6 text-left bg-white hover:bg-gray-100 border-primary-lite transition-all rounded-xl cursor-pointer"
						>
							<div className="mb-4">{icon}</div>
							<Typography
								variant="h5"
								className="mb-2 text-primary"
							>
								{title}
							</Typography>
							<Typography className="text-gray-600">
								{description}
							</Typography>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
