<template>
    <footer class="the-footer__container">
        <div>Is there a project?</div>

        <div class="the-footer__content">
            <div class="the-footer__prompt">
                Let’s work <br />
                together
            </div>
            <div class="the-footer__contacts">
                <address>
                    <span>For all questions</span>
                    <a href="tel:+7202780068">+7 (920) 278—00—68</a>
                    <a href="mailto:qtim@agency.com">qtim@agency.com</a>
                </address>
                <address>
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
                <address>
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

        <div class="the-footer__socials-wrapper">
            <div class="the-footer__socials-links">
                <NuxtLink
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
            <div>
                <NuxtLink
                    class="the-footer__go-link"
                    to="/"
                    target="_blank"
                >
                    <span>Go</span>
                </NuxtLink>
            </div>
            <div class="the-footer__socials-links">
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
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.the-footer__container {
    max-width: 1440px;
    margin: 0 auto;    
    display: flex;
    flex-direction: column;

    padding-top: 140px;
    padding-left: 112px;
    padding-right: 112px;

    .the-footer__content {
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .the-footer__prompt {
            padding-top: 56px;
            font-size: 112px;
            text-decoration: underline;
            font-weight: 300;
        }

        .the-footer__contacts {
            padding-top: 56px;
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 36px;

            > address {
                display: flex;
                flex-direction: column;
                width: 200px;
                gap: 8px;

                > span,
                a {
                    font-size: 16px;
                    line-height: 24px;
                    color: inherit;
                }
            }

            .the-footer__location-button {
                background-color: $black-900;
            }
        }
    }

    .the-footer__socials-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-top: 145px;

        .the-footer__socials-links {
            display: flex;
            flex-wrap: wrap;
            gap: 32px;
            margin-bottom: 30px;
            justify-content: center;

            > a {
                display: inline-block;
                color: inherit;
                font-size: 16px;
                line-height: 24px;
                border-bottom: 1px solid;
            }
        }

        .the-footer__go-link {
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
                font-size: 32px;
                margin-bottom: 30px;
            }

            &:hover {
                cursor: pointer;
            }

            &:active {
                background-color: $black-600;
                border: none;
            }
        }
    }
}
</style>
