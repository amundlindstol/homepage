/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
	trailingComma: 'es5',
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	useTabs: true,
	overrides: [
		{
			files: '*.json',
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
	plugins: ['prettier-plugin-tailwindcss'],
}

export default config
