import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — CeyPall (Pvt) Ltd`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const paragraphs = post.content
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href="/blog"
        className="text-sm text-gray-400 hover:text-gray-600 mb-8 inline-block"
      >
        ← Back to blog
      </Link>

      <p className="text-sm text-gray-400 mb-3">
        {new Date(post.date).toLocaleDateString("en-LK", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        {post.title}
      </h1>

      <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed">
        {paragraphs.map((line, i) => {
          if (line.startsWith("### ")) {
            return (
              <h3 key={i} className="text-lg font-semibold text-gray-900 mt-8 mb-3">
                {line.replace("### ", "")}
              </h3>
            );
          }
          if (line.startsWith("## ")) {
            return (
              <h2 key={i} className="text-xl font-semibold text-gray-900 mt-10 mb-3">
                {line.replace("## ", "")}
              </h2>
            );
          }
          if (line.startsWith("- ")) {
            return (
              <li key={i} className="ml-5 list-disc text-gray-700 mb-1">
                {line.replace("- ", "")}
              </li>
            );
          }
          return (
            <p key={i} className="mb-4 text-gray-700">
              {line.replace(/\*\*(.*?)\*\*/g, "$1")}
            </p>
          );
        })}
      </div>

      <div className="mt-16 border-t border-gray-100 pt-10">
        <p className="text-gray-600 mb-4">
          Need ISPM 15-certified pallets for your next shipment?
        </p>
        <Link
          href="/contact"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded font-medium hover:bg-green-800 transition-colors"
        >
          Request a quote →
        </Link>
      </div>
    </main>
  );
}
