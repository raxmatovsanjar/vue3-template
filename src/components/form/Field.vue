<template>
  <div v-if="label" class="flex items-center justify-between gap-8 mb-8">
    <label
      :class="classLabel"
      v-if="label"
      :for="'input' + this._.uid"
      class="form__label"
    >
      {{ label }}
    </label>
    <slot name="extra"></slot>
  </div>
  <div class="relative w-full">
    <slot name="left">
      <div class="addleft">
        <span v-if="type === 'phone'" class="">+998</span>
      </div>
    </slot>
    <slot name="right">
      <div class="addright">
        <Icons
          v-if="type === 'password'"
          name="eye"
          class="eye active"
          onclick="this.classList.toggle('active')"
          @click="passwordVisible = !passwordVisible"
        />
      </div>
    </slot>
    <textarea
      v-if="type === 'textarea'"
      type="text"
      v-bind="setAttributes"
      v-model="updateValue"
    />
    <div v-else-if="type === 'select'"></div>
    <div v-else-if="type === 'date'"></div>
    <input
      v-else-if="type === 'phone'"
      type="text"
      v-bind="setAttributes"
      v-mask="'## ### ## ##'"
      v-model="updateValue"
    />
    <input
      v-else-if="type === 'money'"
      type="text"
      v-bind="setAttributes"
      v-mask="'## ### ## ##'"
      v-model="updateValue"
    />
    <input
      v-else-if="type === 'password'"
      type="password"
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
      v-else-if="mask"
      v-bind="setAttributes"
      type="text"
      v-mask="mask"
      v-model="updateValue"
    />
    <input v-else type="text" v-bind="setAttributes" v-model="updateValue" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { default: '' }, // any type can be used
    mask: String,
    disabled: Boolean,
    error: Boolean,
    label: String,
    classInput: [String, Array],
    classLabel: [String, Array],
    maxlength: { type: [String, Number], default: 100 },
    placeholder: [String, Number],
    // field type
    type: String // number, textarea, phone, money, select, date, password
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
      if (this.type === 'phone') {
        padding.push(`padding-left: ${this.paddintInputLeft + 15}px;`);
      }
      if (this.type === 'password') {
        padding.push(`padding-right: ${this.paddintInputRight + 15}px;`);
      }
      return padding.join('');
    },
    setAttributes() {
      return {
        id: this._.id,
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

<style lang="scss">
.eye {
  cursor: pointer;
  .line {
    width: 1px;
    height: 0;
    transition: all 0.35s ease-in-out;
  }
  &.active {
    .line {
      height: 100%;
      transition: all 0.35s ease-in-out;
    }
  }
}
// .form-label
.form-label {
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
    border: 1px solid green;
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
  transition: all 0.35s ease-in-out;
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
  transition: all 0.35s ease-in-out;
}
</style>
