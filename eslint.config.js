// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({});

export default [
    // Compatibilité avec les configs existantes si besoin
    ...compat.extends("eslint:recommended"),

    {
        files: ["**/*.js"],
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off"
        },
    },
];