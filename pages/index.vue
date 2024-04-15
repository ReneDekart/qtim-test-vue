<template>
  <main class="main-page__wrapper">
    <NuxtImg src="/main_image.png"/>
    <div>QTIM — тестовое задание</div>
    <NuxtLink to="/posts"
              class="main-page__link"
    >
      Go!
    </NuxtLink>
  </main>
</template>

<style lang="scss" scoped>
.main-page__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 145px;
  gap: 130px;

  .main-page__link {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $purple-light;
    color: $black-100;
  }
}
</style>
