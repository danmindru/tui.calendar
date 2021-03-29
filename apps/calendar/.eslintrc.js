module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', 'react', 'react-hooks', '@typescript-eslint', 'jest'],
  extends: [
    'tui/es6',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'h',
      version: '16.13',
    },
  },
  globals: {
    fixture: true,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-shadow': 'error',
    'no-shadow': 'off',
    'no-use-before-define': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'jest/no-conditional-expect': 0,
    complexity: ['error', { max: 8 }],
  },
  overrides: [
    {
      files: ['*.spec.ts', '*.spec.tsx'],
      rules: {
        'max-nested-callbacks': ['error', { max: 5 }],
      },
    },
  ],
};