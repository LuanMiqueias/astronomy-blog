export const GET_CATEGORIES = {
  query: `
    fragment image on UploadFile{
      altText:alternativeText,
      url,
      formats
    }
    query GET_CATEGORIES{
      categories{
        name,
        slug,
        cover{
          ...image
        }
      },      
    }
  `,
};

export const GET_POSTS = {
  query: `
      fragment post_card on Post{
        id,
        title,
        slug,
        excerpt,
        published_at
        category{
          name,
          slug
        },
        tags{
          name,
          slug
        }
        cover{
          ...image
        }
    }
    fragment image on UploadFile{
      altText:alternativeText,
      url,
      formats
    }
    
    query GET_POSTS{
      posts{
        ...post_card
      }
    }
  `,
};

export const GET_POSTS_SLUG = (slug: string) => {
  console.log(slug);
  return {
    variables: {
      slugPost: slug,
    },
    query: `
      fragment post on Post{
        id,
        title,
        slug,
        excerpt,
        comments
        published_at
        author{
          name
          slug
        }
        category{
          name,
          slug
        },
        tags{
          name,
          slug
        }
        cover{
          ...image
          
        }
      content
    }
    fragment image on UploadFile{
      altText:alternativeText,
      url,
      formats
    }
    query GET_POSTS_SLUG($slugPost: String!){
      posts(where:{
        slug:	$slugPost,
      })
      {
      ...post
      }
    }
  `,
  };
};
