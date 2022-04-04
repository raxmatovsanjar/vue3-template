module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
	rules: {
		'vue/require-default-prop': 'off',
		'vue/multi-word-component-names': 0,
		'vue/valid-template-root': 0,
	},
};
