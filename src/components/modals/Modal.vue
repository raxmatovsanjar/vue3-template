<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const emits = defineEmits(['update:modelValue']);
const props = defineProps({
	modelValue: { type: Boolean, default: false },
	title: { type: String, default: 'Modal' },
	width: { type: String, default: '50%' },
	top: { type: String, default: '40vh' },
	fullscreen: { type: Boolean, default: false },
});
</script>

<template>
	<el-dialog
		v-bind="{ title, width, top, fullscreen }"
		:value="modelValue"
		@close="$emit('update:modelValue', false)"
	>
		<slot></slot>
	</el-dialog>
</template>

<style lang="postcss">
.el-dialog {
	@media (max-width: 550px) {
		width: 90% !important;
	}
}
</style>
