const rule = require("../../../lib/rules/constant-name");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();
ruleTester.run("no-underscore-var", rule, {
    // Test cases that SHOULD NOT report any errors from the rule
    valid: [{
        code: "var foo = 5;",
        filename : 'back-office/src/shared/constants/_refactoredFiles/branch/test/index.ts',
        options: [{ rootDir: '/constants/_refactoredFiles' }]
    }],
    // Test cases that SHOULD report errors from the rule
    invalid: [
        {
            code: "var branchTestX = 5;",
            filename: "back-office/src/shared/constants/_refactoredFiles/branch/testTwo/index.ts",
            options: [{ rootDir: 'shared/constants/_refactoredFiles' }]
        },
    ],
});