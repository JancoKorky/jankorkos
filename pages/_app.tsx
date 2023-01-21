import "@/styles/index.scss";
import type { AppProps } from "next/app";
import Navigation from "@/components/Navigation/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
