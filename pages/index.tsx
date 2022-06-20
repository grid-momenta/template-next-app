import type { NextPage } from "next";
import Head from "next/head";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Link from "../utils/Link";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Welcome to Next App</title>
				<meta name="description" content="Next app with test" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav>
				<Link href="/about">About</Link>
			</nav>

			<main>
				<h1>Home Page</h1>
			</main>

			<footer>
				<p>Footer</p>
			</footer>

			<Container maxWidth="lg">
				<Box
					sx={{
						my: 5,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Typography component="h1" color="primary">
						Material UI v5 with Next.js in TypeScript
					</Typography>
					<Typography component="h2" color="secondary">
						Boilerplate for building faster.
					</Typography>
				</Box>
			</Container>
		</div>
	);
};

export default Home;
