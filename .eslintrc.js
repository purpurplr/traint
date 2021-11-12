module.exports = {
  root: true,
  ignorePatterns: ['/node_modules', '/dist'],
  env: {
    browser: true,
    es6: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      extends: [
        './.lint-configs/.eslint-javascript',
        './.lint-configs/.eslint-typescript',
        'prettier',
      ],
    },
    {
      files: ['*.js'],
      extends: ['./.lint-configs/.eslint-javascript', 'prettier'],
    },
    {
      files: ['*.html'],
      extends: ['./.lint-configs/.eslint-template'],
    },
  ],
};
