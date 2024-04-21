<template>
    <footer class="the-footer__container pt-14 mx-auto max-w-screen-xl">
        <div class="pt-10 pl-12 lg:pl-28">Is there a project?</div>

        <div class="the-footer__content pl-12 lg:pl-28 grow flex flex-wrap justify-between">
            <div class="the-footer__prompt underline text-6xl md:text-7xl lg:text-8xl xl:text-9xl pt-14">
                <span>Let’s work</span>
                <br />
                <span>together</span>
            </div>
            <div class="the-footer__contacts pl-12 xl:pl-0 pt-14 gap-9 w-1/2 flex flex-col items-center">
                <address class="w-[200px] flex flex-col text-base leading-6 text-nowrap not-italic gap-2">
                    <span>For all questions</span>
                    <a href="tel:+7202780068">+7 (920) 278—00—68</a>
                    <a href="mailto:qtim@agency.com">qtim@agency.com</a>
                </address>
                <address class="w-[200px] flex flex-col text-base leading-6 text-nowrap not-italic gap-2">
                    <span>Office in Russia</span>
                    <span
                        >139 Ruben Station Lake <br />
                        Drew, NM 52678</span
                    >
                    <ButtonRound
                        class="the-footer__location-button"
                        :size="32"
                    >
                        <IconPointMap />
                    </ButtonRound>
                </address>
                <address class="w-[200px] flex flex-col text-base leading-6 text-nowrap not-italic gap-2">
                    <span>Office in Dubai</span>
                    <span
                        >139 Ruben Station Lake <br />
                        Drew, NM 52678</span
                    >
                    <ButtonRound
                        class="the-footer__location-button"
                        :size="32"
                    >
                        <IconPointMap />
                    </ButtonRound>
                </address>
            </div>
        </div>

        <div class="the-footer__socials-wrapper flex flex-col items-center pt-10 lg:pt-16">
            <div class="the-footer__socials-wrapper w-full pb-8 relative flex justify-around lg:justify-between">
                <div
                    class="the-footer__socials-column pl-12 flex flex-col items-center gap-x-8 gap-y-3 lg:items-end lg:flex-row lg:pl-14 xl:pl-28"
                >
                    <NuxtLink
                        class="hover:cursor-pointer"
                        to="/"
                        target="_blank"
                        >Facebook</NuxtLink
                    >
                    <NuxtLink
                        to="/"
                        target="_blank"
                        >Instagram</NuxtLink
                    >
                    <NuxtLink
                        to="/"
                        target="_blank"
                        >Telegram</NuxtLink
                    >
                </div>
                <div
                    class="the-footer__socials-column pr-12 flex flex-col items-center gap-x-8 gap-y-3 lg:items-end lg:flex-row lg:pr-14 xl:pr-28"
                >
                    <NuxtLink
                        to="/"
                        target="_blank"
                        >Behance</NuxtLink
                    >
                    <NuxtLink
                        to="/"
                        target="_blank"
                        >Linkedin</NuxtLink
                    >
                    <NuxtLink
                        to="/"
                        target="_blank"
                        >Privacy policy</NuxtLink
                    >
                </div>
                <div class="h-0 w-full absolute bottom-0 flex justify-center">
                    <div class="the-footer__go-link absolute bottom-0 flex items-center justify-center">
                        <NuxtLink
                            to="/"
                            target="_blank"
                        >
                            <span>Go</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
//про адаптацию под мобилку ничего не сказано
.the-footer__container {
    .the-footer__content {
        .the-footer__contacts {
            .the-footer__location-button {
                background-color: $black-900;

                > svg {
                    margin: auto;
                }
            }
        }
    }

    .the-footer__socials-wrapper {
        .the-footer__socials-wrapper {
            min-height: 330px;

            .the-footer__socials-column {
                a {
                    border-bottom: 1px solid;

                    &:hover {
                        color: $purple-dark;
                    }
                }
            }
        }

        .the-footer__go-link {
            > a {
                width: 360px;
                height: 180px;
                border-radius: 360px 360px 0 0;
                background-color: $black-900;
                color: $black-100;
                border: none;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;

                > span {
                    color: inherit;
                    font-size: 32px;
                    margin-bottom: 30px;
                }

                &:hover {
                    cursor: pointer;
                    color: $purple-dark;
                }

                &:active {
                    background-color: $black-600;
                    border: none;
                }
            }
        }
    }
}
</style>
