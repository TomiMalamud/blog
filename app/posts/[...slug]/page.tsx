import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import { Metadata } from "next";
import ArgentineFormattedDate from "@/components/date";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/")
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [post.image],
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author
    },
    description: post.description
  };

  return (
    <>
      <section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>

      <article className="py-6 mx-auto prose">
        <div className="flex items-center">
          {post.date && <ArgentineFormattedDate date={post.date} />}
          <span className="mx-2">·</span>
          <span>{Math.round(post.readingTime.minutes)} min de lectura</span>
        </div>
        <h1 className="my-2 text-slate-850 tracking-tight">{post.title}</h1>
        {post.description && (
          <p className="text-xl mt-0 text-slate-700">{post.excerpt}</p>
        )}
        {post.author && (
          <p className="text-md mt-0 text-slate-700 font-bold">
            Por: {post.author}
          </p>
        )}
        <hr className="my-4" />
        <div className="w-full block relative overflow-hidden">
          {post.image && (
            <Image
              src={post.image}
              width={500}
              height={300}
              className="aspect-video object-cover w-full"
              alt={`Imagen del post "${post.title}"`}
            />
          )}
        </div>
        <div className="md:prose-lg">
          <Mdx code={post.body.code} />
        </div>
      </article>
    </>
  );
}
