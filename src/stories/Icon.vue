<script setup lang="ts">
import { onMounted, computed } from 'vue';
import icons from '~/json/icons.json';

export interface Props {
	name: string;
	color?: string;
	fill?: string;
	stroke?: string;
}

const props = withDefaults(defineProps<Props>(), {});
const src = computed(() => icons[props.name]);

onMounted(() => {
	const icon = document.querySelector('.icon svg');
	let styleColor;
	if (props.color)
		styleColor = [`fill-[${props.color}]`, `stroke-[${props.color}]`];
	else if (props.fill) styleColor = [`fill-[${props.fill}]`];
	else if (props.stroke) styleColor = [`stroke-[${props.stroke}]`];
	styleColor && icon?.classList.add(...styleColor);
});
</script>

<template>
	<i v-if="name" class="icon stroke-[#fff]" v-html="src"></i>
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
