<script>
export default {};
</script>

<template>
  <Header />
  <main><slot></slot></main>
  <Footer />
</template>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
}
</style>
