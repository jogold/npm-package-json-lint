'use strict';

const areVersRangesValid = require('./../validators/dependency-audit').areVersRangesValid;
const LintIssue = require('./../LintIssue');
const lintId = 'prefer-caret-version-dependencies';
const nodeName = 'dependencies';
const message = 'You are using an invalid version range. Please use ^.';
const ruleType = 'standard';

const lint = function(packageJsonData, severity) {
  const rangeSpecifier = '^';

  if (!areVersRangesValid(packageJsonData, nodeName, rangeSpecifier)) {
    return new LintIssue(lintId, severity, nodeName, message);
  }

  return true;
};

module.exports.lint = lint;
module.exports.ruleType = ruleType;
