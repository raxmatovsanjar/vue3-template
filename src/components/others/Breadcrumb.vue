<script setup>
// data() {
// 	return {
// 		navs: [],
// 		filterParams: [],
// 	};
// },
// watch: {
// 	'$route.fullPath'() {
// 		this.updateBreadcrumb();
// 	},
// },
// mounted() {
// 	this.updateBreadcrumb();
// },
// methods: {
// 	updateBreadcrumb() {
// 		this.navs = [];
// 		this.filterParams = [];
// 		let title;
// 		const route = this.$route;
// 		if (route.params.slug !== undefined)
// 			this.filterParams.push(route.params.slug);
// 		if (route.params.id !== undefined)
// 			this.filterParams.push(route.params.id);
// 		const Fullpath = route.fullPath.replace(/([?]).*$/i, '').split('/');
// 		// Fullpath.unshift('dashboard');
// 		for (let i = 0; i < Fullpath.length; i++) {
// 			if (this.filterParams && this.filterParams.length) {
// 				for (let j = 0; j < this.filterParams.length; j++) {
// 					if (Fullpath[i] === this.filterParams[j]) {
// 						title = Fullpath[i];
// 					} else {
// 						title = 'breadcrumb.' + Fullpath[i];
// 					}
// 				}
// 			} else {
// 				title = 'breadcrumb.' + Fullpath[i];
// 			}
// 			const filtered = Fullpath.slice(0, i + 1);
// 			const url = '/' + filtered.join('/').toLowerCase();
// 			const nav = {
// 				title,
// 				url,
// 			};
// 			if (nav.title !== 'breadcrumb.') {
// 				this.navs.push(nav);
// 			}
// 		}
// 	},
// },
</script>

<template>
	<div v-for="(item, index) in list" :key="index">
		<a :href="item.url">
			{{ item.title }}
		</a>
		<span v-if="index != navs.length - 1">/</span>
	</div>
</template>
