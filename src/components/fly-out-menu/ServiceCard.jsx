import { Card, Typography, Chip, Button } from "@material-tailwind/react";
import { CheckCircleIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
	if (!service) return null;

	const { title, description, keyFeatures } = service;

	const navigate = useNavigate();

	return (
		<Card className="relative bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-xl p-6 max-w-md transition hover:shadow-2xl hover:scale-[1.02] duration-300">
			{/* Icon */}
			<div className="absolute -top-5 left-5 bg-blue-100 p-3 rounded-full shadow-md">
				<BriefcaseIcon className="h-6 w-6 text-blue-700" />
			</div>

			{/* Title */}
			<Typography
				variant="h5"
				className="text-blue-900 font-bold mt-4 mb-2"
			>
				{title}
			</Typography>

			{/* Description */}
			<Typography
				variant="paragraph"
				className="text-gray-700 text-sm mb-4"
			>
				{description}
			</Typography>

			{/* Key Features */}
			{keyFeatures?.length > 0 && (
				<div className="mb-4">
					<Typography className="text-gray-800 font-medium mb-2 text-sm">
						What We Offer:
					</Typography>
					<ul className="space-y-2">
						{keyFeatures.map((feature, index) => (
							<li
								key={index}
								className="flex items-center text-sm text-gray-700"
							>
								<CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
								{feature}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Call to Action */}
			<Button
				size="sm"
				className="mt-2 text-primary"
				fullWidth
				ripple={true}
				onClick={() => {
					navigate("/services", {
						state: {
							service: service,
						},
						replace: true,
					});
					window.scrollTo(0, 0);
				}}
			>
				Learn More
			</Button>
		</Card>
	);
};

export default ServiceCard;
