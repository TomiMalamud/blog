const fs = require('fs');
const path = require('path');
const { allPosts } = require('contentlayer/generated'); // Adjust this path based on where Contentlayer generates the data

const domain = 'https://blog.rohisommiers.com'; // Replace with your domain

// Function to generate the sitemap content
const generateSitemapContent = (posts) => {
  const urls = posts.map((post) => `${domain}/posts/${post.slugAsParams.replace(/\//g, '/')}`);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `<url><loc>${url}</loc></url>`).join('\n  ')}
</urlset>`;
  return sitemap;
};

// Function to write the sitemap.xml file
const writeSitemap = (content) => {
  fs.writeFileSync(path.resolve(__dirname, 'public/sitemap.xml'), content);
};

const posts = allPosts.map((post) => ({ slugAsParams: post.slug }));
const sitemapContent = generateSitemapContent(posts);
writeSitemap(sitemapContent);

console.log('Sitemap generated successfully!');
