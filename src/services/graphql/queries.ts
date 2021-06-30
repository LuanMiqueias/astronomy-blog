import { gql } from "graphql-request";
import { fragments } from "./fragments";
("./fragments");

export const GET_CATEGORIES = {
  query: gql`
    ${fragments.image}
    query GET_CATEGORIES {
      categories {
        name
        slug
        cover {
          ...image
        }
      }
    }
  `,
};

export const GET_POSTS = {
  query: gql`
    ${fragments.image}
    ${fragments.post}
    query GET_POSTS {
      posts {
        ...post
      }
    }
  `,
};
export const GET_INITIAL_DATA = {
  query: gql`
    ${fragments.image}
    ${fragments.post_card}

    query GET_INITIAL_DATA {
      posts(sort: "published_at:desc") {
        ...post_card
      }
      categories {
        name
        slug
        cover {
          ...image
        }
      }
    }
  `,
};

export const GET_POSTS_SLUG = (slug: string) => {
  return {
    variables: {
      slugPost: slug,
    },
    query: gql`
      ${fragments.post}
      ${fragments.image}
      query GET_POSTS_SLUG($slugPost: String!) {
        posts(where: { slug: $slugPost }) {
          ...post
        }
      }
    `,
  };
};

export const GET_POSTS_BY_CATEGORIES = (category: string) => {
  return {
    variables: {
      slugCategory: category,
    },
    query: gql`
      ${fragments.image}
      ${fragments.post}
      query GET_POSTS_BY_CATEGORY($slugCategory: String!) {
        posts(where: { category: { slug: $slugCategory } }) {
          ...post
        }
        categories(where: { slug: $slugCategory }) {
          name
          slug
          cover {
            ...image
          }
        }
      }
    `,
  };
};
