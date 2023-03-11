import NavbarHeader from "../components/NavbarHeader";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
	return (
		<section className="container flex items-center justify-between">
			<div className="flex md:hidden">
				<CiMenuBurger />
			</div>

			<div className="hidden md:flex">
				<NavbarHeader />
			</div>
		</section>
	);
};

export default Header;
