import { Card, CardBody, Typography, Rating } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
	{
		name: "John Doe",
		designation: "HR Manager, TechCorp",
		feedback: "Great service and support! Highly recommend.",
		rating: 5,
	},
	{
		name: "Jane Smith",
		designation: "Talent Head, Innovate Inc",
		feedback: "Professional and efficient. A pleasure to work with.",
		rating: 4,
	},
	{
		name: "Priya Mehta",
		designation: "Placed Candidate",
		feedback:
			"VinsureSolutions helped me get placed in my dream company. Thank you!",
		rating: 5,
	},
	{
		name: "Emily Chen",
		designation: "Operations Lead, BPOWorks",
		feedback:
			"Highly skilled recruiters and excellent BPO support. A reliable partner for us.",
		rating: 5,
	},
	{
		name: "Rahul Verma",
		designation: "Finance Lead",
		feedback:
			"Payroll outsourcing to Vinsure was the best decision. They're accurate and responsive.",
		rating: 5,
	},
];

const Testimonials = () => {
	return (
		<section className="py-20 bg-gray-50">
			<div className="container mx-auto px-6 text-center max-w-6xl">
				<Typography variant="h2" className="text-gray-800 mb-6">
					Testimonials
				</Typography>
				<Typography
					variant="lead"
					className="text-gray-600 mb-12 max-w-3xl mx-auto"
				>
					Here’s what clients and candidates are saying about
					VinsureSolutions.
				</Typography>

				<Swiper
					spaceBetween={30}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					modules={[Autoplay, Pagination]}
				>
					{testimonials.map(
						({ name, feedback, designation, rating }, index) => (
							<SwiperSlide key={index}>
								<Card className="bg-white shadow-md hover:shadow-lg transition-shadow h-full mx-2 cursor-pointer my-2">
									<CardBody className="flex flex-col items-center text-center p-6 h-full">
										<ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-primary-lite mb-4" />
										<Typography
											variant="h6"
											className="text-gray-800"
										>
											{name}
										</Typography>
										<Typography
											variant="small"
											className="text-gray-500 mb-2"
										>
											{designation}
										</Typography>
										<Rating
											value={rating}
											readonly
											className="text-primary-lite mb-4 flex flex-row"
										/>
										<Typography className="text-gray-700 text-sm italic">
											“{feedback}”
										</Typography>
									</CardBody>
								</Card>
							</SwiperSlide>
						)
					)}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
