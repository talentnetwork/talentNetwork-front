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
	};

	useEffect(() => {
		console.log(isDarkMode);
	}, [isDarkMode]);

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

				<div className="flex items-center justify-between w-14 h-8 rounded-full peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-2 after:rounded-full after:h-5 after:w-5 shadow-btn bg-white after:bg-primary-400 text-gray-900 p-1.5 after:duration-300">
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
