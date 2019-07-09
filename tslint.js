module.exports = {
  linterOptions: {
    exclude: ['node_modules/**', 'tests/**/*']
  },
  rulesDirectory: './lib/rules',
  rules: require('./lib/index.json')
};
