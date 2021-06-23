export const GET_SETTINGS = {
  query: `
    fragment image on UploadFile{
      altText:alternativeText,
      url,
      formats
    }
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
    query GET_SETTINGS{
      posts(sort:"published_at:desc"){
        ...post_card
      }
      categories{
        name,
        slug,
        cover{
          ...image
        }
      },
      setting{
        blogName,
        BlogDescription,
        hero{
          title,
          subtitle,
          cover{
            ...image
          }
        }
        
        menuLink{
          link,
          text,
          newTab
        },
        logo{
          ...image
        }
      }
      
    }
  `,
};
