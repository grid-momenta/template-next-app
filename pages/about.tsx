import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { wrapper } from "../store";
import { productIncrement } from "../store/slices/countSlice";
import Link from "../utils/Link";

const About: NextPage = (props) => {
	return (
		<div>
			<Head>
				<title>Next App Typescript Boilerplate</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav>
				<Link href="/">Home</Link>
			</nav>

			<main>
				<h1>About Page</h1>
				<p>Count: {JSON.stringify(props)}</p>
			</main>

			<footer>
				<p>Footer</p>
			</footer>
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
	store.dispatch(productIncrement(5));

	return {
		props: {
			state: store.getState(),
		},
	};
});

export default About;
