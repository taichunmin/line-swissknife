module.exports = {
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  extends: [
    'standard',
  ],
  globals: {
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'multiline-ternary': 0, // 0 = off, 1 = warn, 2 = error
    'no-return-await': 0, // 0 = off, 1 = warn, 2 = error
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'only-multiline',
    }],
  },
}
