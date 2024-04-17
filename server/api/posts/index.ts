import { $fetch } from 'ofetch';

const apiBaseUrl = process.env.API_BASE_URL;

export default defineEventHandler(async (/*event*/) => {
    let posts = await $fetch(`${apiBaseUrl}/posts/`);    
    
    if (!posts) {
        throw createError({
            statusCode: 404,
            message: 'Posts not fetched.',
        });
    }

    return posts;
});
