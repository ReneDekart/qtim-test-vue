<script setup>
import {ref} from 'vue'

definePageMeta({
  title: 'Articles',
})

const {data: posts, error} = await useAsyncData(
    'posts',
    () => $fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
)

const perPage = 8
//т.к. не все картинки подгружаются, ставлю предпоследнюю страницу
const currentPage = ref(10)

const totalPages = computed(() => {
  return Math.floor(posts.value.length / perPage) + ((posts.value.lenght % perPage) === 0 ? 0 : 1)
})

const currentPosts = computed(() => {
  return posts.value.slice((currentPage.value - 1) * perPage, (currentPage.value * perPage))
})

const showPrevious = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}
const showNext = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

const setPage = (page) => {
  if (page <= totalPages.value && page >= 1) {
    currentPage.value = page
  }
}


</script>

<template>
  <main class="posts__wrapper">
    <h1>Articles</h1>
    <div class="posts__content">
      <PostPreview v-for="post in currentPosts" :key="post.id"
                   :id="post.id"
                   :image-url="post.image"
                   :preview="post.preview"
      />
    </div>
    <Pagination class="posts__pagination"
                :total-pages="totalPages"
                :show-items="5"
                :current-page="currentPage"
                @to-left="showPrevious"
                @to-right="showNext"
                @change-page="value=>setPage(value)"
    />
  </main>
</template>

<style lang="scss" scoped>
.posts__wrapper {
  padding-inline: 112px;
  padding-top: 120px;

  .posts__content {
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

