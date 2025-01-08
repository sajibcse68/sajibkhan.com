import { getBlogContent, getReadingTime } from '@/utils/blogs';
import { formatDate } from '@/utils/common';
import Link from 'next/link';
import Image from 'next/image';

type BlogCardProps = {
  blog: {
    slug: string;
    title: string;
    description: string;
    cover_image: string;
    date: string;
    categories: string;
  };
};

function BlogCard({ blog }: BlogCardProps) {
  const { slug, title, description, cover_image, date, categories } = blog;
  const readingTime = getReadingTime(getBlogContent(slug)?.content ?? '');

  const coverImageUrl = cover_image ? cover_image : `/images/blogs/${slug}.webp`;

  return (
    <Link href={`/blog/${slug}`}>
      <article className="group h-full cursor-pointer rounded-2xl border border-gray-300 bg-white shadow-lg hover:shadow-2xl hover:ring-2 hover:ring-blue-500 dark:border-white2-80 dark:bg-white2-40">
        <div className="rounded-t-2xl aspect-[16/9]">
          <Image
            src={coverImageUrl}
            width="500"
            height="500"
            alt="Blog Title"
            className="h-full w-full rounded-t-2xl object-cover"
          />
          {/* <span className="absolute top-4 left-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
          Category
        </span> */}
        </div>

        {/** <!-- Card Content --> */}
        <div className="p-4">
          <div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
              <time>{formatDate(date ?? new Date(), 'yyyy-MM-ii')}</time>
              <span>•</span>
              <span>{readingTime} min read</span>
            </div>

            <div className="my-4 mb-3 text-xl font-bold capitalize text-primary dark:text-white">
              {title}
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;
