var webpack = require("webpack");
const path = require('path');

module.exports = function(config) {
  config.set({
 
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
 
 
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],
 
 
    // list of files / patterns to load in the browser
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/index.js',
    ],
 
 
    // list of files to exclude
    exclude: [
    ],
 
 
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.js': ['webpack'],
    },

    coverageReporter: {

      dir: 'build/coverage/',
      reporters: [
          { type: 'html' },
          { type: 'text' },
          { type: 'text-summary' }
      ]
    },
    webpack: {
      module: {
        rules: [{
          test: /\.js$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          loader: 'babel-loader',
          query: {
            compact: false,
            presets: ['react', 'es2015', 'stage-1'],
            plugins: ['transform-decorators-legacy', 'transform-regenerator']
          }
        }]
      },
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      // resolve: {
      //   modulesDirectories: [
      //     "",
      //     "dist",
      //     "node_modules"
      //   ]
      // },
      // module: {
      //   loaders: [{
      //     test: /\.js$/,
      //     loader: 'babel-loader',
      //     exclude: /(test|node_modules)/,
      //     query: {
      //       compact: false,
      //       presets: ['react', 'es2015', 'stage-1'],
      //       plugins: ['transform-decorators-legacy', 'transform-regenerator'],
      //     }
      //   }]
      // }
    },
    webpackMiddleware: {
      // webpack-dev-middleware configuration
      noInfo: true
    },
 
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],
 
 
    // web server port
    port: 9876,
 
 
    // enable / disable colors in the output (reporters and logs)
    colors: true,
 
 
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
 
 
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
 
    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-jasmine"),
      require("karma-spec-reporter"),
      require("karma-coverage"),
      require("karma-chrome-launcher"),
    ],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
 
 
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,
 
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
// const path = require('path');
// module.exports = function(config) {
//   config.set({
//     basePath: '',
//     browsers: ['PhantomJS'],
//     frameworks: ['mocha'],
//     files: [
//       {pattern: 'dist/js/*.js', included: true},
//       'node_modules/babel-polyfill/dist/polyfill.js',
//       'test/*.spec.js'
//     ],
//     preprocessors: {
//       'src/public/AppEntry.js': ['webpack', 'sourcemap'],
//       'test/*.spec.js': ['webpack', 'sourcemap']
//     },
//     webpack: {
//       devtool: 'inline-source-map',
//       module: {
//         loaders: [
//           {
//             test: /\.js$/,
//             loader: 'babel-loader',
//             exclude: path.resolve(__dirname, 'node_modules'),
//             query: {
//               plugins: ['transform-decorators-legacy', 'transform-regenerator'],
//               presets: ['react', 'es2015', 'stage-1']
//             }
//           },
//           {
//             test: /\.json$/,
//             loader: 'json-loader',
//           },
//         ]
//       },
//       externals: {
//         'react/addons': 'react/addons',
//         'react/lib/ExecutionEnvironment': 'react/lib/ExecutionEnvironment',
//         'react/lib/ReactContext': 'react/lib/ReactContext',
//       }
//     },
//     webpackServer: {
//       noInfo: true
//     },
//     reporters: ['nyan'],
//     nyanReporter: {
//       suppressErrorHighlighting: true,
//     },
    
//     port: 9876,
//     colors: true,
//     logLevel: config.LOG_INFO,
//     autoWatch: true,
//     singleRun: false,
//   });
// };