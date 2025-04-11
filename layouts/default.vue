<script setup>
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
})
</script>

<template>
  <Header />

  <main class="content">
    <slot />
  </main>

  <footer class="footer">
    {{ $t('FOOTER') }}
  </footer>
</template>

<style lang="scss">
.content {
  min-height: calc(100vh - 3rem - 3rem);
  padding: 0 2rem;
}

.footer {
  width: 100%;
  height: 3rem;
  padding: 0.875rem 0;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.6;
}
</style>