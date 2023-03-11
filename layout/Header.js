import NavbarHeader from "../components/NavbarHeader";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
	return (
		<section className="container flex items-center justify-between md:justify-start">
			<div className="flex md:hidden">
				<CiMenuBurger />
			</div>

			<div className="hidden md:flex py-5 ml-24 lg:ml-48">
				<NavbarHeader />
			</div>
		</section>
	);
};

export default Header;
