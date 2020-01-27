module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    extends: [
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@stencil/recommended",
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    parserOptions: {
        project: "./usc-outlet/tsconfig.json",
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true
        }
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            rules: {
                "@typescript-eslint/quotes": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/interface-name-prefix": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "@stencil/strict-boolean-conditions": "warn"
            }
        }
    ]
};
