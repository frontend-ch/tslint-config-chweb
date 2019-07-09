import { isLabeledStatement } from 'tsutils';
import * as ts from 'typescript';
import * as Lint from 'tslint';

export class Rule extends Lint.Rules.AbstractRule {
  /* tslint:disable:object-literal-sort-keys */
  public static metadata: Lint.IRuleMetadata = {
    ruleName: 'no-label',
    description: 'Disallows labels in anywhere.',
    descriptionDetails: 'This rule only allows labels to be on `do/for/while/switch` statements.',
    // rationale: Lint.Utils.dedent`
    //         Labels in JavaScript only can be used in conjunction with \`break\` or \`continue\`,
    //         constructs meant to be used for loop flow control. While you can theoretically use
    //         labels on any block statement in JS, it is considered poor code structure to do so.`,
    optionsDescription: 'Not configurable.',
    options: null,
    optionExamples: [true],
    type: 'functionality',
    typescriptOnly: false
  };
  /* tslint:enable:object-literal-sort-keys */

  public static FAILURE_STRING = 'you should not use labels in any where.';

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithFunction(sourceFile, walk);
  }
}

function walk(ctx: Lint.WalkContext): void {
  return ts.forEachChild(ctx.sourceFile, function cb(node: ts.Node): void {
    if (isLabeledStatement(node)) {
      ctx.addFailureAtNode(node.label, Rule.FAILURE_STRING);
    }
    return ts.forEachChild(node, cb);
  });
}
