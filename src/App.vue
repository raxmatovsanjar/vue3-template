<script>
import Default from '@/layouts/default.vue';
import empty from '@/layouts/empty.vue';
export default {
  components: {
    Default,
    empty
  },
  data() {
    return {
      layout: null,
      pageLoading: true
    };
  },
  watch: {
    $route(route) {
      this.layout = route.meta.layout || 'Default';
    }
  },
  beforeCreate() {
    this.pageLoading = true;
  },
  mounted() {
    this.pageLoading = false;
  }
};
</script>

<template>
  <div v-if="pageLoading" class="loading">Loading...</div>
  <component v-else :is="layout">
    <router-view />
  </component>
</template>

<style lang="scss">
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 10px;
  transition: all 0.35s ease-in-out;
}
</style>
