export const GET_SETTINGS = {
  query: `
    fragment image on UploadFile {
      id
      alternativeText
      url
    }

    query GET_SETTINGS{
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
