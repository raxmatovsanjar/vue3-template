<template>
  <i v-if="src" v-html="src"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    src() {
      if (this.name) {
        return require('~/json/icons.js').default[this.name];
      }
    }
  }
};
</script>

<style lang="scss">
i {
  display: inline-block;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
