<template>
  <h2 class="text-[#000] text-[50rem] font-bold">Icons</h2>
  <div
    class="inline-flex items-center gap-[5px] ml-[5px]"
    v-for="(item, index) in Object.keys(icons)"
    :key="index"
  >
    <div>{{ item }}:</div>
    <div v-html="icons[item]"></div>
  </div>
  <h2 class="text-[#000] text-[50rem] font-bold">Components</h2>
  <!-- <div class="inline-flex items-center gap-[5px] ml-[5px]" v-for="(item,index) in Object.keys(icons)" :key="index">
      <div>{{ item }}:</div>
      <div v-html="icons[item]"></div>
    </div> -->
</template>

<script>
export default {
  computed: {
    icons() {
      return require('~/json/icons.json');
    }
  }
};
</script>
