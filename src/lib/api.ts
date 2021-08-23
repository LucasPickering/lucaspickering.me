import { compare } from "./utils";
import * as posts from "@root/pages/posts";

export interface Post {
  slug: string;
  metadata: {
    title: string;
    date: string;
    summary: string;
    banner: string;
    /**
     * Should images be shown in larger format? Useful for photo posts
     */
    isGallery?: boolean;
    tags: string[];
    links?: Record<string, string>;
  };
}

export function getAllPosts(): Post[] {
  return (
    Object.entries(posts)
      .map(([key, post]) => ({
        slug: generateSlug(key),
        // This is a dangerous coercion but who cares
        metadata: post.metadata as Post["metadata"],
      }))
      // Always sort posts by date, *descending*
      .sort(
        (post1, post2) => -compare(post1.metadata.date, post2.metadata.date)
      )
  );
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.metadata.tags.includes(tag));
}

/**
 * Generate a kebab case slug for a post, based on its camel case unique key
 */
function generateSlug(key: string): string {
  // https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
  return key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}
