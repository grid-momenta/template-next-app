import { useCallback } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import Link from "../utils/Link";
import { RootState } from "../store/types";
import { productIncrement } from "../store/slices/countSlice";

const About: NextPage = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector((state: RootState) => state.count.products);

	const handelIncrement = useCallback(() => {
		dispatch(productIncrement(1));
	}, [dispatch]);

	return (
		<div>
			<Head>
				<title>Redux Playground</title>
				<meta name="description" content="Experiment with Redux" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<nav>
				<Link href="/">Home</Link>
			</nav>

			<main>
				<h1>Redux Playground</h1>
				<div>Products: {products}</div>
				<button onClick={handelIncrement}>Increment</button>
			</main>

			<footer>
				<p>Footer</p>
			</footer>
		</div>
	);
};

export default About;
