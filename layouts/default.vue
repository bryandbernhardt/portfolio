<script setup>
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
})
</script>

<template>
  <slot />
</template>
