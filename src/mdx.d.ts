// I couldn't get <reference types="..." /> to work, so I copy-pastad
// https://github.com/mdx-js/mdx/blob/5025349229d55562999775fbcbcf58f7424d2e74/packages/loader/types/index.d.ts

declare module "*.mdx" {
  import { ComponentType } from "react";
  export const metadata: Record<string, unknown> | undefined;
  const MDXComponent: ComponentType;
  export default MDXComponent;
}
