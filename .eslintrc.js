module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    "some-other-config-you-use",
    "prettier"
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
}
