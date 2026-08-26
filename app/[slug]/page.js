import { notFound } from 'next/navigation';
import { ArticleJsonLd } from 'next-seo';

import { CustomMDX } from '../../components/shared/mdx';
import Blogpost from '../../layouts/Blogpost';
import { getPostBySlug, getPostSlugs } from '../../lib/blog';

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Immediately 404 if the slug contains a dot (e.g., .png, .ico) to prevent static file lookups
  if (slug.includes('.')) {
    notFound();
  }

  try {
    const post = getPostBySlug(slug, [
      'title',
      'description',
      'image',
      'date',
      'canonical_url',
      'lang'
    ]);

    if (!post) notFound();

    const title = `${post.title} | Vedant Mistry`;
    const description = post.description || '';
    const url = `https://vedantmistry.com/${slug}`;
    const image = post.image
      ? `https://vedantmistry.com${post.image}`
      : 'https://vedantmistry.com/static/images/home-opt.jpg';

    return {
      title: post.title,
      description,
      openGraph: {
        title,
        description,
        url,
        images: [image],
        type: 'article',
        publishedTime: new Date(post.date).toISOString(),
        modifiedTime: new Date(post.date).toISOString(),
        authors: ['Vedant Mistry']
      },
      alternates: post.canonical_url ? { canonical: post.canonical_url } : undefined
    };
  } catch (error) {
    // Removed the console.warn here to keep terminal clean during expected 404s
    return { title: 'Not Found' };
  }
}

export default async function Post({ params }) {
  const { slug } = await params;

  if (slug.includes('.')) {
    notFound();
  }

  let post;

  try {
    post = getPostBySlug(slug, [
      'canonical_url',
      'content',
      'date',
      'description',
      'image',
      'lang',
      'slug',
      'title'
    ]);
  } catch (error) {
    // Removed console.warn to prevent log spam
    notFound();
  }

  if (!post) notFound();

  const title = `${post.title} | Vedant Mistry`;
  const url = `https://vedantmistry.com/${post.slug}`;
  const date = new Date(post.date).toISOString();
  const image = post.image
    ? `https://vedantmistry.com${post.image}`
    : 'https://vedantmistry.com/static/images/home-opt.jpg';

  return (
    <>
      <ArticleJsonLd
        authorName="Vedant Mistry"
        type="Blog"
        url={url}
        title={title}
        images={[image]}
        datePublished={date}
        dateModified={date}
        description={post.description}
      />
      <Blogpost title={post.title} image={post.image} date={post.date}>
        <CustomMDX source={post.content || ''} format="md" />
      </Blogpost>
    </>
  );
}

export const revalidate = 60;