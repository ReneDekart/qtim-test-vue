<script setup lang="ts">
import type { Post } from '~/types';

const { id } = useRoute().params as { id: string };

const { data: post, error } = (await useFetch(`/api/posts/${id}`)) as { data: Ref<Post>; error: Ref<Error> };

if (error.value) {
    throw createError({
        ...error.value,
        statusMessage: `Couldn't fetch post.`,
    });
}
</script>

<template>
    <main class="post__wrapper">
        <h1>{{ post.preview }}</h1>
        <div class="post__image">
            <NuxtImg
                placeholder="/no_image.png"
                :src="post.image"  
            />
        </div>
        <div class="post__description">
            <span :style="{ fontSize: '16px' }">About</span>
            <p>{{ post.description }}</p>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.post__wrapper {
    padding-inline: 112px;
    padding-top: 120px;

    .post__image {
        padding-top: 80px;
        display: flex;
        align-items: center;

        > img {
            width: 100%;
        }
    }

    .post__description {
        max-width: 695px;
        display: flex;
        flex-direction: column;
        padding-top: 40px;
        gap: 32px;
        font-size: 36px;
        line-height: 44px;
        padding-bottom: 80px;
    }
}
</style>
