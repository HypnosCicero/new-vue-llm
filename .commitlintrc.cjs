module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['init', 'build', 'ci', 'chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
    'subject-case': [2, 'always', 'sentence-case'],
    'body-max-line-length': [2, 'always', 200],
  },
};
