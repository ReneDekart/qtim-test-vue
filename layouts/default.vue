<template>
    <div class="default-layout__wrapper min-w-[360px] w-full bg-white">
        <UContainer class="max-w-screen-xl px-6 lg:px-9">
            <TheHeader />
            <slot />
        </UContainer>
        <div class="the-footer__wrapper w-full">
            <TheFooter/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
//про адаптацию под мобилку ничего не сказано
.the-footer__wrapper{
    background-color: $purple-light;
}
</style>
