const tseslint = require('typescript-eslint');
const prettier = require('eslint-plugin-prettier/recommended');

module.exports = [
  // global ignores
  {
    ignores: [
      'dist/*',
      'node_modules/*',
      '**/node_modules/@prisma/client/**',
      'src/generated/*',
      'eslint.config.js',
    ],
  },

  ...tseslint.configs.recommended,
  prettier,
];
