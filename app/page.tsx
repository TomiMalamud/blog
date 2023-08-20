import { allPosts } from "@/.contentlayer/generated";
import Hero from "@/components/hero";
import Image from "next/image";
import Link from "next/link";
import ArgDate from "@/components/date";
import Newsletter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        id="posts"
        className="mt-10 prose grid grid-cols-1 gap-x-8 gap-y-6 sm:gap-y-32 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        {allPosts.map((post) => (
          <article
            key={post._id}
            className="flex max-w-xl flex-col items-start justify-between"
          >
            <div className="group relative">
              <div className="rounded-md overflow-hidden">
                {post.image && (
                  <Image
                    src={post.image}
                    width={500}
                    height={300}
                    className="aspect-video sm:aspect-square rounded-md h-auto w-auto object-cover transition hover:scale-105"
                    alt={`Imagen del post "${post.title}"`}
                  />
                )}
              </div>
              <h3 className="my-0 text-lg leading-6 text-gray-900 group-hover:text-gray-600">
                <Link href={post.slug} className="font-bold no-underline">
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-x-4 text-xs">
                <ArgDate date={post.date} />
                <Link
                  href={post.category}
                  className="relative z-10 no-underline rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category}
                </Link>
              </div>
            </div>
          </article>
        ))}

      </div>
      <div className="border rounded-lg my-10 p-5 sm:p-10 bg-slate-100/40">
        <h3 className="font-bold mb-2 text-md sm:text-lg">Suscribite para conocer lo último sobre descanso</h3>
        <Newsletter />
        </div>
    </>
  );
}
