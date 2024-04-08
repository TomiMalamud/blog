import { allPosts } from "contentlayer/generated";
 
const URL = "https://blog.rohisommiers.com";
 
export default async function sitemap() {
  const posts = allPosts.map(({ id, date }) => ({
    url: `${URL}/blog/${id}`,
    lastModified: date,
  }));
 
  const routes = [""].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return [...routes, ...posts];
}
