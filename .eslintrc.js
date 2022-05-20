require("@rushstack/eslint-config/patch/modern-module-resolution");

module.exports = {
	extends: [
		"@rushstack/eslint-config/profile/web-app",
		"@rushstack/eslint-config/mixins/react",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"plugin:testing-library/react",
	],
	parserOptions: { tsconfigRootDir: __dirname },
	settings: {
		react: {
			version: "17.9",
		},
	},
	parserOptions: {
		project: "./tsconfig.json",
	},
	rules: {
		"@typescript-eslint/naming-convention": [
			"error",
			{
				selector: "variable",
				types: ["boolean"],
				format: ["PascalCase"],
				prefix: ["is", "should", "has", "can", "did", "will"],
			},
			{
				selector: "function",
				format: ["PascalCase", "camelCase"],
			},
			{
				selector: "typeLike",
				format: ["PascalCase"],
			},
		],
	},
};
