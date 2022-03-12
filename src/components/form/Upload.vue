<template>
	<div class="upload" :class="{ _active: link }">
		<img :src="link" />
		<label for="upload-file">
			<input
				id="upload-file"
				type="file"
				accept="image/*"
				@input="uploadFile($event.target)"
			/>
		</label>
		<button @click="deleteFile" v-if="link" type="button"></button>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			default: '',
		},
	},
	watch: {
		'$props.value'(value) {
			if (typeof value === 'string') {
				this.link = value;
			} else if (value instanceof File) {
				this.file = value;
			}
		},
	},
	data() {
		return {
			file: null,
			link: null,
		};
	},
	methods: {
		deleteFile() {
			this.file = null;
			this.link = null;
		},
		uploadFile(data) {
			if (data && data.files.length && data.size > 0) {
				this.file = data.files[0];
				this.link = this.$fileToLink(this.file);
				this.$emit('input', this.file);
			}
		},
	},
};
</script>

<style lang="scss">
.upload {
	display: block;
	width: 100px;
	min-height: 100px;
	height: auto;
	position: relative;
	cursor: pointer;
	background: #fff;
	background-size: cover;
	background-position: center;
	border-radius: 0px;
	overflow: hidden;
	z-index: 2;
	transition: all 0.35s ease-in-out;
	&._active {
		background: none;
		min-height: auto;
	}
	label {
		opacity: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
	}
	input[type='file'] {
		display: none;
	}
	img {
		object-fit: cover;
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: grey;
		background-position: center;
		opacity: 0;
		visibility: hidden;
		transition: all 0.2s;
	}
	button {
		content: '';
		position: absolute;
		z-index: 3;
		top: 0px;
		right: 0px;
		width: 15px;
		height: 15px;
		background: red;
		background-position: center;
		transition: all 0.35s ease-in-out;
	}
	&:hover {
		&:before {
			opacity: 1;
			visibility: visible;
			transition: all 0.35s ease-in-out;
		}
	}
}
</style>
