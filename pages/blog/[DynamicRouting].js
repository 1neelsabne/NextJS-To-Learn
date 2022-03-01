import { useRouter } from "next/router";

const DynamicRouting = () => {
	const router = useRouter();
	const name = router.query.DynamicRouting;
	return (
		<>
			<h1>Hello {name}, This is the Dynamic Routing in NEXT.Js </h1>
		</>
	);
};

export default DynamicRouting;
