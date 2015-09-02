module.exports = function(grunt) {

    var platform = grunt.option('platform');
    var host = grunt.option('host');
    var selenium = grunt.option('selenium');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        protractor_webdriver: {
            /*jshint camelcase: true */
            options: {
                path: 'node_modules/protractor/bin/',
                keepAlive: true
            },
            update: {
                options: {
                    //role: 'hub',
                    command: 'webdriver-manager update' // --role=hub, which will work if args are passed!
                }
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
                noColor: false // If true, protractor will not use colors in its output.
            },
            dev: {// Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: 'tests/e2e/protractor-conf.js', // Target-specific config file
                    args: {
                        seleniumAddress: selenium||process.env.SELENIUM_SERVER,
                        baseUrl: host||process.env.HOST,
                        cucumberOpts: {
                            tags: ['~@ignore']
                        }
                    }
                }
            }
        },

        shell: { //execute some commands from cmd
            //options: {
            //    stderr: false,
            //    path: ''
            //},
            setPlatform: {
                command: 'mkdir test'
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');

    grunt.registerTask('e2e', 'Run e2e tests', function(target) {
        console.log(' Run tests on platform: ');
        console.log(platform||process.env.PLATFORM);
        if (platform){
            process.env.PLATFORM=platform;
        }
        target = target || 'dev';
        grunt.task.run(['protractor_webdriver:start','protractor:'+target]);
    });

    grunt.registerTask('webdriver', 'webdriver items', function(target) {
        grunt.task.run(['protractor_webdriver:'+target]);
    });

};
