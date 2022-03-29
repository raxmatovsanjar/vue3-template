<script>
import Default from '@/layouts/default.vue';
import empty from '@/layouts/empty.vue';
import { onErrorCaptured } from 'vue';
export default {
  components: {
    Default,
    empty
  },
  data() {
    return {
      layout: null,
      error: false
    };
  },
  watch: {
    $route(route) {
      this.layout = route.meta.layout || 'Default';
    }
  },
  created() {
    onErrorCaptured(e => {
      console.log(e);
    });
  }
};
</script>

<template>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="scale" mode="out-in">
        <!-- error content -->
        <div v-if="error">Error</div>
        <Suspense v-else>
          <!-- main content -->
          <component :is="Component"></component>
          <!-- loading state -->
          <template #fallback>Loading...</template>
        </Suspense>
      </Transition>
    </template>
  </RouterView>
</template>

<style>
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
