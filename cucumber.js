module.exports = {
  default: {
    paths: ['tests/features/**/*.feature'],
    require: [
      'tests/hooks/hooks.js',
      'tests/steps/**/*.js'
    ],
    format: ['progress', 'json:reports/cucumber-report.json'],
    timeout: 60000
  }
}