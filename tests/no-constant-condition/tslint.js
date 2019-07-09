const path = require('path');

module.exports = {
  rulesDirectory: path.resolve(__dirname, '../../src/rules'),
  rules: {
    'no-constant-condition': true
  }
};
