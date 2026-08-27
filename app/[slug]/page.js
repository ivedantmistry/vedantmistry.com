// app/[slug]/page.js

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
      : 'https://vedantmistry.com/static/images/avatar.jpeg';

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

    notFound();
  }

  if (!post) notFound();

  const title = `${post.title} | Vedant Mistry`;
  const url = `https://vedantmistry.com/${post.slug}`;
  const date = new Date(post.date).toISOString();
  const image = post.image
    ? `https://vedantmistry.com${post.image}`
    : 'https://vedantmistry.com/static/images/avatar.jpeg';

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