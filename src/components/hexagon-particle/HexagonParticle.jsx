import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const HexagonParticle = ({ height }) => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	// const maxParticles = window.matchMedia("(max-width: 768px)").matches
	//     ? 50
	//     : 200;

	// const particlesLoaded = (container) => {
	//     console.log(container);
	// };

	const options = useMemo(
		() => ({
			fpsLimit: 120,
			fullScreen: {
				enable: true,
				zIndex: -1,
			},
			style: {
				height,
			},
			interactivity: {
				events: {
					onClick: {
						enable: false,
					},
					onHover: {
						enable: false,
					},
				},
				modes: {
					push: {
						enable: false,
					},
					repulse: {
						enable: false,
					},
				},
			},
			particles: {
				color: {
					value: "#1e3a8a",
				},
				links: {
					enable: false,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: true,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 15,
				},
				opacity: {
					value: 0.05,
				},
				shape: {
					type: "polygon",
					stroke: {
						width: 0,
						color: "#000",
					},
				},

				size: {
					value: { min: 100, max: 100 },
				},
			},
			detectRetina: true,
		}),
		[]
	);

	if (init) {
		return <Particles id="tsparticles" options={options} />;
	}

	return <></>;
};

export default HexagonParticle;
