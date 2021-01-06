module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  extends: [
    'prettier'
  ],
  // extending recommended config and config derived from eslint-config-prettier
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
      objectLiteralDuplicateProperties: false,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['prettier', 'react', 'import', 'jsx-a11y', 'react-hooks'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
  },
};
