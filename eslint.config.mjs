// @ts-check

// import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    files: [["src/*", "**/.js"]],
  },
  {
    files: ["**/*.js"],
    rules: {
      semi: "error",
    },
  },
  // matches all files ending with .js except those in __tests
  {
    files: ["**/*.js"],
    ignores: ["__tests/**"],
    rules: {
      "no-console": "error",
    },
  },
  {
    rules: {
      "prefer-destructuring": ["error", {
        "array": true,
        "object": true
      }]
    }
  }
);