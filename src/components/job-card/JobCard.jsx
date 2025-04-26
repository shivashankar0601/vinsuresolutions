import { BookmarkIcon } from "@heroicons/react/24/outline";
import { Button, Typography, Card } from "@material-tailwind/react";
import "./JobCard.css";

const JobCard = ({ job }) => {
	const {
		id,
		title,
		category,
		subCategory,
		workType,
		posted,
		description,
		portalLink,
	} = job;

	const postedDate = new Date(posted).toLocaleDateString("en-IN", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	const postedTime = new Date(posted).toLocaleTimeString("en-IN", {
		hour: "2-digit",
		minute: "2-digit",
	});

	return (
		<Card className="p-5 no-border rounded-lg shadow hover:shadow-lg transition duration-300 cursor-pointer">
			<div className="flex justify-between items-start mb-2">
				<div>
					<Typography variant="h5" className="text-primary">
						{title}
					</Typography>
					<Typography
						variant="small"
						className="text-gray-600 font-medium mt-2"
					>
						{category}
						{subCategory ? ` › ${subCategory}` : ""}
					</Typography>
				</div>
				<BookmarkIcon className="h-6 w-6 text-gray-400 hover:text-primary cursor-pointer" />
			</div>

			<Typography className="text-sm text-gray-700 mb-3">
				{description.length > 180
					? description.slice(0, 180) + "..."
					: description}
			</Typography>

			<div className="flex flex-wrap text-xs text-gray-500 gap-x-12 gap-y-1 mb-4">
				<span>
					<strong>Work Type:</strong> {workType}
				</span>
				<span className="mt-2">
					<strong>Posted:</strong> {postedDate}, {postedTime}
				</span>
				{/* <span>
					<strong>Client ID:</strong> {job.clientId.slice(0, 8)}...
				</span> */}
			</div>

			<div className="flex flex-wrap gap-3 flex-row-reverse">
				{/* <Button
					size="sm"
					color="blue"
					variant="outlined"
					className="text-sm"
					onClick={() => window.open(`/jobs/${id}`, "_blank")}
				>
					Read More
				</Button> */}
				<Button
					size="sm"
					className="text-sm bg-primary text-white hover:bg-primary-dark"
					onClick={() => window.open(`/apply/${id}`, "_blank")}
				>
					Apply
				</Button>
				{portalLink && (
					<Button
						size="sm"
						variant="text"
						className="text-sm text-primary border hover:!underline"
						onClick={() => window.open(portalLink, "_blank")}
					>
						View on Portal
					</Button>
				)}
			</div>
		</Card>
	);
};

export default JobCard;
