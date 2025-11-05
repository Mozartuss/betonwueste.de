const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const react = require("eslint-plugin-react");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const jest = require("eslint-plugin-jest");
const _import = require("eslint-plugin-import");
const reactHooks = require("eslint-plugin-react-hooks");

const {
    fixupPluginRules,
} = require("@eslint/compat");

const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    settings: {
        react: {
            version: "detect",
        },
    },

    extends: compat.extends(
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ),

    plugins: {
        react,
        "@typescript-eslint": typescriptEslint,
        jest,
        import: fixupPluginRules(_import),
        "react-hooks": fixupPluginRules(reactHooks),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jest,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
        },

        parser: tsParser,
        ecmaVersion: 2020,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },

            project: "./tsconfig.json",
        },
    },

    rules: {
        "linebreak-style": "off",

        "prettier/prettier": ["error", {
            endOfLine: "auto",
        }],

        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-throw-literal": "warn",
        "@typescript-eslint/lines-between-class-members": "warn",
    },
}, globalIgnores(["**/.eslintrc.js"]), globalIgnores(["**/node_modules/", "**/public/", "**/build/"])]);
