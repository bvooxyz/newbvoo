module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'vue/no-multiple-template-root': 'off',
    'max-len': ['error', 150],
  },
};
