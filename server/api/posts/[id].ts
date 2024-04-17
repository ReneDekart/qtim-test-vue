import { $fetch } from 'ofetch';

const apiBaseUrl = process.env.API_BASE_URL;

export default defineEventHandler(async (event) => {
    const { id } = event.context.params as { id?: string };

    const post = await $fetch(`${apiBaseUrl}/posts/${id}/`);

    if (!post) {
        throw createError({
            statusCode: 404,
            message: 'Post not fetched.',
        });
    }

    return post;
});
