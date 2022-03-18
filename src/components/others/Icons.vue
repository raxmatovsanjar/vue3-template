<template>
  <i v-if="src" v-html="src"></i>
</template>

<script>
import icons from '@/json/icons.js';
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
  mounted() {
    if (this.color) {
      this.$el.firstChild.querySelectorAll('path').forEach(item => {
        if ([...item.attributes].find(attr => attr.localName === 'stroke')) {
          item.attributes.stroke.value = this.color;
        }
        if ([...item.attributes].find(attr => attr.localName === 'fill')) {
          item.attributes.fill.value = this.color;
        }
      });
    }
  },
  computed: {
    src() {
      if (this.name) {
        return icons[this.name];
      }
    }
  }
};
</script>

<style lang="scss">
i {
  display: inline-flex;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
