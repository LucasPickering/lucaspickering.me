import React from "react";
import Head from "next/head";
import "@root/styles/global.css";
import { CloudinaryContext } from "cloudinary-react";

interface Props<P> {
  Component: React.ComponentType<P>;
  pageProps: P;
}

export default function App<P>({
  Component,
  pageProps,
}: Props<P>): React.ReactElement {
  return (
    // TODO can we use MDXProvider to auto-provide layout and Images import?

    <CloudinaryContext cloudName="lucaspickering" includeOwnBody>
      <Head>
        <title>Lucas Pickering</title>
        <meta name="theme-color" content="#383838" />
        <meta name="description" content="Me!" />
      </Head>
      <Component {...pageProps} />
    </CloudinaryContext>
  );
}
