<script setup lang="">
import { onMounted, computed } from 'vue';
import icons from '~/json/icons.json';

const props = defineProps({
	name: { type: String, default: '' },
	color: { type: String, default: '' },
	fill: { type: String, default: '' },
	stroke: { type: String, default: '' },
});
const src = computed(() => icons[props.name]);
onMounted(() => {
	if (props.color || props.stroke || props.fill) {
		let icon = document.querySelector('.icon svg');
		icon?.querySelectorAll('path')?.forEach(item => {
			if (item?.attributes?.stroke) {
				item.attributes.stroke.value = props.color || props.stroke;
			}
			if (item?.attributes?.fill) {
				item.attributes.fill.value = props.color || props.fill;
			}
		});
	}
});
</script>

<template>
	<i v-if="name" class="icon" v-html="src" />
</template>

<style lang="postcss">
.icon {
	display: inline-flex;
	& svg {
		width: 100%;
		height: 100%;
	}
}
</style>
