<script setup lang="ts">
const props = withDefaults(
    defineProps<{
        width?: number;
        height?: number;
    }>(),
    {
        width: 44,
        height: 44,
    }
);
</script>

<template>
    <button
        class="button-round"
        :style="{
            width: width + 'px',
            height: height + 'px',
        }"
    >
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button-round {
    box-sizing: border-box;
    border-radius: 12px;
    border: none;
    background-color: $black-100;

    &:hover {
        cursor: pointer;
        background-color: $black-200;
    }

    &:disabled {
        cursor: default;
    }
}
</style>
