<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { Posts } from '~/types';

definePageMeta({
    title: 'Articles',
});

const { data: posts, error } = (await useFetch('/api/posts')) as { data: Ref<Posts>; error: Ref<Error> };

if (error.value) {
    throw createError({
        ...error.value,
        statusMessage: `Couldn't fetch posts.`,
    });
}

const perPage: number = 8;

//т.к. не все картинки подгружаются, ставлю предпоследнюю страницу
const currentPage = ref(10);

const totalPages = computed<number>(() => {
    return Math.floor(posts.value.length / perPage) + (posts.value.length % perPage === 0 ? 0 : 1);
});

const currentPosts = computed<Posts>(() => {
    return posts.value.slice((currentPage.value - 1) * perPage, currentPage.value * perPage);
});

const showPreviousPosts = (): void => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const showItems = computed<number>(() => {
    return totalPages.value < 5 ? totalPages.value : 5;
});

const showNextPosts = (): void => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const setPage = (page: number): void => {
    if (page <= totalPages.value && page >= 1) {
        currentPage.value = page;
    }
};
</script>

<template>
    <main class="posts__wrapper">
        <h1>Articles</h1>
        <div
            v-if="posts.length"
            class="posts__content"
        >
            <PostPreview
                v-for="post in currentPosts"
                :key="post.id"
                :id="post.id"
                :image-url="post.image"
                :preview="post.preview"
            />
        </div>
        <Pagination
            class="posts__pagination"
            :total-pages="totalPages"
            :show-items="showItems"
            :current-page="currentPage"
            @to-left="showPreviousPosts"
            @to-right="showNextPosts"
            @change-page="(value:number) => setPage(value)"
        />
    </main>
</template>

<style lang="scss" scoped>
.posts__wrapper {
    padding-inline: 112px;
    padding-top: 120px;
    flex-grow: 1;
    display: flex;
    
    flex-direction: column;

    .posts__content {
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding-top: 40px;
        gap: 24px;
    }

    .posts__pagination {
        padding-top: 50px;
        padding-bottom: 140px;
    }
}
</style>
