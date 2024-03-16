

const report = require('../utils/report');
const {getFilePath} = require("../utils/filePath");


const messages = {
    name: 'The constant name in this file should start with \'{{prefix}}\'',
    camelCaseValueViolation : 'The camelCase format should only be used for non-Premitive values',
    snakeCaseValueViolation : 'The SCREAMING_SNAKE_CASE format should only be used for Premitive values',
};

module.exports = {
    meta: {
        type: 'problem',
        docs: {
            description:
                "test2",
            recommended: false,
            url: null, // URL to the documentation page for this rule
        },
        fixable: null, // Or `code` or `whitespace`
        schema: [{
            type: "object",
            properties: {
                rootDir: {
                    type: "string",
                    default: "shared/constants/_refactoredFiles"
                }
            },
            additionalProperties: false
        }],
        messages
    },
    create(context) {
        return {

            // Visit any VariableDeclarator node and report an error
            // if we determine the node is in violation

            VariableDeclarator: (node) => {
                const filenameWithPath = getFilePath(context);
                const root = (context.options.length && context.options[0].rootDir) || 'shared/constants/_refactoredFiles'

                const splittedRoot = root.split('/')

                const endOfRoot = splittedRoot[splittedRoot.length - 1]
                const rootIndex = filenameWithPath.indexOf(endOfRoot)
                const splittedFilePath = filenameWithPath.slice(rootIndex).split('/')
                const uppercaseFirstLetter = (letter) => {
                    const splittedLetter = letter.split('')
                    return [splittedLetter[0].toUpperCase() , ...splittedLetter.slice(1)].join('')
                }
                if(rootIndex !== -1){
                    const prefixSegments = splittedFilePath.slice(1 , splittedFilePath.length - 1)

                    const camelCasePrefix = prefixSegments.map( (seg , i) => i===0 ? seg : uppercaseFirstLetter(seg)).join('')
                    const snakeCasePrefix = prefixSegments.map( (seg) => seg.toUpperCase()).join('_')

                    const varName = node.id.name
                    const camelCaseResult = varName.match(`^${camelCasePrefix}`)
                    const snakeCaseResult = varName.match(`^${snakeCasePrefix}`)
                    if (!camelCaseResult && !snakeCaseResult) {
                        report(context, messages.name, 'name', {
                            node,
                            data: {
                                prefix : `${camelCasePrefix} or ${snakeCasePrefix}`,
                            },
                        });
                    }else{
                        const varValueType = node.init.type
                        if(camelCaseResult && varValueType === 'Premitive'){
                            report(context, messages.camelCaseValueViolation, 'camelCaseValueViolation', {
                                node,
                            });
                        }
                        if(snakeCaseResult && (varValueType === 'ObjectExpression' || varValueType === 'ArrayExpression')){
                            report(context, messages.snakeCaseValueViolation, 'snakeCaseValueViolation', {
                                node,
                            });
                        }
                    }
                }
            },
        };
    },
};