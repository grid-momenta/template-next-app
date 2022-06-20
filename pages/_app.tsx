import { ReactElement } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { Provider } from "react-redux";

import theme from "../theme/lightTheme";
import createEmotionCache from "../theme/createEmotionCache";
import { store } from "../store";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache: EmotionCache = createEmotionCache();

interface IAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

function MyApp(props: IAppProps): ReactElement {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<Provider store={store}>
			<CacheProvider value={emotionCache}>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</Provider>
	);
}

export default MyApp;
