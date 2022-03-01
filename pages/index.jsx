import Link from "next/link";
import React from "react";

const index = () => {
	return (
		<>
			<nav>
				<li>
					<Link href="/home">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/blog/Neel">
						<a>Blog</a>
					</Link>
				</li>
				<li>
					<Link href="/contact">
						<a>Contact</a>
					</Link>
				</li>
			</nav>
			<br />
			<br />
			<h1>Welcome To NEXT.js</h1>
		</>
	);
};

export default index;
