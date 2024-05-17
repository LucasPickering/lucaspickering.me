import { MDXProvider } from "@mdx-js/react";
import Code from "@root/components/Code";
import "@root/styles/global.scss";
import Head from "next/head";
import React from "react";

const components: React.ComponentProps<typeof MDXProvider>["components"] = {
  code: Code,
};

interface Props<P> {
  Component: React.ComponentType<P>;
  pageProps: P & {}; // eslint-disable-line @typescript-eslint/ban-types
}

export default function App<P>({
  Component,
  pageProps,
}: Props<P>): React.ReactElement {
  return (
    <MDXProvider components={components}>
      <Head>
        <title>Lucas Pickering</title>
        <meta name="theme-color" content="#212930" />
        <meta name="color-scheme" content="dark" />
        <meta name="description" content="Me!" />
      </Head>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
