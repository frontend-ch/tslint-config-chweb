import { Linter } from 'tslint';
import { parseConfigFile } from 'tslint/lib/configuration';

import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';
import { Program } from 'typescript';

const allRules = glob.sync(`${__dirname}/*/`);

describe('TSLint rules', () => {
  allRules.forEach(rulePath => {
    const badPath = path.join(rulePath, 'bad.ts');
    const goodPath = path.join(rulePath, 'good.ts');
    const configPath = path.join(rulePath, 'tsconfig.json');
    const ruleName = path.basename(rulePath);

    describe(ruleName, () => {
      let program: Program | undefined;
      if (fs.existsSync(configPath)) {
        program = Linter.createProgram(configPath);
      }
      if (fs.existsSync(badPath)) {
        it('should have lint error for bad', () => {
          const linter = new Linter({ fix: false }, program);
          linter.lint(badPath, fs.readFileSync(badPath, 'utf-8'), parseConfigFile(require(`./${ruleName}/tslint`)));
          const lintResult = linter.getResult();
          expect(lintResult.errorCount).toBeGreaterThan(0);
          lintResult.failures.forEach(failure => {
            const failedRuleName = failure.getRuleName();
            expect(failedRuleName).toEqual(ruleName);
          });
        });
      }
      if (fs.existsSync(goodPath)) {
        it('should not have lint errors for good', () => {
          const linter = new Linter({ fix: false }, program);
          linter.lint(goodPath, fs.readFileSync(goodPath, 'utf-8'), parseConfigFile(require(`./${ruleName}/tslint`)));
          const lintResult = linter.getResult();
          expect(lintResult.errorCount).toBe(0);
        });
      }
    });
  });
});
