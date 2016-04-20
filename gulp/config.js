/**
 * Configuration
 *
 * This is the configuration file for settings for each
 * gulp task.
 */

'use strict';

module.exports = {

	/**
	 * Express server port
	 */
	'serverport': 3000,

	/**
	 * Distribution folder
	 */
	'dist': {
		'root': 'www'
	},

	/**
	 * Sass CSS
	 */
	'styles': {
		'src': 'app/templates/**/*.scss',
		'dest': 'www/css'
	},

	/**
	 * Images
	 */
	'images': {
		'src': 'app/images/**/*',
		'dest': 'www/images'
	},

	/**
	 * Views
	 */
	'views': {
		'watch': [
			'app/index.pug',
			'app/templates/**/*.pug',
			'app/templates/**/*.html'
		],
		'src': 'app/templates/**/*.html',
		'dest': 'app/src/cache',
		'pug': {
			'src': ['app/index.pug', 'app/templates/**/*.pug'],
			'dest': 'app/src/cache/templates',
			'options': {
				'pretty': true
			}
		}
	},

	/**
	 * Browserify
	 */
	'browserify': {
		'entries': ['app/src/main.js'],
		'dest': 'www/js',
		'bundleName': 'main.js',
		'sourcemap': true
	},

	/**
	 * Gzip settings
	 */
	'gzip': {
		'src': 'www/**/*.{html,xml,json,css,js,js.map}',
		'dest': 'www/',
		'options': {}
	},

	/**
	 * JSHint settings
	 */
	'jshint': {
		'src': 'app/src/**/*.js',
		'config': {
			// JSHint Default Configuration File (as on JSHint website)
			// See http://jshint.com/docs/ for more details

			'maxerr': 50,       // {int} Maximum error before stopping

			// Enforcing
			'bitwise': false,     // true: Prohibit bitwise operators (&, |, ^, etc.)
			'camelcase': true,     // true: Identifiers must be in camelCase (checking in jscs)
			'curly': true,     // true: Require {} for every new block or scope
			'eqeqeq': true,     // true: Require triple equals (===) for comparison
			'forin': true,     // true: Require filtering for..in loops with obj.hasOwnProperty()
			'freeze': false,     // true: prohibits overwriting prototypes of native objects such as Array, Date etc.
			'immed': true,     // true: Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
			'indent': 4,        // {int} Number of spaces to use for indentation
			'latedef': true,     // true: Require variables/functions to be defined before being used
			'newcap': false,     // true: Require capitalization of all constructor functions e.g. `new F()`
			'noarg': true,     // true: Prohibit use of `arguments.caller` and `arguments.callee`
			'noempty': true,     // true: Prohibit use of empty blocks
			'nonbsp': true,     // true: Prohibit 'non-breaking whitespace' characters.
			'nonew': false,    // true: Prohibit use of constructors for side-effects (without assignment)
			'plusplus': false,    // true: Prohibit use of `++` and `--`
			'quotmark': 'single',    // Quotation mark consistency:
			//   false    : do nothing (default)
			//   true     : ensure whatever is used is consistent
			//   'single' : require single quotes
			//   'double' : require double quotes
			'undef': true,     // true: Require all non-global variables to be declared (prevents global leaks)
			'unused': true,     // Unused variables
			//   true     : all variables, last function parameter
			//   'vars'   : all variables only
			//   'strict' : all variables, all function parameters
			'strict': true,     // true: Requires all functions run in ES5 Strict Mode
			'maxparams': false,    // {int} Max number of formal params allowed per function
			'maxdepth': 5,        // {int} Max depth of nested blocks (within functions)
			'maxstatements': false,    // {int} Max number statements per function
			'maxcomplexity': false,    // {int} Max cyclomatic complexity per function
			'maxlen': 240,      // {int} Max number of characters per line
			'varstmt': false,    // true: Disallow any var statements. Only `let` and `const` are allowed.

			// Relaxing
			'asi': false,     // true: Tolerate Automatic Semicolon Insertion (no semicolons)
			'boss': false,     // true: Tolerate assignments where comparisons would be expected
			'debug': false,     // true: Allow debugger statements e.g. browser breakpoints.
			'eqnull': false,     // true: Tolerate use of `== null`
			'esnext': true,      // true: Allow ES.next (ES6) syntax (ex: `const`)
			'moz': false,     // true: Allow Mozilla specific syntax (extends and overrides esnext features)
			// (ex: `for each`, multiple try/catch, function expression…)
			'evil': false,     // true: Tolerate use of `eval` and `new Function()`
			'expr': false,     // true: Tolerate `ExpressionStatement` as Programs
			'funcscope': false,     // true: Tolerate defining variables inside control statements
			'globalstrict': false,     // true: Allow global 'use strict' (also enables 'strict')
			'iterator': false,     // true: Tolerate using the `__iterator__` property
			'lastsemic': false,     // true: Tolerate omitting a semicolon for the last statement of a 1-line block
			'laxbreak': false,     // true: Tolerate possibly unsafe line breakings
			'laxcomma': false,     // true: Tolerate comma-first style coding
			'loopfunc': false,     // true: Tolerate functions being defined in loops
			'multistr': false,     // true: Tolerate multi-line strings
			'noyield': false,     // true: Tolerate generator functions with no yield statement in them.
			'notypeof': false,     // true: Tolerate invalid typeof operator values
			'proto': false,     // true: Tolerate using the `__proto__` property
			'scripturl': false,     // true: Tolerate script-targeted URLs
			'shadow': false,     // true: Allows re-define variables later in code e.g. `var x=1; x=2;`
			'sub': false,     // true: Tolerate using `[]` notation when it can still be expressed in dot notation
			'supernew': false,     // true: Tolerate `new function () { ... };` and `new Object;`
			'validthis': false,     // true: Tolerate using this in a non-constructor function

			// Environments
			'browser': true,      // Web Browser (window, document, etc)
			'browserify': true,      // Browserify (node.js code in the browser)
			'couch': false,     // CouchDB
			'devel': false,     // Development/debugging (alert, confirm, etc)
			'dojo': false,     // Dojo Toolkit
			'jasmine': true,      // Jasmine
			'jquery': false,     // jQuery
			'mocha': true,      // Mocha
			'mootools': false,     // MooTools
			'node': true,      // Node.js
			'nonstandard': false,     // Widely adopted globals (escape, unescape, etc)
			'phantom': false,     // PhantomJS
			'prototypejs': false,     // Prototype and Scriptaculous
			'qunit': false,     // QUnit
			'rhino': false,     // Rhino
			'shelljs': false,     // ShellJS
			'typed': false,     // Globals for typed array constructions
			'worker': false,     // Web Workers
			'wsh': false,     // Windows Scripting Host
			'yui': false,     // Yahoo User Interface

			// Custom Globals
			'globals': {                 // additional predefined global variables
				'jasmine': true,
				'angular': true,
				'browser': true,
				'element': true,
				'by': true,
				'_': true,
				'Headers': true,
				'storage': true,
				'ionic': true,
				'alert': true
			}
		}
	},

	'karma': {
		src: 'test/spec/**/*[Ss]pec.js',
		config: {
			// base path that will be used to resolve all patterns (eg. files, exclude)
			basePath: '',

			// frameworks to use
			// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
			frameworks: ['jasmine'],

			// list of files / patterns to load in the browser
			files: [
				'www/lib/ionic/js/ionic.bundle.js',
				'www/lib/ngstorage/ngStorage.js',
				'www/js/**/*.js',
				'node_modules/angular-mocks/angular-mocks.js',
				'test/spec/**/*[Ss]pec.js'
			],

			// list of files to exclude
			exclude: [],

			plugins: ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-junit-reporter'],

			// preprocess matching files before serving them to the browser
			// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
			preprocessors: {
				'www/js/**/*.js': ['coverage']
			},

			// test results reporter to use
			// possible values: 'dots', 'progress'
			// available reporters: https://npmjs.org/browse/keyword/karma-reporter
			reporters: ['dots', 'junit'],  // 'coverage', only add coverage on --coverage

			// web server port
			port: 9876,

			// enable / disable colors in the output (reporters and logs)
			colors: true,

			// level of logging
			// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
			//logLevel: 'LOG_DEBUG',  // defaults to LOG_INFO

			// enable / disable watching file and executing tests whenever any file changes
			autoWatch: true,

			// start these browsers
			// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
			browsers: ['PhantomJS'],

			// Continuous Integration mode
			// if true, Karma captures browsers, runs the tests and exits
			singleRun: false,

			// Coverage settings
			coverageReporter: {
				type: 'html',
				dir: 'coverage/'
			},

			junitReporter: {
				outputDir: 'junit', // results will be saved as $outputDir/$browserName.xml
				outputFile: undefined, // if included, results will be saved as $outputDir/$browserName/$outputFile
				suite: '', // suite will become the package name attribute in xml testsuite element
				useBrowserName: true // add browser name to report and classes names
			}
		}
	}

};
