<template>
    <header class="the-header__container">
        <div class="the-header__logo">
            <NuxtLink to="/">
                <NuxtImg
                    :height="25"
                    :width="84"
                    src="logo.png"
                    alt="QTIM"
                />
            </NuxtLink>
        </div>
        <nav class="the-header__menu">
            <NuxtLink to="/"> Works </NuxtLink>
            <NuxtLink to="/"> About </NuxtLink>
        </nav>
        <div class="the-header__buttons">
            <ButtonRound
                class="the-header__language-button"
                :size="52"
            >
                <NuxtImg
                    :height="24"
                    :width="24"
                    src="flag_uk.png"
                />
            </ButtonRound>
            <button class="the-header__work-button">Let's work</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.the-header__container {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    min-height: 121px;
    padding-inline: 35px;
    gap: 90px;

    .the-header__logo {
        flex-grow: 1;
    }

    .the-header__menu {
        display: flex;
        align-items: center;
        gap: 60px;
    }

    .the-header__buttons {
        display: flex;
        gap: 16px;

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
}
</style>
