<template>
    <main class="main-page__wrapper py-12 gap-16 flex flex-col items-center">
        <NuxtImg src="/main_image.png" />
        <div>QTIM — тестовое задание</div>
        <NuxtLink
            to="/posts"
            class="main-page__link"
        >
            Go!
        </NuxtLink>
    </main>
</template>

<style lang="scss" scoped>
.main-page__wrapper {
    
    .main-page__link {
        width: 360px;
        height: 360px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $purple-light;
        color: $black-100;

        &:hover {
            background-color: $purple-dark;
        }
    }
}
</style>
