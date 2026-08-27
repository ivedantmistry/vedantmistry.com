import { getAllPosts } from '../lib/blog';

export default function sitemap() {
    const baseUrl = 'https://vedantmistry.com';

    const staticRoutes = [
        '',
        '/about',
        '/articles',
        '/projects',
        '/uses',
        '/contact',
        '/reminder'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
    }));

    const posts = getAllPosts(['slug', 'date']);

    const articleRoutes = posts.map((post) => ({
        url: `${baseUrl}/${post.slug}`,
        lastModified: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    }));

    return [...staticRoutes, ...articleRoutes];
}