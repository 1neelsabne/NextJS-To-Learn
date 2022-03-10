import React from "react";
import Link from "next/link";

const NavBar = () => {
	return (
		<>
			<nav>
				<li>
					<Link href="/home">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<a>Blog</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
			</nav>
		</>
	);
};

export default NavBar;
