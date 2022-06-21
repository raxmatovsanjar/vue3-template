const { loadConfigFromFile, mergeConfig } = require('vite');
const eslintPlugin = require('vite-plugin-eslint').default;
const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|ts)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'storybook-dark-mode',
		{
			/**
			 * Fix Storybook issue with PostCSS@8
			 * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
			 */
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/vue3',
	core: {
		builder: 'storybook-builder-vite',
	},
	typescript: {
		check: false,
		checkOptions: {},
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: prop =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
	async viteFinal(previousConfig) {
		const { config } = await loadConfigFromFile(
			path.resolve(__dirname, '../vite.config.js'),
		);

		return mergeConfig(previousConfig, {
			...config,
			plugins: [eslintPlugin()],
		});
	},
};
