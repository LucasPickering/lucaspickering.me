import { compare, isDefined } from "./utils";
import * as posts from "@root/pages/posts";

export interface Post {
  slug: string;
  metadata: {
    title: string;
    date?: string; // Ongoing project posts aren't dated
    summary: string;
    banner: string;
    /**
     * Should images be shown in larger format? Useful for photo posts
     */
    isGallery?: boolean;
    tags: string[];
    /**
     * If true, the post will be hidden from lists (for unpublished posts)
     */
    hidden?: boolean;
    links?: Record<string, string>;
  };
}

/**
 * Get all defined blog posts.
 */
export function getAllPosts(sort: boolean = false): Post[] {
  const rv = Object.entries(posts).map(([key, post]) => ({
    slug: generateSlug(key),
    // This is a dangerous coercion but who cares
    metadata: post.metadata as Post["metadata"],
  }));
  if (sort) {
    // If requested, sort posts by date, *descending*
    rv.sort(
      (post1, post2) => -compare(post1.metadata.date, post2.metadata.date)
    );
  }
  return rv;
}

/**
 * Get *dated* posts sorted by date. Post that don't have a date are ongoing
 * and therefore can't be "recent". It doesn't make sense to show them in a feed
 */
export function getRecentPosts(): Post[] {
  return getAllPosts(true).filter(({ metadata }) => isDefined(metadata.date));
}

/**
 * Get all the unique tags that exist on at least one post.
 */
export function getAllTags(): string[] {
  const uniqueTags: Set<string> = new Set();
  for (const post of getAllPosts()) {
    for (const tag of post.metadata.tags) {
      uniqueTags.add(tag);
    }
  }
  return Array.from(uniqueTags);
}

/**
 * Get all the posts that have a particular tag.
 */
export function getPostsByTag(tag: string): Post[] {
  return getAllPosts(true).filter((post) => post.metadata.tags.includes(tag));
}

/**
 * Generate a kebab case slug for a post, based on its camel case unique key
 */
function generateSlug(key: string): string {
  // https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707
  return key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}
