<script setup></script>

<template>
  <Header />
  <main>
    <slot></slot>
  </main>
  <Footer />
</template>

<style scoped>
#app {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
}
</style>
