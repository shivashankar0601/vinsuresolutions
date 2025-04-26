import React, { useState, useEffect } from "react";
import {
	Input,
	Select,
	Option,
	Typography,
	Checkbox,
	input,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import JobCard from "@components/job-card/JobCard";
import "./JobSearch.css";
import JobData from "@data/job-data";
import toast from "react-hot-toast";

// Job Categories & Work Types
const categories = ["Development", "CRM", "Testing", "Analytics"];
const workTypes = ["Full-time", "Part-time", "Contract", "Temporary"];

const JobSearch = () => {
	const [search, setSearch] = useState("");
	const [selectedCategories, setSelectedCategories] = useState([]);
	const [selectedTypes, setSelectedTypes] = useState([]);
	const [sortType, setSortType] = useState("latest");
	const [filteredJobs, setFilteredJobs] = useState(JobData);
	const [inputValue, setInputValue] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		const lowerSearch = search.toLowerCase();

		let jobs = JobData.filter((job) => {
			const matchesSearch =
				search.length < 2 ||
				job.title.toLowerCase().includes(lowerSearch) ||
				job.subCategory.toLowerCase().includes(lowerSearch);

			const matchesCategory =
				selectedCategories.length === 0 ||
				selectedCategories.includes(job.category);

			const matchesType =
				selectedTypes.length === 0 ||
				selectedTypes.includes(job.workType);

			return matchesSearch && matchesCategory && matchesType;
		});

		if (sortType === "latest") {
			jobs = jobs.sort((a, b) => b.id - a.id);
		} else if (sortType === "alphabetical") {
			jobs = jobs.sort((a, b) => a.title.localeCompare(b.title));
		}

		setFilteredJobs(jobs);
	}, [search, selectedCategories, selectedTypes, sortType]);

	// const handleSearchChange = (e) => {
	// 	setSearch(e.target.value);
	// };

	const handleSearchClick = (e) => {
		setSearch(inputValue);
		// toast.success("Search results are displayed.");
	};

	const toggleSelection = (item, list, setter) => {
		if (list.includes(item)) {
			setter(list.filter((i) => i !== item));
		} else {
			setter([...list, item]);
		}
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-10 gap-6 p-6 min-h-9/10">
			{/* Filter Section */}
			<div className="md:col-span-2 p-4 rounded-lg shadow-md border-2 border-gray-200">
				<Typography variant="h3" className="mb-4 text-primary text-lg">
					Filters
				</Typography>

				{/* Category Filter */}
				<div className="mb-6">
					<Typography
						variant="small"
						className="font-medium text-md text-gray-700 mb-2"
					>
						Work Type
					</Typography>
					<div className="border-2 border-gray-100 rounded-lg p-4 pl-2">
						{categories.map((cat) => (
							<div className="flex items-center" key={cat}>
								<Checkbox
									type="checkbox"
									id={cat}
									key={cat}
									checked={selectedCategories.includes(cat)}
									onChange={() =>
										toggleSelection(
											cat,
											selectedCategories,
											setSelectedCategories
										)
									}
									name={cat}
									className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									htmlFor={cat}
									className="text-gray-700 font-medium cursor-pointer text-sm"
								>
									{cat}
								</label>
							</div>
						))}
					</div>
				</div>

				{/* Work Type Filter */}
				<div className="mb-6">
					<Typography
						variant="small"
						className="font-medium text-md text-gray-700 mb-2"
					>
						Work Type
					</Typography>
					<div className="border-2 border-gray-100 rounded-lg p-4 pl-2">
						{workTypes.map((type) => (
							<div key={type} className="flex items-center">
								<Checkbox
									id={type}
									checked={selectedTypes.includes(type)}
									onChange={() =>
										toggleSelection(
											type,
											selectedTypes,
											setSelectedTypes
										)
									}
									className="w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
								/>
								<label
									htmlFor={type}
									className="text-gray-700 font-medium cursor-pointer text-sm"
								>
									{type}
								</label>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Job Search Results Section */}
			<div className="md:col-span-8 space-y-6">
				{/* Search Bar + Sort */}
				<div className="w-full flex flex-col sm:flex-row items-center gap-4">
					<div className="w-4/5 sm:w-2/3">
						<div className="w-full min-w-[200px]">
							<div className="relative">
								<input
									className="border-primary w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-[16px] border rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow h-12"
									placeholder="Java Developer or Full Stack Developer etc."
									// onKeyDown={handleSearchChange}
									onKeyDown={(e) => {
										if (e.key === "Enter") {
											handleSearchClick(e);
										}
									}}
									value={inputValue}
									onChange={(e) =>
										setInputValue(e.target.value)
									}
								/>
								<button
									className="search-button absolute top-0 right-0 mt-[1.5px] mr-[1.5px] flex items-center rounded bg-primary py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-md focus:bg-gray-700 active:bg-gray-700 hover:bg-gray-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
									type="button"
									onClick={handleSearchClick}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-4 h-4 mr-2"
									>
										<path
											fillRule="evenodd"
											d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-[16px] font-bold">
										Search
									</span>
								</button>
							</div>
						</div>
					</div>
					<div className="w-1/5 sm:w-1/3 flex flex-row h-12">
						<div className="items-end w-1/3 my-auto pr-2 flex flex-row-reverse">
							<label className="text-primary font-semibold">
								Sort By
							</label>
						</div>
						<Select
							value={sortType}
							onChange={(val) => setSortType(val)}
							className="sort-by border-primary !rounded-md shadow-md h-12"
						>
							<Option
								className="outline-none p-2 hover:bg-gray-100"
								value="latest"
							>
								Latest
							</Option>
							<Option
								className="outline-none p-2 hover:bg-gray-100"
								value="oldest"
							>
								Oldest
							</Option>
							<Option
								className="outline-none p-2 hover:bg-gray-100"
								value="alphabetical"
							>
								Alphabetical
							</Option>
							<Option
								className="outline-none p-2 hover:bg-gray-100"
								value="most-applicants"
							>
								Most Applicants
							</Option>
							<Option
								className="outline-none p-2 hover:bg-gray-100"
								value="least-applicants"
							>
								Least Applicants
							</Option>
						</Select>
					</div>
				</div>
				<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 p-4 shadow-md hover:shadow-lg transition-all">
					{/* Job Cards */}
					{filteredJobs.length > 0 ? (
						filteredJobs.map((job) => (
							<JobCard key={job.id} job={job} />
						))
					) : (
						<Typography color="gray" className="text-center mt-6">
							No jobs match your search and filters.
						</Typography>
					)}
				</div>
			</div>
		</div>
	);
};

export default JobSearch;
