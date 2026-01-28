export type User = {
  id: string;
  name: string;
  avatarId: string;
};

export type Comment = {
  id: string;
  author: User;
  date: string;
  content: string;
  replies?: Comment[];
  likes: number;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  author: User;
  date: string;
  category: string;
  tags: string[];
  imageId: string;
  isPopular: boolean;
  comments: Comment[];
};

export type DiscussionPost = {
  id: string;
  author: User;
  date: string;
  content: string;
};

export type Discussion = {
  id: string;
  title: string;
  author: User;
  date: string;
  posts: DiscussionPost[];
  participants: User[];
  lastActivity: string;
};

export type LearningResource = {
  id: string;
  title: string;
  description: string;
  type: 'PDF' | 'Video' | 'Link';
  url: string;
};

export type Stats = {
  articles: number;
  discussions: number;
  resources: number;
};
