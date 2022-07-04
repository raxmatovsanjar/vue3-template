import { app } from '@storybook/vue3';
import { definePlugins } from '~/assets/helpers/helpers';
import '../src/assets/styles/main.css';

definePlugins(app);
export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
