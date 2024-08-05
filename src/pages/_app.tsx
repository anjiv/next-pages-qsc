import type { AppProps } from "next/app";

// Wraps the code on every single page.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
