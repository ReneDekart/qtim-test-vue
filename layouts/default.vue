<template>
    <div class="default-layout__wrapper">
        <TheHeader class="the-header__wrapper" />
        <div class="page__wrapper">
            <slot />
        </div>
        <div class="the-footer__wrapper">
            <TheFooter />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.default-layout__wrapper {
    //про адаптацию под мобилку ничего не сказано
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    .the-header__wrapper {
        max-width: 1440px;
    }

    .page__wrapper {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        max-width: 1440px;
    }

    .the-footer__wrapper {
        background-color: $purple-light;
        width: 100%;
    }
}
</style>
