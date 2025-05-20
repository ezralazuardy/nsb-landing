import Link from "next/link";
import { formatDate, getBlogPosts } from "@/app/news/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="pb-20">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1"
            href={`/news/${post.slug}`}
          >
            <Card className="hover:scale-101 p-0 w-full gap-4 pb-6 h-auto flex flex-col justify-between bg-white dark:bg-neutral-800 shadow-none hover:shadow-lg transition-all duration-200 ease-in-out rounded-lg overflow-hidden">
              {post.metadata.image && (
                <Image
                  src={post.metadata.image}
                  alt="Blog Image"
                  width={500}
                  height={300}
                  className="rounded-t-lg w-full h-auto object-cover transition-all duration-200 ease-in-out"
                  loading="lazy"
                />
              )}

              <CardContent className="flex-1">
                <div className="w-full flex flex-col space-y-2">
                  <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(post.metadata.publishedAt, false)}
                  </p>
                  <p className="text-neutral-900 dark:text-neutral-100 tracking-tight text-4xl font-serif">
                    {post.metadata.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
    </div>
  );
}
