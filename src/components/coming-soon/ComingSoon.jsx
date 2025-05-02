// ComingSoon.js
import React from "react";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const ComingSoon = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
			<div className="bg-blue-100 rounded-full p-4 mb-6">
				<WrenchScrewdriverIcon className="h-10 w-10 text-blue-600" />
			</div>

			<span className="lg:text-4xl sm:text-3xl font-semibold text-gray-800 mb-3">
				We're still building this feature
			</span>

			<span className="text-gray-600 max-w-md mb-6 text-lg">
				This part of the application is currently under development as
				we work to provide you with a better and more complete
				experience. We appreciate your patience and understanding.
			</span>

			<span className="text-lg text-gray-400">— Team Vinsure</span>
		</div>
	);
};

export default ComingSoon;
