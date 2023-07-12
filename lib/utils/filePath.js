/**
 * @file Utils about filename
 * @author Huan Luo
 */
'use strict';

const path = require('path');
const { pipe } = require('./pipe');
const { WINDOWS_DRIVE_LETTER_REGEXP } = require('../constants');

/**
 * @returns {string} path from repository root
 * @param {string} fullPath filename with full path
 * @param {string} repositoryRoot path of repository root
 */
const getPathFromRepositoryRoot = (fullPath, repositoryRoot) =>
    fullPath.replace(path.join(repositoryRoot, path.sep), '');

/**
 * @returns {string} file path in posix style
 * @param {string} p file path based on the operating system
 */
const toPosixPath = (p) => p.split(path.sep).join(path.posix.sep);

/**
 * @returns {string} file path without drive letter on windows
 * @param {string} p file path on windows
 */
const removeDriveLetter = (p) => p.replace(WINDOWS_DRIVE_LETTER_REGEXP, '');

/**
 * @returns {string} file path in posix style
 * @param {import('eslint').Rule.RuleContext} context rule eslint context
 */
const getFilePath = (context) => {
    const pathFromRoot = getPathFromRepositoryRoot(
        context.physicalFilename || context.getPhysicalFilename(),
        context.cwd || context.getCwd()
    );

    return pipe(removeDriveLetter, toPosixPath)(pathFromRoot);
};

module.exports = {
    getFilePath,
};