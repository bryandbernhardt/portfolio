<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const localePath = useLocalePath()

const toggleHamburguer = ref(null)
const route = useRoute()

watch(() => route.fullPath, () => {
  if (toggleHamburguer.value) toggleHamburguer.value.checked = false
})
</script>

<template>
  <header class="header">
    <div class="navbar">
      <input type="checkbox" id="menu-toggle" class="menu-toggle" ref="toggleHamburguer" />
      
      <label for="menu-toggle" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav class="menu">
        <NuxtLink :to="localePath('/')">{{ $t('NAVBAR.HOME') }}</NuxtLink>
        <NuxtLink :to="localePath('/links')">{{ $t('NAVBAR.LINKS') }}</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 3rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;

  .navbar {
    position: relative;
    width: 100%;
    height: 100%;

    .menu-toggle {
      display: none;
    }

    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      position: absolute;
      right: 1rem;
      z-index: 11;

      span {
        width: 25px;
        height: 3px;
        border-radius: 2px;
        transition: all 0.3s ease;
      }
    }

    .menu {
      display: flex;
      justify-content: center;
      gap: 2rem;

      a {
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          filter: opacity(0.8);
        }
      }
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .hamburger {
        display: flex;
      }

      .menu {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        background-color: transparent;
        backdrop-filter: none;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        z-index: 10;

        a {
          font-size: 1.25rem;
        }
      }

      .menu-toggle:checked ~ .hamburger span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      .menu-toggle:checked ~ .hamburger span:nth-child(2) {
        opacity: 0;
      }

      .menu-toggle:checked ~ .hamburger span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }

      .menu-toggle:checked ~ .menu {
        opacity: 1;
        visibility: visible;
        // background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(8px);
      }
    }
  }
}
</style>