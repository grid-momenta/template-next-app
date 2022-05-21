import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const About: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Next App Typescript Boilerplate</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
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
