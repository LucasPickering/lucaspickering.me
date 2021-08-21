import Head from "next/head";
import "@root/styles/global.css";

interface Props<P> {
  Component: React.ComponentType<P>;
  pageProps: P;
}

export default function App<P>({ Component, pageProps }: Props<P>) {
  return (
    <>
      <Head>
        <title>Lucas Pickering</title>
        <meta name="theme-color" content="#383838" />
        <meta name="description" content="Me!" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
