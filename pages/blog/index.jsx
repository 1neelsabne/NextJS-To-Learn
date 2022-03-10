import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const data = await res.json();
	return {
		props: {
			data,
		},
	};
};

const Index = ({ data }) => {
	return (
		<>
			<Container>
				<br />
				<h1>
					<center>My Blogs</center>
				</h1>
				<br />
				<Row>
					{data.slice(0, 6).map((item, index) => {
						return (
							<Col key={index}>
								<Card
									style={{
										width: "320px",
										marginBottom: "20px",
										height: "150px",
									}}
								>
									<Card.Header>
										Post No. {item.id}
									</Card.Header>
									<Card.Body>
										<Link
											href={`/blog/${item.id}`}
											passHref
										>
											<Card.Title>
												{item.title}
											</Card.Title>
										</Link>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default Index;
