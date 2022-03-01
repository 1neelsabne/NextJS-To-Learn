import Link from "next/link";

const index = () => {
	return (
		<>
			<h1>
				<center>404 Page Not Found!!</center>
			</h1>
			<br />
			<div>
				<center>
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
				</center>
			</div>
		</>
	);
};

export default index;
