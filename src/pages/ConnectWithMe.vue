<template>
  <div class="background-container">
    <div id="connect-with-me">
      <h2 id="connect-with-me-title">{{ $t("CONNECT_WITH_ME") }}</h2>
      <div id="connect-with-me-info">
        <p>{{ $t("I_SPEAK") }}</p>
        <a href="mailto:contact@bryandbernhardt.com"><p>
          contact@bryandbernhardt.com
        </p></a>
        <div class="social-media">
          <a href="https://www.linkedin.com/in/bryandbernhardt/" target="_blank" rel="external">
            <img src="../assets/images/linkedin.webp" alt="linkedin" width="48" height="48" />
          </a>
          <a href="https://www.instagram.com/baiaaam/" target="_blank" rel="external">
            <img src="../assets/images/instagram.webp" alt="Instagram" width="48" height="48" />
          </a>
          <a href="https://github.com/bryandbernhardt/" target="_blank" rel="external">
            <img src="../assets/images/github.webp" alt="GitHub" width="48" height="48" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.background-container {
  min-height: 100vh;
  width: 100%;
  background-image: var(--connect-with-me-background);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#connect-with-me {
  min-height: 100vh;
  width: 100%;

  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 2rem;
  gap: 2rem;

  #connect-with-me-title {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    width: 100%;
    align-self: center;
  }

  #connect-with-me-info {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;

    a {
      color: var(--primary-color);
    }

    .social-media {
      padding-top: 1rem;
      display: flex;
      flex-direction: row;
      gap: 0.5rem;

      & img {
        width: 3rem;
      }
    }
  }
}
</style>
