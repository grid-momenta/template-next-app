import type { NextPage } from "next";
import Head from "next/head";
import Link from "../utils/Link";

const About: NextPage = () => {
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
			</main>

			<footer>
				<p>Footer</p>
			</footer>
		</div>
	);
};

export default About;
