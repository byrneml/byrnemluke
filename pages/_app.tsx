import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main id="main">
      <ThemeProvider
        disableTransitionOnChange
        storageKey="theme"
        attribute="class"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
