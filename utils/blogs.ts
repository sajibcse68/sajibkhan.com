import fs from 'fs';
import matter from 'gray-matter';

export const getBlogsMetadata = (basePath: string) => {
  const folder = basePath + '/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  // get the file data
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
    const matterResult = matter(fileContents);

    return {
      categories: matterResult.data.categories,
      date: matterResult.data.date,
      description: matterResult.data.description,
      cover_image: matterResult.data.cover_image,
      slug: filename.replace('.md', ''),
      title: matterResult.data.title,
    };
  });
  return posts;
};

export const getBlogContent = (slug: string) => {
  const folder = 'blogs/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);
  return matterResult;
};

export function getReadingTime(content: string) {
  const WORDS_PER_MINUTE = 225;
  const CODE_WORD_WEIGHT = 0.8; // Code blocks are read slower
  const IMAGE_VIEWING_TIME = 12; // Seconds per image

  // Extract code blocks
  const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
  const codeWords = codeBlocks.join(' ').split(/\s+/).length;

  // Remove code blocks from content
  const textContent = content.replace(/```[\s\S]*?```/g, '');

  // Count images
  const imageCount = (content.match(/!$.*?$$.*?$/g) || []).length;

  // Count regular words
  const words = textContent.trim().split(/\s+/).length;

  // Calculate total reading time
  const readingTime = Math.ceil(
    words / WORDS_PER_MINUTE +
      (codeWords * CODE_WORD_WEIGHT) / WORDS_PER_MINUTE +
      (imageCount * IMAGE_VIEWING_TIME) / 60
  );

  return readingTime;
}
