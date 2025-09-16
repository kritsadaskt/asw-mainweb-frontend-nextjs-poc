export async function getData(url: string) {
  const content = await fetch(`${process.env.STRAPI_API}${url}`, {
    headers: {
      'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  });
  const data = await content.json();
  return data;
}