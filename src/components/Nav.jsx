import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => (
	<header className="w-full absolute padding-x py-8 z-10">
		<nav className="max-container flex justify-between items-center">
			<a href="/">
				<img src={headerLogo} alt="Nike Logo" width={130} height={29} />
			</a>

			<ul className="max-lg:hidden flex-1 flex justify-end items-center gap-16">
				{navLinks.map((item) => (
					<li key={item.label}>
						<a
							href={item.href}
							className="font-montserrat text-slate-gray text-lg leading-normal hover:text-gray-700"
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>

			<div className="lg:hidden cursor-pointer">
				<img src={hamburger} alt="Hamburger" width={25} height={25} />
			</div>
		</nav>
	</header>
);

export default Nav;
