exports.config = {
    // location of the Selenium JAR file and chromedriver, use these if you installed protractor locally
    // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
    // chromeDriver: '../node_modules/protractor/selenium/chromedriver',

    // location of your E2E test specs
    specs: ['features/**/*.feature'],

    // configure multiple browsers to run tests
    multiCapabilities: [
        //{'browserName': 'firefox'},
        {'browserName': 'chrome'}
    ],

    // or configure a single browser

     //capabilities: {
     //'browserName': 'chrome'
     //},


    // url where your app is running, relative URLs are prepending with this URL
    baseUrl: process.env.HOST,

    // testing framework, jasmine is the default
    framework : 'cucumber',
    cucumberOpts : {
        require : [ 'step_definitions/**/*.js' ],
        format : 'pretty'
    },
    onPrepare : function() {

        var chai = require('chai'), chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
    }
};
