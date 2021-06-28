import { gql } from "graphql-request";

export const fragments = {
  image: gql`
    fragment image on UploadFile {
      altText: alternativeText
      url
      formats
    }
  `,
  post: gql`
    fragment post on Post {
      id
      title
      slug
      excerpt
      comments
      published_at
      author {
        name
        slug
      }
      category {
        name
        slug
      }
      tags {
        name
        slug
      }
      cover {
        ...image
      }
      content
    }
  `,

  post_card: gql`
    fragment post_card on Post {
      id
      title
      slug
      excerpt
      author {
        name
        slug
      }
      category {
        name
        slug
      }
      tags {
        name
        slug
      }
      cover {
        ...image
      }
    }
  `,
};
