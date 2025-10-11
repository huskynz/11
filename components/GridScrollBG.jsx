'use client'

import { useEffect } from "react";

export default function ScrollGridBG() {
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition =
				window.pageYOffset || document.documentElement.scrollTop;
			const bgOffset = scrollPosition / 8;

			const grid = document.querySelector(".grid-bg");
			if (grid) grid.style.backgroundPositionY = -bgOffset + "px";
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return <div className="grid-bg bg-white dark:bg-gray-900 fixed top-0 left-0 w-full h-full -z-10"></div>;
}
