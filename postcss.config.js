import tailwind from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';
import tailwindcssNesting from 'tailwindcss/nesting';
import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';

export default {
	plugins: [
		tailwindcssNesting,
		postcssImport,
		autoprefixer,
		tailwind(tailwindConfig),
	],
};
