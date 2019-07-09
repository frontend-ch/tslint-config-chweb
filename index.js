const path = require('path');
module.exports = {
  extends: ['tslint:recommended'],
  rulesDirectory: path.resolve(__dirname, './lib/rules'),
  rules: require('./lib/index.json')
};
