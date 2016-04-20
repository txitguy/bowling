Angular 1 Development
=================================================

Description
---------------------
This is a modular front end development system wrote to bootstrap
the process for starting new angular projects.


Prerequisites
---------------------
    nodejs      NodeJS is required to install modules and build code.
    python2.7   (Windows only)


Install
---------------------
After NodeJS is installed we are able to use the `npm` command to
install additional modules.  A few of them need to be installed
globally.  In addition we should upgrade npm.  Run these commands:

    `sudo npm install -g npm@latest`
    `npm install -g gulp`

In the root directory run the command `npm install` to install the
rest of the project modules that do not need to be global.


What Do I Edit
---------------------
All code modification are made in the `app` folder.  While the `www`
folder contains the source, it is after being built and it will be
deleted during the next build.

**Do not make changes to the `www` folder.**


Building
---------------------
Gulp is the tool we use to build our project into a runnable web app.
Below are a list of gulp commands that can be ran in terminal.

    `gulp`         Passing no parameters default to `gulp dev`.

    `gulp dev`     Generic build for no specific environment.  Watches
                   for source changes snd starts express server.

    `gulp build`   Build the source code into the www/ folder.

    `gulp prod`    Build the source code for production use.

Additionally you may pass in the `--coverage` option to run Instanbul
and generate a code coverage graph.


Application
----------------------
The application is a set of modules we create to build and control
components of our application.


Modules
---------------------
    NodeJS       NodeJS is used throughout this project from the build
                 scripts into the application itself.  This allows us to
                 write code cleanly and quickly while having instantaneous
                 builds and previews.

    AngularJS    Angular is the core component used in the creation of
                 the application.  Combined with various Angular plugins,
                 it is used to create modules and control the website.

    Gulp         Gulp is an npm module that allows us to perform tasks
                 to assist us in the building and compiling of code as
                 well as performing checks and deployment.

    Pug          Pug is a powerful server-side template engine that
                 makes writing html quick and easy, as well as providing
                 powerful tools to enhance templates.

    Sass         We use Sass to assist in writing clean and manageable
                 css.  We use the autoprefix and clean-css plugins.

    Express      Express is a quick web server which we deploy to display
                 the built version of our code in desktop browsers.

    LiveReload   LiveReload will make the browser reload the application
                 for us automatically everytime a new build is found.

    Jshint       Jshint helps detect errors and maintain code quality
                 throughout our application.  This will prevent successful
                 builds from happening if quality is not maintained.

    Jasmine      Jasmine is a behavior-driven development framework for
                 testing JavaScript code. It does not depend on any other
                 JavaScript frameworks. It does not require a DOM. And it
                 has a clean, obvious syntax so that you can easily write
                 tests.

    Karma        Karma is essentially a tool which spawns a web server
                 that executes source code against test code for each of
                 the browsers connected. The results for each test against
                 each browser are examined and displayed via the command
                 line to the developer such that they can see which browsers
                 and tests passed or failed.

    Lodash       A JavaScript utility library based off of underscore.js.

    Browserify   Browserify lets you require('modules') in the browser by
                 bundling up all of your dependencies.

    More         For a complete list of modules and plugins you should
                 look in the package.json file.



Development
=================================================

Required Files
--------------------------
These files are mandatory to the operation of the module.  Each of
them contain code that needs to be configured to become operational.

    index.js       - Instantiates module, calls config and controller
    *.cfg.js       - Config for routes and data
    *.ctrl.js      - Main controller
    *.spec.js      - Unit tests

Templates
---------------------------
Templates are located in the `app/templates` directory. Each template
has a base theme and may have additional themes.  Create a folder
in the base directory of the template for this module.  That is where
the build scripts will pick up the templates to create the package.

Pug
---------------------------
Template files that end in *.pug will be processed by the pug
template engine.  Files that end in *.html will have no extra
processing, but cannot use the power features of Pug.  Templates
should always use Pug unless there is a specific reason not to, or
if you are only testing.  If you need help converting files to Pug
you may use the conversion website: http://html2jade.org

Styles
---------------------------
Inside of the base theme for the template is a styles folder that
is used for CSS.  We use Sass for our CSS creation.  The name of
the file should begin with an underscore, followed by the name of
the module with the .scss extension.  Additionally, files may be
inside of a folder to help structure files even more.

controllerAs
---------------------------
Notice in angular controllers we do not use the `$scope` variable but
instead use `this`.  The is because we are using nested controllers
and '$scope' can sometimes be problematic and refer to parent scopes.
The caveat to this is in your templates when you define your ng-controller
you now need to name it and prefix variables in your template with that
name.  Refer to the Login template for an example of this being used.

ngAnnotate
---------------------------
Throughout the application you’ll notice use of annotations, particularly
the use of `@ngInject`.  This is used in the minification process and
automatically injects dependencies without having to directly declare them.
This is the ideal method for dependency injection as it creates a cleaner
and more readable code base.
