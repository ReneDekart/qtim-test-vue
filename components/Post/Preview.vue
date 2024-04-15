<script setup lang="ts">
import {ref} from 'vue'

const isHovered = ref(false)
const props = defineProps<{
  id: string,
  imageUrl: string,
  preview: string
}>()

const postLink = computed(() => {
  if (props.id) {
    return `/posts/${props.id}`
  }
})


</script>

<template>
  <NuxtLink class="post-preview__wrapper" :to="postLink"
    @mouseover="isHovered=true"
    @mouseleave="isHovered=false"
    >
    <NuxtImg :src="imageUrl"
             height="280"
             width="280"
    />
    <div class="post-preview__shot-description">
      {{ preview }}
    </div>
    <div v-show="isHovered"
              class="post-preview__link">
      Read more
    </div>
  </NuxtLink>

</template>

<style lang="scss" scoped>
.post-preview__wrapper {
  height: 414px;
  width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 24px;
  text-decoration: none;
  color: $black-900;

  &:hover {
    cursor: pointer;
  }

  > img {
    object-fit: cover;
  }

  .post-preview__shot-description {
    font-size: 20px;
    height: 74px;
  }

  .post-preview__link {
    color: $purple-light;
  }
}
</style>
