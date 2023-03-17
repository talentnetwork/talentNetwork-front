import NavbarHeader from "../components/NavbarHeader";
import { CiMenuBurger } from "react-icons/ci";
import DarkMode from "../components/DarkMode";

const Header = () => {
	return (
		<section className="dark:bg-darkMode-900 dark:text-white">
			<div className="container flex items-center justify-between py-5 md:justify-start ">
				<div className="flex md:hidden">
					<CiMenuBurger size={"1.8rem"} />
				</div>

				<div className="hidden md:flex ml-24 lg:ml-48">
					<NavbarHeader />
				</div>

				<div className="hidden md:flex ml-24 lg:ml-48">
					<DarkMode />
				</div>
			</div>
		</section>
	);
};

export default Header;
