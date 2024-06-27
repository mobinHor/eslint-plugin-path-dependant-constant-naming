const rule = require("../../../lib/rules/constant-name");
const { RuleTester } = require("eslint");

const ruleTester = new RuleTester();
ruleTester.run("path-depandant-constant-naming", rule, {
    // Test cases that SHOULD NOT report any errors from the rule
    valid: [{
        code: "var branchTestX = 5;",
        filename : '/constants/branch/test/index.ts',
        options: [{ rootDir: 'shared/constants' }]
    }],
    // Test cases that SHOULD report errors from the rule
    invalid: [
        {
            code: "var branchTestX = 5;",
            filename: "/constants/branch/testTwo/index.ts",
            options: [{ rootDir: 'shared/constants' }],
            errors: ["branchTestTwoX would be fine."]
        },
    ],
});