import FeaturedArticle from '../../components/FeaturedArticle';
import { ListGroup } from '../../components/ListGroup';
import ListItem from '../../components/ListItem';
import Base from '../../layouts/Base';
import { getAllPosts, getPostBySlug } from '../../lib/blog';

export const metadata = {
  title: 'Articles',
  description:
    'You can read about Philosophy, Human Anatomy, Pyschology, Technology and glimpse inside my mind in English and will try in German too. All the articles written here are written by my own and not using an AI, so you are reading unfiltered me.',
  openGraph: {
    title: 'Articles | Vedant Mistry',
    url: 'https://vedantmistry.com/articles',
    images: ['/static/images/articles-bw.jpg']
  }
};

export default async function Articles() {
  const allPosts = getAllPosts(['date', 'skip', 'slug', 'title']);

  const featuredParams = [
    'date',
    'slug',
    'title',
    'image',
    'content',
    'description'
  ];

  const featuredPosts = [
    getPostBySlug('stargazers-in-a-sandbox', featuredParams),
  ];

  const description = `Here you can find all the <strong>${allPosts.length} article</strong> I have wrote. You can read about Philosophy, Human Anatomy, Pyschology, Technology and glimpse inside my mind in English and will try in German too. All the articles written here are written by my own and not using an AI, so you're reading unfiltered me.`;

  const renderFeatured = () => {
    return featuredPosts.map((post, index) => {
      return (
        <FeaturedArticle
          key={post.slug}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          description={post.description}
          image={post.image}
          stats={post.stats}
          content={post.content}
        />
      );
    });
  };

  const renderAll = () => {
    return allPosts
      .filter((post) => !post.skip)
      .map((post, index) => {
        return (
          <ListItem
            key={post.slug}
            index={index}
            href={`/${post.slug}/`}
            title={post.title}
            date={post.date}
          />
        );
      });
  };

  return (
    <Base
      title="Articles | Vedant Mistry"
      tagline="Stories. Updates. Guides."
      primaryColor="yellow"
      secondaryColor="pink"
    >
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <h2>Featured Articles</h2>
      <div className="my-2.5 mt-2.5 -ml-5 md:flex md:w-[calc(100%+3.375rem)] md:justify-between">
        {renderFeatured()}
      </div>
      <h2>All Articles</h2>
      <ListGroup>{renderAll()}</ListGroup>
    </Base>
  );
}
