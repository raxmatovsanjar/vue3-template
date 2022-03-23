<template>
  <label
    v-if="label && !$slots.extra"
    :class="classLabel"
    :for="'input' + _.uid"
    class="form-label mb-8"
  >
    {{ label }}
  </label>
  <div v-else-if="label" class="flex items-center justify-between gap-8 mb-8">
    <label :class="classLabel" :for="'input' + _.uid" class="form-label">
      {{ label }}
    </label>
    <slot name="extra"></slot>
  </div>
  <div class="relative w-full">
    <div class="addleft" v-if="$slots.left || type === 'phone' || iconLeft">
      <slot name="left">
        <span v-if="type === 'phone'" class="">+998</span>
        <Icons v-else-if="iconLeft" :name="iconLeft" />
      </slot>
    </div>
    <div
      class="addright"
      v-if="$slots.right || type === 'password' || iconRight"
    >
      <slot name="right">
        <Icons
          v-if="type === 'password'"
          name="eye"
          class="cursor-pointer"
          onclick="this.classList.toggle('active')"
          @click="passwordVisible = !passwordVisible"
        />
        <Icons v-else-if="iconRight" :name="iconRight" />
      </slot>
    </div>
    <textarea
      v-if="type === 'textarea'"
      type="text"
      class="!h-auto resize-none"
      v-bind="setAttributes"
      v-model="updateValue"
    />
    <el-select
      class="form-select"
      v-else-if="type === 'select'"
      v-model="updateValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="{ _error: this.error }"
      :multiple="multiple"
      :filterable="filterable"
    >
      <el-option
        v-for="(item, index) in list"
        :key="index"
        :label="item[selectName]"
        :value="item[selectValue]"
      />
    </el-select>
    <input
      v-else-if="type === 'phone'"
      type="text"
      v-bind="setAttributes"
      data-mask="'## ### ## ##'"
      v-model="updateValue"
    />
    <input
      v-else-if="type === 'money'"
      type="text"
      v-bind="setAttributes"
      data-mask="'#'"
      v-model="updateValue"
    />
    <input
      v-else-if="type === 'password'"
      :type="passwordVisible ? 'password' : 'text'"
      v-bind="setAttributes"
      v-model="updateValue"
    />
    <input
      v-else-if="type === 'number'"
      type="number"
      v-bind="setAttributes"
      v-model="updateValue"
    />
    <input
      v-else-if="type === 'mask'"
      v-bind="setAttributes"
      type="text"
      :data-mask="mask"
      v-model="updateValue"
    />
    <input v-else type="text" v-bind="setAttributes" v-model="updateValue" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { default: '' }, // any type can be used
    // select options
    list: { type: Array, default: () => [{ id: 1, name: 'sanjar' }] },
    selectName: { type: String, default: 'name' },
    selectValue: { type: String, default: 'id' },
    multiple: Boolean,
    filterable: Boolean,
    // ---
    mask: String,
    iconLeft: String,
    iconRight: String,
    disabled: Boolean,
    error: Boolean,
    label: String,
    classInput: [String, Array],
    classLabel: [String, Array],
    maxlength: { type: [String, Number], default: 100 },
    placeholder: [String, Number],
    // field types
    type: String // mask, number, textarea, phone, money, select, password
  },
  data() {
    return {
      passwordVisible: true,
      paddintInputRight: '',
      paddintInputLeft: ''
    };
  },
  mounted() {
    this.paddintInputRight = document?.querySelector('.addright')?.clientWidth;
    this.paddintInputLeft = document?.querySelector('.addleft')?.clientWidth;
  },
  computed: {
    setPadding() {
      const padding = [];
      if (this.$slots.left || this.type === 'phone' || this.iconLeft) {
        padding.push(`padding-left: ${this.paddintInputLeft + 15}px;`);
      }
      if (this.$slots.right || this.type === 'password' || this.iconRight) {
        padding.push(`padding-right: ${this.paddintInputRight + 15}px;`);
      }
      return padding.join('');
    },
    setAttributes() {
      return {
        id: 'input' + this._.uid,
        placeholder: this.placeholder,
        maxlength: this.maxlength,
        disabled: this.disabled,
        class: ['form-input', this.classInput, { _error: this.error }],
        style: this.setPadding
      };
    },
    updateValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
};
</script>

<style lang="postcss">
// .form-label
.form-label {
  display: inline-block;
  font-weight: 500;
  font-size: 14rem;
  line-height: calc(17 / 14 * 100%);
  color: black;
}
// form-input
.form-input {
  background: white;
  padding: 10rem 15rem;
  width: 100%;
  height: 40rem;
  font-weight: normal;
  font-size: 16rem;
  color: black;
  border: 1px solid black;
  transition: all 0.35s ease-in-out;
  &._error,
  &._error:focus {
    border: 1px solid red;
  }
  &:focus {
    border: 1px solid blue;
  }
  &::placeholder {
    font-weight: normal;
    font-size: 16px;
    line-height: calc(19 / 16 * 100%);
    color: grey;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
  }
}
// .form-select
.form-select {
  width: 100%;
  .el-input__inner {
    @apply .form-input;
    --el-input-hover-border-color: transparent !important;
    --el-select-input-focus-border-color: transparent !important;
  }
}
// .addright
.addright {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  height: auto;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
// .addleft
.addleft {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: auto;
  height: auto;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
