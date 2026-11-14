module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
    'plugin:astro/recommended',
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      processor: 'astro/client-side-ts',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
    {
      // <script> tags in .astro files are linted as virtual .ts files, which
      // aren't part of the TypeScript project.
      files: ['**/*.astro/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      parserOptions: {
        project: null,
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    project: true,
    extraFileExtensions: ['.astro'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
