import Navbars from "../components/Navbars";
import {
	TbBrandTelegram,
	TbBrandLinkedin,
	TbBrandInstagram,
} from "react-icons/tb";
import { FiChevronUp } from "react-icons/fi";
import TalentNetworkLogo from "../components/TalentNetworkLogo";

const Footer = () => {
	const itemNavBarImportantLink = [
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

	const itemNavBarBestLink = [
		{
			name: "Front-end programming",
			link: "/front-end-programming",
		},
		{
			name: "Wordpress",
			link: "/wordpress",
		},
		{
			name: "Seo friendly",
			link: "/seo-friendly",
		},
		{
			name: "Logo design",
			link: "/logo-design",
		},
		{
			name: "Android",
			link: "/android",
		},
	];
	return (
		<footer>
			<div className="container flex flex-col gap-10 bg-secondary-50 text-typoLight-400 dark:bg-secondary-900 dark:text-white rounded-t-xl pt-10 pb-5">
				<div className="flex flex-col lg:flex-row gap-10">
					<div className="w-full lg:w-[48%]">
						<Navbars list={itemNavBarImportantLink} />
					</div>

					<div className="w-full lg:w-[48%]">
						<Navbars list={itemNavBarBestLink} />
					</div>

					<div className="w-full lg:w-[48%] flex flex-col items-center justify-around gap-10">
						<div className="flex gap-10 items-center justify-center">
							<TbBrandTelegram
								size={"2rem"}
								className="text-typoLight-900 dark:text-white"
							/>
							<TbBrandLinkedin
								size={"2rem"}
								className="text-typoLight-900 dark:text-white"
							/>
							<TbBrandInstagram
								size={"2rem"}
								className="text-typoLight-900 dark:text-white"
							/>
						</div>
						<div>
							<TalentNetworkLogo className="w-32 text-primary-400 dark:text-white" />
						</div>
					</div>
				</div>

				<div className=" flex items-center justify-center">
					<button className="relative flex items-center justify-center bg-primary-400 w-10 h-10 rounded-md shadow-[2px_-2px_13px_0px_rgb(234,135,79)]">
						<FiChevronUp size={"4rem"} className="w-full text-typoLight-900" />
					</button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
