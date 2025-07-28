// import { getBlogPosts } from "@/app/news/utils";

// export default async function sitemap() {
//   let blogs = getBlogPosts().map((post) => ({
//     url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/${post.slug}`,
//     lastModified: post.metadata.publishedAt,
//   }));

//   let routes = ["", "/blog"].map((route) => ({
//     url: `${process.env.NEXT_PUBLIC_APP_URL}${route}`,
//     lastModified: new Date().toISOString().split("T")[0],
//   }));

//   return [...routes, ...blogs];
// }

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
