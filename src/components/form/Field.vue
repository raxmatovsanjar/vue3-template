<template>
  <div class="form__group">
    <label v-if="label" :for="'input' + this._uid" class="form__label">
      {{ label }}
    </label>
    <div class="relative w-full">
      <div v-if="left || phone" class="form__addleft">
        <span v-if="phone" class="phone-mask">+998</span>
        <slot v-else name="left"> </slot>
      </div>
      <div v-if="right || password" class="form__addright">
        <Icons
          v-if="password"
          name="eye"
          svg
          class="eye active"
          onclick="this.classList.toggle('active')"
          @click.native="passwordVisible = !passwordVisible"
        />
        <slot v-else name="right"> </slot>
      </div>
      <input
        v-if="number"
        :id="'input' + this._uid"
        :value="value"
        type="number"
        :disabled="disabled"
        class="form__txt"
        :class="[classInput, { _error: error }]"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @input="updateValue($event.target.value.trim())"
      />
      <textarea
        v-else-if="textarea"
        :id="'input' + this._uid"
        :value="value"
        type="text"
        :disabled="disabled"
        class="form__txt"
        :class="[classInput, { _error: error }]"
        :maxlength="maxlength"
        :placeholder="placeholder"
        @input="updateValue($event.target.value.trim())"
      />
      <input
        v-else-if="phone"
        :id="'input' + this._uid"
        :value="value"
        v-mask="'## ### ## ##'"
        type="text"
        class="form__input"
        :style="returnPadding()"
        :class="[classInput, { _error: error }]"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        @input="updateValue($event.target.value.trim())"
      />
      <input
        v-else-if="mask"
        :id="'input' + this._uid"
        :value="value"
        v-mask="mask"
        type="text"
        class="form__input"
        :style="returnPadding()"
        :class="[classInput, { _error: error }]"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="updateValue($event.target.value.trim())"
      />
      <input
        v-else
        :id="'input' + this._uid"
        :value="value"
        :type="password && passwordVisible ? 'password' : 'text'"
        class="form__input"
        :style="returnPadding()"
        :class="[classInput, { _error: error }]"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxlength"
        @input="updateValue($event.target.value.trim())"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    value: { default: '' }, // any type can be used
    label: { type: String, default: '' },
    mask: { type: String, default: '' },
    classInput: { type: [String, Array], default: '' },
    classLabel: { type: [String, Array], default: '' },
    maxlength: { type: [String, Number], default: 100 },
    placeholder: { type: [String, Number], default: '' },
    // field type
    number: { type: Boolean, default: false },
    textarea: { type: Boolean, default: false },
    phone: { type: Boolean, default: false },
    money: { type: Boolean, default: false }, // not ready yet
    select: { type: Boolean, default: false }, // not ready yet
    date: { type: Boolean, default: false }, // not ready yet
    password: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false }
  },
  data() {
    return {
      passwordVisible: true,
      paddintInputRight: '',
      paddintInputLeft: ''
    };
  },
  mounted() {
    this.paddintInputRight =
      document?.querySelector('.form__addright')?.clientWidth;
    this.paddintInputLeft =
      document?.querySelector('.form__addleft')?.clientWidth;
  },
  methods: {
    returnPadding() {
      const padding = [];
      if (this.left || this.phone) {
        padding.push(`padding-left: ${this.paddintInputLeft + 15}px;`);
      }
      if (this.right || this.password) {
        padding.push(`padding-right: ${this.paddintInputRight + 15}px;`);
      }
      return padding.join('');
    },
    updateValue(value) {
      this.$emit('input', value);
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
.phone-mask {
  display: inline-block;
  font-weight: normal;
  font-size: 16px;
  color: black;
}
.form,
form {
  position: relative;
  // .form__group
  &__group {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 8px;
  }
  // .form__label
  &__label {
    font-weight: 500;
    font-size: 14px;
    line-height: calc(17 / 14 * 100%);
    color: #273140;
  }
  // form__input
  &__input {
    background: #ffffff;
    border-radius: 0px;
    padding: 12px 16px;
    width: 100%;
    height: 44px;
    font-weight: normal;
    font-size: 16px;
    color: black;
    border: 1px solid black;
    transition: all 0.35s ease;
    &._error {
      border: 1px solid red;
    }
    &:focus {
      border: 1px solid blue;
    }
    &::placeholder {
      font-weight: normal;
      font-size: 16px;
      line-height: calc(19 / 16 * 100%);
      color: #c2c6cc;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
    }
  }
  // .form__txt
  &__txt {
    resize: none;
    background: #ffffff;
    border-radius: 0px;
    padding: 12px 16px;
    width: 100%;
    height: auto;
    font-weight: normal;
    font-size: 16px;
    color: black;
    border: 1px solid black;
    transition: all 0.35s ease;
    &._error {
      border: 1px solid red;
    }
    &:focus {
      border: 1px solid blue;
    }
    &::placeholder {
      font-weight: normal;
      font-size: 16px;
      line-height: calc(19 / 16 * 100%);
      color: #c2c6cc;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
    }
  }
  // .form__addright
  &__addright {
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
  // .form__addleft
  &__addleft {
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
}
</style>
