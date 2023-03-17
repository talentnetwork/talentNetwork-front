import { useEffect, useState } from "react";
import { CiBrightnessDown, CiDark } from "react-icons/ci";

const DarkMode = () => {
	const [themeMode, setThemeMode] = useState(false);

	useEffect(() => {
		setThemeMode(localStorage.theme === "dark" ? false : true);
		if (localStorage.theme)
			document.documentElement.classList.add(localStorage.theme);
	}, []);

	const showInput = () => {
		setThemeMode(!themeMode);

		localStorage.theme = localStorage.theme === "dark" ? "" : "dark";

		document.documentElement.classList.toggle("dark");
	};

	return (
		<label className="relative inline-flex w-14 items-center cursor-pointer">
			<input
				onClick={showInput}
				type="checkbox"
				className="sr-only peer"
				defaultChecked={themeMode}
			/>

			<div className="flex items-center justify-between w-14 h-8 rounded-full peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-2 after:rounded-full after:h-5 after:w-5 shadow-btn bg-white dark:bg-darkMode-400 after:bg-primary-400 dark:after:bg-primary-200 dark:after:shadow-[1px_2px_10px_rgba(234,135,79,0.2)] text-gray-900 dark:text-white p-1.5 after:duration-300">
				<CiDark
					className={`${themeMode ? "opacity-1" : "opacity-0"} duration-300`}
				/>

				<CiBrightnessDown
					className={`${themeMode ? "opacity-0" : "opacity-1"} duration-300`}
				/>
			</div>
		</label>
	);
};

export default DarkMode;
