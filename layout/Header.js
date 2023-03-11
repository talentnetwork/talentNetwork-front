import NavbarHeader from "../components/NavbarHeader";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
	return (
		<section className="container flex items-center justify-between py-5 md:justify-start">
			<div className="flex md:hidden">
				<CiMenuBurger size={"1.8rem"} />
			</div>

			<div className="hidden md:flex ml-24 lg:ml-48">
				<NavbarHeader />
			</div>
		</section>
	);
};

export default Header;
