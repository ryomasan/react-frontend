// import { AppProps } from "next/app";
import { AppProps } from "next/app";
import Layout from "./layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // const getLayout = Component.getLayout || ((page) => page)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
