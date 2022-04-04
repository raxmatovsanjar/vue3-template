<script setup>
import { defineAsyncComponent, onErrorCaptured } from "vue";
const layouts = {
  default: defineAsyncComponent(() => import("~/layouts/default.vue")),
  empty: defineAsyncComponent(() => import("~/layouts/empty.vue")),
};
onErrorCaptured((e) => {
  console.log(e);
});
</script>

<template>
  <div v-if="false">Error</div>
  <RouterView v-slot="{ Component, route }" v-else>
    <component :is="layouts[route.meta.layout] || layouts.default">
      <Suspense v-if="Component">
        <component :is="Component"></component>
        <template #fallback><div class="loading">Loading...</div></template>
      </Suspense>
    </component>
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
