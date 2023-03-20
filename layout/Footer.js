import Navbars from "../components/Navbars";

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
			<div className="container flex flex-col gap-2 bg-secondary-50 dark:bg-secondary-900 rounded-t-lg">
				<div className="flex gap-2">
					<div className="w-full lg:w-[48%]">
						<Navbars list={itemNavBarImportantLink} />
					</div>

					<div className="w-full lg:w-[48%]">
						<Navbars list={itemNavBarBestLink} />
					</div>

					<div className="w-full lg:w-[48%]"></div>
				</div>

				<div className=""></div>
			</div>
		</footer>
	);
};

export default Footer;
