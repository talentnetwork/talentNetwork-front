import NavbarHeader from "../components/NavbarHeader";
import DarkMode from "../components/DarkMode";
import TalentNetworkLogo from "../components/TalentNetworkLogo";
import MobileMenu from "../components/MobileMenu";

const Header = () => {
	const itemNavBarHeader = [
		{
			name: "Home",
			link: "/",
		},
		{
			name: "work",
			link: "/work",
		},
		{
			name: "Our Team",
			link: "/team",
		},
		{
			name: "Services",
			link: "/services",
		},
		{
			name: "Contact",
			link: "/contact",
		},
	];
	return (
		<section className="dark:bg-darkMode-900 dark:text-white">
			<div className="container flex items-center justify-between py-5">
				<div className="flex md:hidden">
					<MobileMenu />
				</div>

				<div className="flex">
					<TalentNetworkLogo className="w-16 text-primary-400 dark:text-white" />
				</div>

				<div className="hidden md:flex ml-24 lg:ml-48">
					<NavbarHeader priority="row" list={itemNavBarHeader} />
				</div>

				<div className="hidden md:flex ml-24 lg:ml-48">
					<DarkMode />
				</div>
			</div>
		</section>
	);
};

export default Header;
