import { AppProps } from "next/app";
import { usePostHog } from "next-use-posthog";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  usePostHog(`${process.env.POSTHOG_KEY}`, {
    api_host: "https://app.posthog.com",
    loaded: (posthog) => {
      if (process.env.NODE_ENV === "development") posthog.opt_out_capturing();
    },
  });

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider storageKey="theme" defaultTheme="dark" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
