import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';

const allRuleTests = glob.sync(path.resolve(__dirname, '../tests/*/') + '/');

const rules: { [key: string]: any } = {};
const requiresTypeInfo: { [key: string]: any } = {};

allRuleTests.forEach(rulePath => {
  const lintConfigPath = `${rulePath}/tslint`;
  try {
    const config = require(lintConfigPath);
    for (const key in config.rules) {
      if (config.rules.hasOwnProperty(key)) {
        rules[key] = config.rules[key];
        const ruleConfigPath = `${rulePath}/tsconfig.json`;
        if (fs.existsSync(ruleConfigPath)) {
          requiresTypeInfo[key] = config.rules[key];
        }
      }
    }
  } catch (error) {
    // tslint:disable:no-console
    console.error(error);
  }
});

console.log('These rules require type info: ');
console.log(JSON.stringify(Object.keys(requiresTypeInfo), null, 2));

fs.writeFileSync(path.resolve(__dirname, '../lib/index.json'), JSON.stringify(rules, null, 2));
