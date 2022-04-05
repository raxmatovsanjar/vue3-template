<script setup>
import { defineEmits, ref, computed, onMounted, getCurrentInstance } from "vue";
const component = getCurrentInstance();
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: undefined, // any type can be used
  // select options
  list: { type: Array, default: () => [{ id: 1, name: "sanjar" }] },
  selectName: { type: String, default: "name" },
  selectValue: { type: String, default: "id" },
  multiple: Boolean,
  filterable: Boolean,
  // ---
  maska: String,
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
  type: String, // maska, number, textarea, phone, select, password
});
let passwordVisible = ref(true);
let paddingInputRight = ref("");
let paddingInputLeft = ref("");
const setPadding = computed(() => {
  const padding = [];
  if (component.slots.left || props.type === "phone" || props.iconLeft) {
    padding.push(`padding-left: ${paddingInputLeft.value + 15}px;`);
  }
  if (component.slots.right || props.type === "password" || props.iconRight) {
    padding.push(`padding-right: ${paddingInputRight.value + 15}px;`);
  }
  return padding.join("");
});
const setAttributes = computed(() => {
  return {
    id: "input" + component.uid,
    placeholder: props.placeholder,
    maxlength: +props.maxlength,
    disabled: props.disabled,
    class: ["form-input", props.classInput, { _error: props.error }],
    style: setPadding.value,
  };
});
const updateValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
onMounted(() => {
  paddingInputRight.value = document?.querySelector(".addright")?.clientWidth;
  paddingInputLeft.value = document?.querySelector(".addleft")?.clientWidth;
});
</script>

<template>
  <label
    v-if="label && !component.slots.extra"
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
    <div
      v-if="component.slots.left || type === 'phone' || iconLeft"
      class="addleft"
    >
      <slot name="left">
        <span v-if="type === 'phone'" class>+998</span>
        <Icons v-else-if="iconLeft" :name="iconLeft" />
      </slot>
    </div>
    <div
      v-if="component.slots.right || type === 'password' || iconRight"
      class="addright"
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
      v-bind="setAttributes"
      v-model="updateValue"
      type="text"
      class="!h-auto resize-none"
    />
    <el-select
      v-else-if="type === 'select'"
      v-model="updateValue"
      class="form-select"
      :disabled="disabled"
      :placeholder="placeholder"
      :class="{ _error: error }"
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
      v-bind="setAttributes"
      v-model="updateValue"
      v-maska="'## ### ## ##'"
      type="text"
    />
    <input
      v-else-if="type === 'password'"
      v-bind="setAttributes"
      v-model="updateValue"
      :type="passwordVisible ? 'password' : 'text'"
    />
    <input
      v-else-if="type === 'number'"
      v-bind="setAttributes"
      v-model="updateValue"
      type="number"
    />
    <input
      v-else-if="type === 'maska'"
      v-bind="setAttributes"
      v-model="updateValue"
      v-maska="maska"
      type="text"
    />
    <input v-else v-bind="setAttributes" v-model="updateValue" type="text" />
  </div>
</template>

<style lang="postcss">
.form-label {
  display: inline-block;
  font-weight: 500;
  font-size: 14rem;
  line-height: calc(17 / 14 * 100%);
  color: black;
}
.form-input,
.form-select .el-input__inner {
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
.form-select {
  width: 100%;
  .el-input__inner {
    --el-input-hover-border-color: transparent !important;
    --el-select-input-focus-border-color: transparent !important;
  }
}
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
