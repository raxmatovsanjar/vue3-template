module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	ignorePatterns: ['**/*.ts'],
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'../configs/.eslintrc.js',
	],
	rules: {
		'vue/require-default-prop': 'off',
		'vue/multi-word-component-names': 0,
		'vue/valid-template-root': 0,
	},
};
