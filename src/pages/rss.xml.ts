import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {

    const posts = await getCollection('blog');

    return rss({
        title: 'Emmanuel`s Blog',
        description: 'A humble Astronaut’s guide to the stars',
        site: site ?? '',
        items: posts.map(({ data, slug }) => ({
            title: data.title,
            pubDate: data.date,
            description: data.description,
            link: `posts/${slug}`
        })),
        customData: `<language>es-mx</language>`,
    });
}