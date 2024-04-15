<script setup>
const postId = useRoute().params.id

const {data: post, error} = await useAsyncData(
    'post',
    () => $fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${postId}`)
)

</script>

<template>
  <main class="post__wrapper">
    <h1>{{ post.preview }}</h1>
    <div class="post__image">
      <NuxtImg :src="post.image"/>
    </div>
    <div class="post__description">
      <span :style="{fontSize: '16px'}">About</span>
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
