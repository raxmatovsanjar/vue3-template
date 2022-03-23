<template>
  <el-dialog v-bind="{ title, width, top, fullscreen }" v-model="modalActive">
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
    title: { type: String, default: 'Modal' },
    width: { type: String, default: '50%' },
    top: { type: String, default: '40vh' },
    fullscreen: { type: Boolean, default: false }
  },
  watch: {
    value(value) {
      this.modalActive = value;
    }
  },
  data() {
    return {
      modalActive: this.value
    };
  }
};
</script>

<style lang="postcss">
.el-dialog {
  @media (max-width: 550px) {
    width: 90% !important;
  }
}
</style>
