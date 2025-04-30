import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import JobSearch from "./pages/job-search/JobSearch";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import HexagonParticle from "./components/hexagon-particle/HexagonParticle";
function App() {
	return (
		<>
			<Router>
				<Header height="500px" />
				<Toaster position="top-right" />
				<div className="container mx-auto px-4">
					<HexagonParticle />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/job-search" element={<JobSearch />} />
						{/* <Route path="/about" element={<About />} />
						<Route path="/features" element={<Features />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} /> */}
					</Routes>
				</div>
				<Footer />
			</Router>
		</>
	);
}

export default App;
