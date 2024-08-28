<template>
  <div class="index-page">
    <ContentDoc />
    <div class="footer">
      <p>{{ $t('BUILT_SITE') }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-page {
  margin-bottom: 4rem;

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    font-size: small;
    opacity: 0.6;
  }
}
</style>