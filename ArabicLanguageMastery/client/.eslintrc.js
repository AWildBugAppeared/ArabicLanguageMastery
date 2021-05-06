module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/essential',
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'prettier/prettier': 'warn',
  },
};
