export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: React.ReactNode;
}

export interface BlogListProps {
  posts: BlogPost[];
}

export interface BlogPostProps {
  post: BlogPost;
}