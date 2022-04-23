module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	root: true,
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier'],
	ignorePatterns: ['**/*.ts'],
	rules: {
		'vue/require-default-prop': 'off',
		'vue/multi-word-component-names': 0,
		'vue/valid-template-root': 0,
	},
};
