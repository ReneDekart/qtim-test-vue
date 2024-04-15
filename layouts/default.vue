<template>
  <div class="default-layout__wrapper">
    <TheHeader/>
    <div class="page__wrapper">
      <slot/>
    </div>
    <TheFooter/>
  </div>
</template>

<style lang="scss" scoped>
.default-layout__wrapper {
  margin: 0 auto;
  min-width: 720px;
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .page__wrapper {
    flex-grow: 1;
  }
}
</style>
