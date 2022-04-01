module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	rules: {
		'vue/require-default-prop': 'off',
		'vue/multi-word-component-names': 0,
		'vue/valid-template-root': 0,
	},
};
