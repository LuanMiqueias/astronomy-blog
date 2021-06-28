export interface IPosts {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  comments: boolean;
  published_at: string;
  author: {
    name: string;
    slug: string;
  };
  category: {
    name: string;
    slug: string;
  };
  tags: {
    name: string;
    slug: string;
  };
  cover: {
    altText: string;
    url: string;
    formats: string;
  };
  content: string;
}

export interface IDataPosts {
  posts: IPosts;
}

export interface IPostsCards {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  author: {
    name: string;
    slug: string;
  };
  category: {
    name: string;
    slug: string;
  };
  cover: {
    altText: string;
    url: string;
  };
}
