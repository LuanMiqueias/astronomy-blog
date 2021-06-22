export const GET_SETTINGS = {
  query: `
    fragment image on UploadFile{
      altText:alternativeText,
      url,
      formats
    }
    query GET_SETTINGS{
      categories(limit:4){
        name,
        slug,
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
