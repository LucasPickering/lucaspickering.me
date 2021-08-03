import React from "react";
import rehypeReact from "rehype-react";
import remarkParse from "remark-parse";
import remark2rehype from "remark-rehype";
import { unified } from "unified";
import Image from "@root/components/Image";

const processor = unified()
  .use(remarkParse)
  .use(remark2rehype)
  .use(rehypeReact, {
    createElement: React.createElement,
    components: {
      img: Image,
    },
  });

export const dateFormat = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
});

export function markdownToReact(markdown: string): React.ReactElement {
  return processor.processSync(markdown).result as React.ReactElement;
}

export function compare<T>(value1: T, value2: T): number {
  if (value1 < value2) {
    return -1;
  }
  if (value1 > value2) {
    return 1;
  }
  return 0;
}
