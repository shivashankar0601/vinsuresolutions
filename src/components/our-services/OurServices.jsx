import {
	Card,
	CardHeader,
	CardBody,
	Typography,
} from "@material-tailwind/react";
import {
	AcademicCapIcon,
	BriefcaseIcon,
	CurrencyDollarIcon,
	PhoneIcon,
	BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

const services = [
	{
		title: "Training & Upskilling",
		description:
			"Industry-aligned training programs to empower job seekers and professionals with in-demand skills.",
		icon: <AcademicCapIcon className="h-10 w-10 text-primary" />,
	},
	{
		title: "Recruitment Solutions",
		description:
			"Connecting top talent with top companies — permanent and contract staffing made seamless.",
		icon: <BriefcaseIcon className="h-10 w-10 text-primary" />,
	},
	{
		title: "Payroll Management",
		description:
			"Accurate, compliant, and hassle-free payroll solutions tailored to your business needs.",
		icon: <CurrencyDollarIcon className="h-10 w-10 text-primary" />,
	},
	{
		title: "BPO Services",
		description:
			"Efficient back-office operations that let you focus on your core business strategies.",
		icon: <PhoneIcon className="h-10 w-10 text-primary" />,
	},
	{
		title: "KPO Services",
		description:
			"Leverage domain expertise for knowledge-based processes like research, analytics, and more.",
		icon: <BuildingOffice2Icon className="h-10 w-10 text-primary" />,
	},
];

const OurServices = () => {
	return (
		<section className="py-16">
			<div className="container mx-auto px-6">
				<div className="relative flex flex-col items-center justify-center">
					<div className="max-w-2xl w-full text-center mb-8">
						<Typography
							variant="h2"
							className="text-gray-800 font-semibold"
						>
							Our Services
						</Typography>
						<Typography
							variant="paragraph"
							className="text-gray-600 mt-2 mb-2"
						>
							Discover professional solutions tailored to elevate
							your business and empower your workforce.
						</Typography>
					</div>
				</div>

				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
					{services.map(({ title, description, icon }) => (
						<Card
							key={title}
							shadow={true}
							className="group hover:shadow-xl transition-shadow duration-300 bg-gray-50 hover:bg-gray-100 cursor-pointer"
						>
							<CardHeader
								floated={false}
								className="flex items-center justify-center h-24 bg-gray-50 shadow-none group-hover:bg-gray-100"
							>
								{icon}
							</CardHeader>
							<CardBody className="bg-gray-50 group-hover:bg-gray-100">
								<Typography
									variant="h5"
									className="mb-2 text-primary"
								>
									{title}
								</Typography>
								<Typography className="text-gray-700">
									{description}
								</Typography>
							</CardBody>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurServices;
