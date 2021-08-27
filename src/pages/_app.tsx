import React from "react";
import Head from "next/head";
import "@root/styles/global.scss";
import { CloudinaryContext } from "cloudinary-react";
import { cloudinaryCloudName } from "@root/lib/useCloudinary";
import { MDXProvider, MDXProviderComponents } from "@mdx-js/react";
import Code from "@root/components/Code";

const components: MDXProviderComponents = {
  code: Code,
};

interface Props<P> {
  Component: React.ComponentType<P>;
  pageProps: P;
}

export default function App<P>({
  Component,
  pageProps,
}: Props<P>): React.ReactElement {
  return (
    <MDXProvider components={components}>
      <CloudinaryContext cloudName={cloudinaryCloudName} includeOwnBody secure>
        <Head>
          <title>Lucas Pickering</title>
          <meta name="theme-color" content="#212930" />
          <meta name="color-scheme" content="dark" />
          <meta name="description" content="Me!" />
        </Head>
        <Component {...pageProps} />
      </CloudinaryContext>
    </MDXProvider>
  );
}
