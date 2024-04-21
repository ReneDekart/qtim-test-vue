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
    <main class="post__wrapper px-0 md:px-8 lg:px-14 xl:px-20 pt-10 lg:pt-28 ">
        <h1 class="text-4xl lg:text-7xl">{{ post.preview }}</h1>
        <div class="pt-10 lg:pt-20 flex items-center">
            <NuxtImg
                class="w-full"
                placeholder="/no_image.png"
                :src="post.image"  
            />
        </div>
        <div class="max-w-[695px] pt-10 pb-20 flex flex-col gap-8 text-2xl lg:text-4xl leading-10">
            <span class="text-base">About</span>
            <p>{{ post.description }}</p>
        </div>
    </main>
</template>
