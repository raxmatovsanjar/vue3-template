<script setup>
import { onMounted, computed, getCurrentInstance } from "vue";
import icons from "~/json/icons.js";
const props = defineProps({
  name: { type: String, default: "" },
  color: { type: String, default: "" },
});
const component = getCurrentInstance();
const src = computed(() => icons[props.name]);
onMounted(() => {
  if (props.color) {
    component.vnode.el?.querySelectorAll("path")?.forEach((item) => {
      if ([...item.attributes].find((attr) => attr.localName === "stroke")) {
        item.attributes.stroke.value = props.color;
      }
      if ([...item.attributes].find((attr) => attr.localName === "fill")) {
        item.attributes.fill.value = props.color;
      }
    });
  }
});
</script>

<template>
  <i v-if="name" class="icon" v-html="src"></i>
</template>

<style lang="postcss">
.icon {
  display: inline-flex;
  & svg {
    width: 100%;
    height: 100%;
  }
}
</style>
