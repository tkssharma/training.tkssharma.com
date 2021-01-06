module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      mocha: true,
    },
    parser: 'babel-eslint',
    extends: [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier',
      'prettier/react',
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
      'react/prop-types': 0,
      'react-hooks/rules-of-hooks': 'error',
      'no-console': 'warn',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
        },
      ],
    },
  };
  