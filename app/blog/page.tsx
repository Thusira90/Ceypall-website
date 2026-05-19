import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — CeyPall (Pvt) Ltd",
  description:
    "Expert guides on ISPM 15, wooden pallets, and export packaging for Sri Lankan exporters and manufacturers.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">Blog</h1>
      <p className="text-gray-500 mb-12">
        Expert guides on ISPM 15, wooden pallets, and export packaging.
      </p>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-100 pb-10">
            <p className="text-sm text-gray-400 mb-2">
              {new Date(post.date).toLocaleDateString("en-LK", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              <Link
                href={`/blog/${post.slug}`}
                className="hover:text-green-700 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium text-green-700 hover:underline"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
