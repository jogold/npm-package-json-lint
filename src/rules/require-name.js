'use strict';

const LintIssue = require('./../LintIssue');
const lintId = 'require-name';
const nodeName = 'name';
const message = 'name is required';
const ruleType = 'standard';

const lint = function(packageJsonData, severity) {
  if (!packageJsonData.hasOwnProperty(nodeName)) {
    return new LintIssue(lintId, severity, nodeName, message);
  }

  return true;
};

module.exports.lint = lint;
module.exports.ruleType = ruleType;
