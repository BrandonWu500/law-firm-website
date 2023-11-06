export type Menu = {
  title: string;
  path: string;
};

export type Author = {
  node: {
    name: string;
    description: string;
  };
};

export type Post = {
  title: string;
  uri: string;
  excerpt: string;
  date: string;
  author: Author;
  content: string;
};
