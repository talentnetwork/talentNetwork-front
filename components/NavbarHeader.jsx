import Link from 'next/link'

const NavbarHeader = ({ priority , list }) => {
	return (
		<ul
			className={`flex gap-10 ${
				priority !== "row" ? "flex-col" : "flex-row"
			} items-center`}>
			{list &&
				list.map(({ name, link }, index) => (
					<li
						key={index}
						className={`relative ${
							priority !== "row"
								? "hover:text-primary-400"
								: "before:h-1 before:w-0 before:absolute before:bg-primary-400 before:left-1/2 before:-translate-x-1/2 before:-bottom-1 hover:before:w-full before:duration-300 before:rounded"
						}`}>
						<Link href={link}>{name}</Link>
					</li>
				))}
		</ul>
	);
};

export default NavbarHeader;
