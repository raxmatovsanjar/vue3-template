<script setup>
import { defineAsyncComponent } from 'vue';
import icons from '~/json/icons.js';
import { copy } from 'js/helpers.ts';
const components = import.meta.globEager('../components/**/*.vue');
const images = import.meta.globEager('../assets/images/**/*.*');
const importedImages = [];
for (const key in images) {
	const image = images[key];
	importedImages.push({
		url: image.default,
		size: await getSize(image.default),
	});
}
function getSize(url) {
	let fileBlob;
	return fetch(url)
		.then(res => {
			fileBlob = res.blob();
			return fileBlob;
		})
		.then(fileBlob => fileBlob.size);
}
</script>

<template>
	<a href="#icons">icons</a>
	&nbsp;
	<a href="#images">images</a>
	&nbsp;
	<a href="#components">components</a>
	&nbsp;
	<div class="container">
		<h2 id="icons" class="text-[60rem] font-bold my-30">Icons</h2>
		<div class="grid gap-10">
			<hr class="mb-5" />
			<div
				v-for="(value, key) in icons"
				:key="value"
				class="flex items-center justify-around gap-5"
			>
				<div class="cursor-pointer" @click="copy(`<Icons name='${key}'/>`)">
					{{ key }}:
				</div>
				<div class="cursor-pointer" @click="copy(value)" v-html="value" />
			</div>
			<hr class="mt-5" />
		</div>
		<h2 id="images" class="text-[60rem] font-bold my-30">Images</h2>
		<div class="grid gap-10">
			<div v-for="{ url, size } of importedImages" :key="url">
				<hr class="mb-5" />
				<img class="block mx-auto" :src="url" :alt="key" />
				<h3 class="text-center mt-10">
					{{ url }}
					<br />
					Size: {{ size / 1000 }} KB
				</h3>
				<hr class="mt-5" />
			</div>
		</div>
		<h2 id="components" class="text-[60rem] font-bold my-30">Components</h2>
		<div class="grid gap-10">
			<div v-for="(value, key) in components" :key="key">
				<hr class="mb-5" />
				<h3
					class="text-center mb-10 cursor-pointer"
					@click="$el.ownerDocument.defaultView.console.dir(value)"
				>
					{{ key }}
				</h3>
				<component
					:is="defineAsyncComponent(() => /* @vite-ignore */ import(key))"
				/>
				<hr class="mt-5" />
			</div>
		</div>
	</div>
</template>

<style></style>
