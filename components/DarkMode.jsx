import {
	useEffect,
	useRef,
	useState,
} from "react";
import {
	CiBrightnessDown,
	CiDark,
} from "react-icons/ci";

const DarkMode = () => {
	const [isDarkMode, setIsDarkMode] =
		useState(false);
	const inputDarkMode = useRef();

	const showInput = () => {
		setIsDarkMode(!isDarkMode);
		localStorage.theme =
			localStorage.theme === "dark"
				? "light"
				: "dark";

		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches)
			? document.documentElement.classList.add(
					"dark",
			  )
			: document.documentElement.classList.remove(
					"dark",
			  );
	};

	useEffect(() => {
		console.log(isDarkMode);
	}, [isDarkMode]);

	useEffect(() => {
		if (localStorage.theme)
			document.documentElement.classList.add(
				localStorage.theme,
			);
	}, []);

	return (
		<>
			<label className="relative inline-flex w-14 items-center mr-5 cursor-pointer">
				<input
					onChange={showInput}
					type="checkbox"
					value=""
					className="sr-only peer"
					ref={inputDarkMode}
				/>

				<div className="flex items-center justify-between w-14 h-8 rounded-full peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-2 after:rounded-full after:h-5 after:w-5 shadow-btn bg-white dark:bg-darkMode-400 after:bg-primary-400 dark:after:bg-primary-200 dark:after:shadow-[1px_2px_10px_rgba(234,135,79,0.2)] text-gray-900 dark:text-white p-1.5 after:duration-300">
					<CiDark
						className={`${
							isDarkMode
								? "opacity-1"
								: "opacity-0"
						} duration-300`}
					/>

					<CiBrightnessDown
						className={`${
							isDarkMode
								? "opacity-0"
								: "opacity-1"
						} duration-300`}
					/>
				</div>
			</label>
		</>
	);
};

export default DarkMode;
