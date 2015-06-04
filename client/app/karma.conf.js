// Karma configuration
// Generated on Thu Jun 04 2015 09:13:14 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'node_modules/jquery/dist/jquery.js', included:true, watching: false},
      {pattern: 'node_modules/underscore/underscore.js', included:true, watching: false},
      {pattern: 'node_modules/backbone/backbone.js', included:true, watching: false},
      {pattern: 'node_modules/backbone.localstorage/backbone.localStorage.js', included:true, watching: false},
      {pattern: 'node_modules/backbone.marionette/lib/backbone.marionette.js', included:true, watching: false},
      'node_modules/chai-jquery/chai-jquery.js',
      'node_modules/jquery-mockjax/jquery.mockjax.js',
      'scripts/TodoMVC.js',
      'scripts/*.js',
      'test/*.html',
      'test/lib/*.js',
      'test/*Spec.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/*.html': ['html2js'],
      'scripts/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    coverageReporter: {
      dir: 'reports/coverage',
      // Force the use of the Istanbul instrumenter to cover files
      instrumenter: {
        'scripts/*.js': ['istanbul']
      },
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' }
      ]
    }


  });
};
