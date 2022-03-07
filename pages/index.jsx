import React from "react";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

const index = () => {
	return (
		<>
			<Head>
				<title>Home Page</title>
				<meta name="description" content="Free Next.js Learning" />
				<meta name="keywords" content="html, css, next.js, js" />
				<meta name="author" content="Neel" />
			</Head>
			<NavBar />
			<br />
			<br />
			<div style={{ textAlign: "center" }}>
				<h1 className={styles.bgcolor}>Welcome To NEXT.js</h1>
				<p>This is the my next.js project</p>
				<br />
				<Image src="/lap.jpg" width="300" height="200" alt="Image1" />
				<br />
				<Image
					src="https://images.unsplash.com/photo-1646620475187-52ea77d8b03a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					width="300"
					height="200"
					alt="Image2"
				/>
			</div>
			<style jsx>
				{`
					p {
						color: red;
					}
				`}
			</style>
		</>
	);
};

export default index;
