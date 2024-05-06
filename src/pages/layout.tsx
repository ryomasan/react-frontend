// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import Head from "next/head";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-[716px]">{children}</main>
      <Footer />
    </>
  );
}
