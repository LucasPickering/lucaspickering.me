export const POST_TYPES = {
  blog: {
    route: "blog",
    label: "Blog",
  },
  project: {
    route: "/projects",
    label: "Projects",
  },
};

export interface Post {
  type: keyof typeof POST_TYPES;
  slug: string;
  title: string;
  links?: Array<{
    label: string;
    link: string;
  }>;
  tags: string[];
  summary: React.ReactNode;
  banner: string;
  Component: React.FC;
}

export interface BlogPost extends Post {
  type: "blog";
  date: Date;
}

export interface Project extends Post {
  type: "project";
}
