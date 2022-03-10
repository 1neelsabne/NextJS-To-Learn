//import { useRouter } from "next/router";

import { Card, Container } from "react-bootstrap";

export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const data = await res.json();

	const paths = data.map((item) => {
		return {
			params: {
				DynamicRouting: item.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.DynamicRouting;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = await res.json();
	return {
		props: {
			data,
		},
	};
};

const DynamicRouting = (props) => {
	const { id, title, body } = props.data;
	//const router = useRouter();
	//const name = router.query.DynamicRouting;
	return (
		<>
			<Container>
				<br />
				<h1>
					<center>Related Post</center>
				</h1>
				<br />
				<Card>
					<Card.Header>Post No. {id}</Card.Header>
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{body}</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</>
	);
};

export default DynamicRouting;
