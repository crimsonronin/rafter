module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'class-methods-use-this': 'off',
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'import/prefer-default-export': 'off',
  },
};
