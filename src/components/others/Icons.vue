<script>
import icons from '@/json/icons.js';
export default {
	props: {
		name: {
			type: String,
			default: '',
		},
		color: {
			type: String,
			default: '',
		},
	},
	computed: {
		src() {
			return icons[this.name];
		},
	},
	mounted() {
		if (this.color) {
			this.$el.firstChild.querySelectorAll('path').forEach(item => {
				if ([...item.attributes].find(attr => attr.localName === 'stroke')) {
					item.attributes.stroke.value = this.color;
				}
				if ([...item.attributes].find(attr => attr.localName === 'fill')) {
					item.attributes.fill.value = this.color;
				}
			});
		}
	},
};
</script>

<template>
	<i v-if="name" class="icon" v-html="src"></i>
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
