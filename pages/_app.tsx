import { ReactElement } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { StylesProvider, createGenerateClassName } from "@mui/styles";

import theme from "../theme/lightTheme";
import createEmotionCache from "../theme/createEmotionCache";
import { wrapper } from "../store";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

interface IAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

// Fix for server and client side class name conflict
const generateClassName = createGenerateClassName({
	productionPrefix: "c",
});

function MyApp(props: IAppProps): ReactElement {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<StylesProvider generateClassName={generateClassName}>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</StylesProvider>
		</CacheProvider>
	);
}

export default wrapper.withRedux(MyApp);
