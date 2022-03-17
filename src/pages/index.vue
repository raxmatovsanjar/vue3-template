<script>
export default {
  data() {
    return {
      item: null
    };
  }
};
</script>

<template>
  <div class="p-10">
    <Field v-model="item" mask="###" label="label" placeholder="placeholder" />
  </div>
</template>

<style></style>
