import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import styles from "../../styles/error.module.css";

const Index = () => {
	const router = useRouter();
	const backRedirect = () => {
		router.push("/");
	};

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 3000);
	}, [router]);

	return (
		<>
			<h1 className={styles.headings}>
				<center>404 Page Not Found!!</center>
			</h1>
			<br />
			<div>
				<center>
					<Button className="m-auto" onClick={() => backRedirect()}>
						Press to Back Home Page
					</Button>
				</center>
			</div>
		</>
	);
};

export default Index;
