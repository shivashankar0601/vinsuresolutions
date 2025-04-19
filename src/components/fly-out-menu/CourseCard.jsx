import React from "react";
import { Typography, Card, Chip } from "@material-tailwind/react";

import { CheckCircleIcon } from "@heroicons/react/24/solid";

const CourseCard = ({ course }) => {
	if (!course) return null;

	const { title, description, duration, level, certification } = course;

	return (
		<Card className="p-5 bg-white shadow-xl rounded-lg flex flex-col justify-center">
			<Typography variant="h5" className="text-blue-900 mb-2">
				{title}
			</Typography>

			<Typography
				variant="small"
				className="text-gray-600 text-sm leading-relaxed mb-4"
			>
				{description}
			</Typography>

			<div className="mt-auto space-y-2">
				<div className="flex items-center justify-between text-sm">
					<Typography className="text-gray-800 font-medium">
						Duration:
					</Typography>
					<Chip
						variant="ghost"
						size="sm"
						value={duration}
						className="bg-gray-100 text-blue-700"
					/>
				</div>

				<div className="flex items-center justify-between text-sm">
					<Typography className="text-gray-800 font-medium">
						Level:
					</Typography>
					<Chip
						variant="ghost"
						size="sm"
						value={level}
						className="bg-gray-100 text-green-800"
					/>
				</div>

				{certification && (
					<div className="flex items-center gap-2 text-sm mt-2 text-green-600 font-medium">
						<CheckCircleIcon className="h-4 w-4" />
						Certification Included
					</div>
				)}
			</div>
		</Card>
	);
};

export default CourseCard;
