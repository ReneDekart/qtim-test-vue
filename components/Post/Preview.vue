<script setup lang="ts">
import { ref } from 'vue';

const isHovered: Ref<boolean> = ref(false);

const props = defineProps<{
    id: string;
    imageUrl: string;
    preview: string;
}>();

const postLink = computed<string>(() => {
    return `/posts/${props.id}`;
});
</script>

<template>
    <NuxtLink
        class="post-preview__container h-[414px] w-[280px] flex flex-col justify-end hover:cursor-pointer"
        :to="postLink"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <NuxtImg
            class="h-[280px] w-[280px] mb-6 object-cover"
            placeholder="/no_image.png"
            :src="imageUrl"
        />
        <p class="h-[74px] mb-3 text-xl leading-6 line-clamp-3">
            {{ preview }}
        </p>
        <div
            v-show="isHovered"
            class="post-preview__link"
        >
            Read more
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.post-preview__container {
    .post-preview__link {
        color: $purple-light;
    }
}
</style>
