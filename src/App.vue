<script setup>
/* eslint-disable */
import { defineAsyncComponent, onErrorCaptured } from 'vue';
const layouts = {
	default: defineAsyncComponent(() => import('@/layouts/default.vue')),
	empty: defineAsyncComponent(() => import('@/layouts/empty.vue')),
};
onErrorCaptured(e => {
	console.log(e);
});
</script>

<template>
	<div v-if="false">Error</div>
	<RouterView v-slot="{ Component, route }" v-else>
		<component :is="layouts[route.meta.layout] || layouts.default">
			<Transition name="scale" v-if="Component">
				<Suspense>
					<component :is="Component"></component>
					<template #fallback>Loading...</template>
				</Suspense>
			</Transition>
		</component>
	</RouterView>
</template>

<style lang="postcss">
.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 100000;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	padding: 10px;
	transition: all 0.35s ease-in-out;
}
</style>
