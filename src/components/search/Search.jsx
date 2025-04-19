import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Card,
	Input,
	List,
	ListItem,
	Typography,
	Button,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const JOB_ROLES = [
	"Software Developer",
	"HR Manager",
	"Digital Marketing Executive",
	"Customer Support",
	"Data Analyst",
	"Recruiter",
	"Operations Manager",
	"Business Analyst",
	"Java Developer",
	"Full Stack Developer",
];

const Search = () => {
	const [query, setQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		const val = e.target.value;
		setQuery(val);
		if (val.length > 1) {
			const filtered = JOB_ROLES.filter((role) =>
				role.toLowerCase().includes(val.toLowerCase())
			);
			setSuggestions(
				filtered.sort((a, b) =>
					a.toLowerCase().localeCompare(b.toLowerCase())
				)
			);
		} else {
			setSuggestions([]);
		}
	};

	const handleSearch = () => {
		if (query.trim()) {
			navigate(`/job-search?search=${encodeURIComponent(query.trim())}`);
		}
	};

	const handleSuggestionClick = (role) => {
		setQuery(role);
		setSuggestions([]);
		navigate(`/job-search?search=${encodeURIComponent(role)}`);
	};

	return (
		<section className="relative flex flex-col items-center justify-center bg-gray-50 py-20 px-4 md:px-10">
			<div className="max-w-2xl w-full text-center mb-8">
				<Typography
					variant="h2"
					className="text-gray-800 font-semibold"
				>
					Find Your Next Opportunity
				</Typography>
				<Typography variant="paragraph" className="text-gray-600 mt-2">
					Explore jobs that match your skills and passion.
				</Typography>
			</div>

			<Card className="p-4 w-full max-w-4xl shadow-md rounded-xl">
				<div className="flex items-center gap-2">
					<Input
						type="text"
						placeholder="Search job titles e.g. HR Manager"
						value={query}
						onChange={handleInputChange}
						className="flex-1 border-0 focus:ring-0 outline-none !text-lg"
					/>
					<Button onClick={handleSearch} className="bg-primary !p-3">
						<MagnifyingGlassIcon className="h-5 w-5" />
					</Button>
				</div>

				{suggestions.length > 0 && (
					<List className="mt-2 max-h-48 overflow-y-auto no-border shadow rounded-md">
						{suggestions.map((role, index) => (
							<ListItem
								key={index}
								className="cursor-pointer hover:bg-gray-50"
								onClick={() => handleSuggestionClick(role)}
							>
								{role}
							</ListItem>
						))}
					</List>
				)}
			</Card>
		</section>
	);
};

export default Search;
