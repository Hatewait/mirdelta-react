// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    // игнорим сборку
    { ignores: ['dist', 'html/dist'] },

    // базовые рекомендации JS + TS
    js.configs.recommended,
    ...tseslint.configs.recommended,

    // наши правила для файлов проекта
    {
      files: ['**/*.{ts,tsx,js,jsx}'],
      languageOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
      },
    }
)
