import { getBlogsMetadata } from '@/utils/blogs';
import React from 'react';

// components
import BlogSection from '@/components/sections/BlogSection';

export const generateStaticParams = async () => {
  const blogs = getBlogsMetadata('blogs');
  return blogs.map((blog) => ({ slug: blog.slug }));
};

export async function generateMetadata({ params }: any) {
  return {
    title: `Sajib's Blogs | Expert Thoughts on JavaScript, React, TypeScript, and Next.js`,
  };
}

export default function BlogPage() {
  return (
    <article className="mx-auto max-w-7xl">
      <BlogSection />
    </article>
  );
}
