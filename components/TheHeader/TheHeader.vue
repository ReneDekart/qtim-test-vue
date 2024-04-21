<template>
    <header
        class="the-header__container w-full py-4 flex flex-wrap items-center flex-start gap-y-4 gap-x-8 md:gap-x-14 lg:gap-x-24"
    >
        <div class="grow">
            <NuxtLink to="/">
                <NuxtImg
                    :height="25"
                    :width="84"
                    src="/logo.png"
                    alt="QTIM"
                />
            </NuxtLink>
        </div>
        <nav class="the-header__nav-links flex flex-nowrap items-center gap-6 lg:gap-14">
            <NuxtLink to="/"> Works </NuxtLink>
            <NuxtLink to="/"> About </NuxtLink>
        </nav>
        <div class="ml-auto flex items-center gap-4">
            <ButtonRound
                class="the-header__language-button"
                :size="52"
            >
                <NuxtImg
                    class="m-auto"
                    height="24px"
                    width="24px"
                    src="/flag_uk.png"
                />
            </ButtonRound>
            <button class="the-header__work-button">Let's work</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.the-header__container {
    min-height: 121px;

    .the-header__nav-links {
        a:hover {
            color: $purple-dark;
        }
    }

    .the-header__language-button {
        background-color: transparent;
        border: 2px solid rgba(0, 0, 0, 0.1);

        &:hover {
            background-color: $black-200;
        }

        &:active {
            background-color: $black-100;
        }
    }

    .the-header__work-button {
        height: 52px;
        width: 142px;
        border: none;
        border-radius: 26px;
        background-color: $black-900;
        color: white;
        font-size: 20px;
        font-weight: 400;
        line-height: 100%;

        &:hover {
            cursor: pointer;
            background-color: $black-200;
        }

        &:active {
            background-color: $black-100;
        }
    }
}
</style>
