import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => (
	<header className="padding-x absolute z-10 w-full py-8">
		<nav className="max-container flex items-center justify-between">
			<a href="/">
				<img src={headerLogo} alt="Nike Logo" width={130} height={29} />
			</a>

			<ul className="flex flex-1 items-center justify-end gap-16 max-lg:hidden wide:pr-8">
				{navLinks.map((item) => (
					<li key={item.label}>
						<a
							href={item.href}
							className="font-montserrat text-lg leading-normal text-slate-gray hover:text-gray-700"
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>

			<div className="cursor-pointer lg:hidden">
				<img src={hamburger} alt="Hamburger" width={25} height={25} />
			</div>
		</nav>
	</header>
);

export default Nav;
