<script setup lang="ts">
import { ref, type Ref } from 'vue';
import type { Posts } from '~/types';

definePageMeta({
    title: 'Articles',
});

const { data: posts, error } = (await useFetch('/api/posts')) as { data: Ref<Posts>; error: Ref<Error> };
const postsRef = ref<HTMLElement | null>(null);

if (error.value) {
    throw createError({
        ...error.value,
        statusMessage: `Couldn't fetch posts.`,
    });
}

const perPage: number = 8;

//т.к. не все картинки подгружаются, ставлю предпоследнюю страницу
const currentPage = ref(10);

// computeds
const totalPages = computed<number>(() => {
    return Math.floor(posts.value.length / perPage) + (posts.value.length % perPage === 0 ? 0 : 1);
});

const currentPosts = computed<Posts>(() => {
    return posts.value.slice((currentPage.value - 1) * perPage, currentPage.value * perPage);
});

const showItems = computed<number>(() => {
    return totalPages.value < 5 ? totalPages.value : 5;
});

//methods
const showNextPosts = (): void => {
    if (currentPage.value < totalPages.value) {
        setPage(currentPage.value+1);
    }
};

const showPreviousPosts = (): void => {
    if (currentPage.value > 1) {
        setPage(currentPage.value-1);
    }
};

const setPage = (page: number): void => {
    if (page <= totalPages.value && page >= 1) {
        currentPage.value = page;
        postsRef.value?.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <main class="posts__wrapper grow flex flex-col px-5 md:px-[72px] pt-14 lg:pt-28">
        <h1 ref="postsRef" class="text-4xl md:text-6xl lg:text-7xl">Articles</h1>
        <div            
            class="pt-5 lg:pt-10 grow flex flex-wrap justify-center gap-8"
            v-if="posts.length"
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
            class="pt-12 pb-36"
            :total-pages="totalPages"
            :show-items="showItems"
            :current-page="currentPage"
            @to-left="showPreviousPosts"
            @to-right="showNextPosts"
            @change-page="(value:number) => setPage(value)"
        />
    </main>
</template>
