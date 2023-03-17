const NavbarHeader = ({ priority }) => {
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
		<ul
			className={`flex gap-10 ${
				priority !== "header" ? "flex-col" : "flex-row"
			} items-center`}>
			{itemNavBar &&
				itemNavBar.map(({ name, link }, index) => (
					<li
						key={index}
						className={`relative ${
							priority !== "header"
								? "hover:text-primary-400"
								: "before:h-1 before:w-0 before:absolute before:bg-primary-400 before:left-1/2 before:-translate-x-1/2 before:-bottom-1 hover:before:w-full before:duration-300 before:rounded"
						}`}>
						<a href={link}>{name}</a>
					</li>
				))}
		</ul>
	);
};

export default NavbarHeader;
