module.exports = {
	root: true,
	env: {
		node: true,
		es2021: true,
		'vue/setup-compiler-macros': true,
	},
	extends: ['eslint:recommended', '@vue/prettier', 'plugin:vue/vue3-essential'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	ignorePatterns: ['!/.storybook'],
	rules: {
		'no-console': 'warn',
		'vue/valid-template-root': 'off',
		'vue/multi-word-component-names': 'off',
	},
};
