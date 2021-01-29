export interface Post {
  type: string;
  slug: string;
  title: string;
  subtitle?: React.ReactNode;
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
  type: "projects";
}
