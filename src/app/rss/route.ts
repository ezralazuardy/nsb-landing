import { getBlogPosts } from "@/app/news/utils";

export async function GET() {
  let allBlogs = getBlogPosts();

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${process.env.NEXT_PUBLIC_APP_URL}/news/${post.slug}</link>
          <description>${post.metadata.summary || ""}</description>
          <pubDate>${new Date(
            post.metadata.publishedAt,
          ).toUTCString()}</pubDate>
        </item>`,
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>PT Nasaktian Solusi Bersama</title>
        <link>${process.env.NEXT_PUBLIC_APP_URL}</link>
        <description>This is PT Nasaktian Solusi Bersama RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
