<script setup>
import icons from '@/json/icons.js';
import { copy } from 'js/helpers.js';
const components = import.meta.globEager('../components/**/*.vue');
</script>

<template>
  <div class="container">
    <h2 class="text-[40rem] font-bold my-30">Icons</h2>
    <div class="grid gap-10">
      <hr class="mb-5" />
      <div
        class="flex items-center justify-around gap-5"
        v-for="(value, key) in icons"
        :key="value"
      >
        <div class="cursor-pointer" @click="copy(`<Icons name='${key}'/>`)">
          {{ key }}:
        </div>
        <div class="cursor-pointer" v-html="value" @click="copy(value)"></div>
      </div>
      <hr class="mt-5" />
    </div>
    <h2 class="text-[40rem] font-bold my-30">Components</h2>
    <div class="grid gap-10">
      <div v-for="(value, key) in components" :key="key">
        <hr class="mb-5" />
        <h3
          class="text-center cursor-pointer"
          @click="$el.ownerDocument.defaultView.console.log(value, key)"
        >
          {{ key }}
        </h3>
        <!-- <component :is="key.match(/\.\/components(.*)\.vue$/)[1]" /> -->
        <hr class="mt-5" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss"></style>
