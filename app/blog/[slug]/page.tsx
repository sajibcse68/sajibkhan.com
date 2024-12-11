import Markdown from 'markdown-to-jsx';
import { Metadata } from 'next';
import { getBlogsMetadata, getBlogContent } from '@/utils/blogs';
import React from 'react';

// utils
import { capitalizeFirstLetter } from '@/utils/common';

export async function generateStaticParams() {
  const blogs = getBlogsMetadata('blogs');
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: any) {
  const { slug } = params;
  const id = slug ? `${slug} | Sajib's Blog` : '';

  return {
    title: `${capitalizeFirstLetter(id.replaceAll('-', ' ') ?? '')}`,
  };
}

export default function BlogPage(props: any) {
  const { slug } = props.params;
  const blog = getBlogContent(slug);

  return (
    <article className="markdown col-span-full mx-auto grid max-w-7xl grid-cols-4 gap-x-4 break-words md:grid-cols-8 lg:col-span-8 lg:col-start-3 lg:grid-cols-12 lg:gap-x-6">
      <Markdown options={{ forceBlock: true }}>{blog.content}</Markdown>
    </article>
  );
}
