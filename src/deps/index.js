require("dotenv").config({
  path: ".env",
});
const fs = require("fs");
const fetch = require("node-fetch");

(async () => {
  const menuItems = await getMenuItems(); // gets items from db or api

  await fs.writeFile(
    "./src/services/staticData/menuItems.json",
    JSON.stringify(menuItems),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
})();

async function getMenuItems() {
  const query = {
    query: `
    fragment image on UploadFile{
      altText:alternativeText,
      url,
      formats
    }
    query GET_SETTINGS{
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
        logo{
          ...image
        }
      }
      
    }
  `,
  };

  const responce = await fetch(process.env.BASE_URL_API, {
    method: "post",
    body: JSON.stringify({ ...query }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await responce.json();
  return data;
}
