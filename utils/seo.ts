export function getSiteMetaData({
  title = 'Sajib Khan | Expert Frontend Architect in JavaScript, React & Next.js',
  description = 'Discover Sajib Khan, a seasoned frontend developer with 10+ years of expertise in JavaScript, React, TypeScript, and Next.js. Explore blogs, projects, and career highlights of an innovative web solutions architect.',
  type = 'website',
  author = '@sajibkhan',
  images = ['https://sajibkhan.com/images/og/website.png'],
  creator = '@sajibkhan',
  keywords = [
    'Frontend Developer',
    'JavaScript',
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Web Development',
    'Responsive Design',
    'Web Design',
    'UI Development',
    'Modern Web Technologies',
    'Frontend Architecture',
    'SPA Development',
    'JavaScript Frameworks',
    'Performance Optimization',
    'User Experience',
    'CSS Frameworks',
  ],
}: {
  title?: string;
  description?: string;
  type?: 'website' | 'article';
  author?: string;
  images?: string[];
  creator?: string;
  keywords?: string[];
}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type,
      author,
      creator,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      author,
      creator,
      images,
    },
  };
}
