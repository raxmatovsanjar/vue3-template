<template>
  <router-link v-if="to" :to="to" class="button" :style="makeStyle">
    <Icons :name="iconLeft" />
    <slot></slot>
    <Icons :name="iconRight" />
  </router-link>
  <a
    v-else-if="href"
    class="button"
    :style="makeStyle"
    :href="href"
    :target="blank ? '_blank' : ''"
  >
    <Icons :name="iconLeft" />
    <slot></slot>
    <Icons :name="iconRight" />
  </a>
  <button v-else :style="makeStyle" class="button" :type="type">
    <Icons :name="iconLeft" />
    <slot></slot>
    <Icons :name="iconRight" />
  </button>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'button' },
    to: String,
    href: String,
    blank: Boolean,
    // icons
    iconLeft: String,
    iconRight: String,
    // styles
    width: { type: String, default: 'fit-content' },
    color: { type: String, default: '#000' },
    bg: { type: String, default: '#fff' }
  },
  computed: {
    makeStyle() {
      return `--button-width:${this.width};--button-color:${this.color};--button-background:${this.bg};`;
    }
  }
};
</script>

<style lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  user-select: none;
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 14rem;
  cursor: pointer;
  border: 1px solid #000;
  width: 100%;
  color: var(--button-color);
  background: var(--button-background);
  max-width: var(--button-width);
  word-break: break-all;
  text-decoration: none;
  transition: all 0.35s ease-in-out;
}
</style>
