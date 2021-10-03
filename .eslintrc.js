module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'node/handle-callback-err': 'error',
    'node/no-new-require': 1,
    'node/no-path-concat': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
