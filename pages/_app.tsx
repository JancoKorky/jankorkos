import "@/styles/index.scss";
import type { AppProps } from "next/app";
import { SSRProvider } from "react-bootstrap";
import Navigation from "@/components/Navigation/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Navigation />
      <Component {...pageProps} />
    </SSRProvider>
  );
}
