<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: "Modal" },
  width: { type: String, default: "50%" },
  top: { type: String, default: "40vh" },
  fullscreen: { type: Boolean, default: false },
});
// let modalActive = ref(value);
</script>

<template>
  <el-dialog v-bind="{ title, width, top, fullscreen }" v-model="modelValue" @change="$emit('update:modelValue', $event)">
    <slot></slot>
  </el-dialog>
</template>

<style lang="postcss">
.el-dialog {
  @media (max-width: 550px) {
    width: 90% !important;
  }
}
</style>
