import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config(js.configs.recommended, ...tseslint.configs.recommended, {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  plugins: {
    react,
    prettier: prettierPlugin,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // React rules
    'react/react-in-jsx-scope': 'off', // Not needed for React 17+
    'react/prop-types': 'off', // Using TypeScript instead

    // TypeScript rules
    '@typescript-eslint/no-unused-vars': ['warn'],

    // Prettier rules
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        tabWidth: 2,
        printWidth: 100,
        endOfLine: 'auto',
      },
    ],
  },
})
