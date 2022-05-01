module.exports = {
  arrowParens: 'avoid',
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: false,
        useTabs: true,
        tabWidth: 4,
      },
    },
  ],
};
