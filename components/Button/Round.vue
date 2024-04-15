<script setup lang="ts">

const props = withDefaults(defineProps<{
  size?: number
}>(), {
  size: 40,
})

</script>

<template>
  <button class="button-round" :style="{
    width: size+'px',
    height: size+'px',
  }">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.button-round {
  box-sizing: border-box;
  border-radius: 50%;
  border: none;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
  }
}
</style>
