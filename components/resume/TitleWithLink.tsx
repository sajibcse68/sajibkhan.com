import Link from 'next/link';
import { type ImageProps } from 'next/image';
import { Icons } from '@/components/icons';
import LabelWithGraphic from '@/components/label-with-graphic';

type TitleWithLinkProps = {
  image?: ImageProps['src'];
  title: string;
  link: string;
};

export default function TitleWithLink({ image = '', title, link }: TitleWithLinkProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className="flex items-center gap-x-1 group"
    >
      <Icons.Link
        size={12}
        className="text-zinc-400 transition group-hover:text-zinc-700 dark:text-zinc-400 dark:group-hover:text-zinc-200 group-hover:animate-shake"
      />
      <LabelWithGraphic image={image} content={title} />
    </Link>
  );
}