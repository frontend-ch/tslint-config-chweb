const path = require('path');
module.exports = {
  extends: ['tslint:recommended'],
  rulesDirectory: path.resolve(__dirname, '../../src/rules'),
  rules: require('./lib/index.json')
};
