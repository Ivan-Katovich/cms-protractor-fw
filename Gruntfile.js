module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        protractor_webdriver: {
            /*jshint camelcase: true */
            options: {
                path: 'node_modules/protractor/bin/',
                keepAlive: true
            },
            start: {
                options: {
                    //role: 'hub',
                    command: 'webdriver-manager start' // --role=hub, which will work if args are passed!
                }
            }
        },

        protractor: {
            options: {
                //configFile: "node_modules/protractor/example/conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: 'tests/e2e/protractor-conf.js', // Target-specific config file
                    args: {
                        seleniumAddress: 'http://127.0.0.1:4444/wd/hub'
                    } // Target-specific arguments
                }
            }
        },

        //shell: { //execute some commands from cmd
        //    options: {
        //        stderr: false,
        //        path: 'node_modules/.bin/'
        //    },
        //    target: {
        //        command: 'webdriver-manager start'
        //    }
        //}
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');

    grunt.registerTask('e2e', 'Run e2e tests', function() {
        grunt.task.run(['protractor_webdriver','protractor']);
    });
    grunt.registerTask('webdriver', ['protractor_webdriver']);



};
