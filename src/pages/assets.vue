<script setup>
import icons from '@/json/icons.js';
import { copy } from 'js/helpers.js';
const components = [];
console.dir(app);
</script>

<template>
  <h2 class="text-[40rem] font-bold mb-10">Icons</h2>
  <div
    class="inline-flex items-center gap-5 ml-5"
    v-for="item in Object.keys(icons)"
    :key="icons[item]"
  >
    <div @click="copy(`<Icons name='${item}'></Icons>`)">{{ item }}:</div>
    <div v-html="icons[item]" @click="copy(icons[item])"></div>
  </div>
  <h2 class="text-[40rem] font-bold">Components</h2>
  <component v-for="component in components" :key="component" :is="component" />
</template>
