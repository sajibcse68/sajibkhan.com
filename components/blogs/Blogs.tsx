import BlogCard from '@/components/blogs/BlogCard';
import { getBlogsMetadata } from '@/utils/blogs';

function Blogs() {
  const blogs = getBlogsMetadata('blogs').sort((a, b) => {
    return new Date(a.date) > new Date(b.date) ? -1 : 1;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} />
      ))}
    </div>
  );
}

export default Blogs;
