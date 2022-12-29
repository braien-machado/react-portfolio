module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/extensions': [
      'error',
      {
        tsx: 'never',
      },
    ],

    'react/jsx-filename-extension': [
      1,
      { extensions: ['.tsx', '.jsx', '.ts'] },
    ],
    'object-curly-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'max-len': ['error', { code: 100 }],
  },
};
