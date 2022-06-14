import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      storageKey="theme"
      attribute="class"
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
