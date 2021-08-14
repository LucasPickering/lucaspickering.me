import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { compare } from "./utils";

const postsDirectory = "src/_posts";

export interface Post {
  metadata: RawPost["metadata"];
  slug: string;
  markdown: string;
}

interface RawPost {
  metadata: {
    title: string;
    date: Date;
    summary: string;
    banner: string;
    tags: string[];
    links?: Record<string, string>;
  };
  default: string;
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).map((file) => path.parse(file).name);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(postsDirectory, `${slug}.md`));
  const { data: metadata, content: markdown } = matter(raw);

  return {
    metadata: metadata as Post["metadata"],
    slug,
    markdown,
  };
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.metadata.tags.includes(tag));
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    getPostSlugs().map((slug) => getPostBySlug(slug))
  );
  // Always sort posts by date, *descending*
  posts.sort(
    (post1, post2) => -compare(post1.metadata.date, post2.metadata.date)
  );
  return posts;
}
