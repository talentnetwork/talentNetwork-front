const NavbarHeader = () => {
	const itemNavBar = [
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
		<ul className="flex gap-10 items-center">
			{itemNavBar &&
				itemNavBar.map(({ name, link }, index) => (
					<li key={index} className="relative before:h-1 before:w-0 before:absolute before:bg-primary-400 before:left-1/2 before:-translate-x-1/2 before:-bottom-1 hover:before:w-full before:duration-300 before:rounded">
						<a href={link}>{name}</a>
					</li>
				))}
		</ul>
	);
};

export default NavbarHeader;
