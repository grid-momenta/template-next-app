import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav>
				<Link href="/about">
					<a>About</a>
				</Link>
			</nav>

			<main>
				<h1>Home Page</h1>
			</main>

			<footer>
				<p>Footer</p>
			</footer>
		</div>
	);
};

export default Home;