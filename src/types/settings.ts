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
