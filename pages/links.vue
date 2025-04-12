<template>
  <div class="links-page">
    <NuxtImg
      class="profile-image"
      src="profile-photo.webp"
      alt="Bryan Dietrich Bernhardt"
      format="webp"
      loading="lazy"
      placeholder
    />
    <h1>Bryan Dietrich Bernhardt</h1>
    <p>is an investor, electronics technician, <br>analyst/systems developer.. hacker?🤷‍♂️</p>
    <div class="social-medias">
      <NuxtLink
        to="https://www.instagram.com/bryandbernhardt"
        target="_blank"
        rel="noopener"
        class="social-media-link"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="32"
          height="32"
        >
          <path
            d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1-.001 6.001A3 3 0 0 1 12 9zm4.5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
          />
        </svg>
      </NuxtLink>
      <NuxtLink
        to="https://github.com/bryandbernhardt/"
        target="_blank"
        rel="noopener"
        class="social-media-link"
        aria-label="GitHub"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
          <path d="M12 2C6.477 2 2 6.486 2 12.017c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.158-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.07 1.533 1.032 1.533 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.221-.252-4.555-1.113-4.555-4.951 0-1.094.39-1.99 1.029-2.692-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.563 9.563 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.336c1.909-1.296 2.748-1.026 2.748-1.026.545 1.376.202 2.393.1 2.646.64.702 1.028 1.598 1.028 2.692 0 3.848-2.337 4.696-4.565 4.944.359.309.679.918.679 1.852 0 1.336-.012 2.416-.012 2.743 0 .268.18.579.688.481A10.02 10.02 0 0 0 22 12.017C22 6.486 17.523 2 12 2z"/>
        </svg>
      </NuxtLink>
      <NuxtLink
        to="https://www.linkedin.com/in/bryandbernhardt/"
        target="_blank"
        rel="noopener"
        class="social-media-link"
        aria-label="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 24V7.98h4V24h-4zM8.5 7.98h3.86v2.19h.06c.54-1.03 1.86-2.12 3.82-2.12 4.08 0 4.84 2.69 4.84 6.19V24h-4v-7.58c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.91 1.97-2.91 4v7.72h-4V7.98z"/>
        </svg>
      </NuxtLink>
    </div>
    <NuxtLink to="https://beeanalyzer.vercel.app/" target="_blank" rel="noopener"><button>BeeAnalyzer | system</button></NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.links-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;

  .social-medias {
    display: flex;
    gap: 1rem;
    margin: 0 0 2rem 0;
  }

  h1 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    padding: 2.5rem 0 1rem 0;
    margin: 0;
  }

  p {
    font-size: 1rem;
  }

  .profile-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }

  a {
    width: 100%;
    max-width: 40rem;

    button {
      width: 100%;
      max-width: 36.25rem;
      height: 4rem;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
      transition: transform 0.2s ease, background-color 0.2s ease;

      &:hover {
        animation: bounce-scale 0.4s ease;
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.97) translateY(0); // volta e simula o clique
      }
    }
  }
}

@keyframes bounce-scale {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1.05);
  }
}
</style>