export interface IDataSettings {
  blogName: string;
  BlogDescription: string;
  logo: {
    url: string;
    altText: string;
  };
  menuLink?: [];
  hero?: {
    title?: string;
    cover?: {
      url: string;
    }[];
  };
}
export interface IDataCategories {
  name: string;
  slug: string;
  cover: {
    url: string;
  };
}
export interface IDataPosts {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  published_at: string;
  category: {
    name: string;
    slug: string;
  };
  tags: {
    name: string;
    slug: string;
  };
  cover: {
    url: string;
    altText: string;
  };
}
export interface IData {
  data: {
    setting: IDataSettings;
    categories: IDataCategories[];
    posts: IDataPosts[];
  };
}
