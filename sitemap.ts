// app/sitemap.ts

import { MetadataRoute } from 'next';
import { allPosts } from "@/.contentlayer/generated";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://blog.rohisommiers.com';

  const blogUrls = allPosts.map(post => ({
    url: `/${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date), 
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...blogUrls,    
  ];
}
