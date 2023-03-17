import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose, IoMenu } from "react-icons/io5";
import NavbarHeader from "../components/NavbarHeader";
import DarkMode from "../components/DarkMode";

const MobileMenu = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<>
			<IoMenu
				onClick={() => {
					setShowMenu(!showMenu);
				}}
				size={"1.8rem"}
			/>
			<div
				className={`flex flex-col items-center fixed top-0 bottom-0 w-2/3 min-w-[150px] h-full ${
					showMenu ? "left-0" : "-left-full"
				} bg-white dark:bg-darkMode-900 dark:text-white z-50 duration-300 shadow-btn`}>
				<div className="container py-5">
					<IoClose
						onClick={() => {
							setShowMenu(!showMenu);
						}}
						size={"1.8rem"}
					/>
				</div>

				<div className="flex flex-col items-center justify-between w-full h-full">
					<div>
						<NavbarHeader priority="mobileMenu" />
					</div>

					<div className="container py-5 text-center">
						<DarkMode />
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
