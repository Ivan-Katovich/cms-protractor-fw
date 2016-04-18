//'use strict';
/*jshint -W121 */
/*jshint -W020 */
/*jshint -W034 */
/* jshint strict: false */

var platforms = {

    mobile: '--window-size=500,800',
    tabletP: '--window-size=768,1024',
    tabletL: '--window-size=1024,768',
    desktop: '--window-size=1280,800'

};

exports.config = {

    multiCapabilities: [
        {
            name: 'Tests about flights chanel',
            browserName: 'chrome',
            specs: ['features/flightsTests/*.feature'],
            chromeOptions : {
                args: [platforms[process.env.PLATFORM]]
            }
        },
        {
            name: 'Tests about car-hire chanel',
            browserName: 'chrome',
            specs: ['features/carHireTests/*.feature'],
            chromeOptions : {
                args: [platforms[process.env.PLATFORM]]
            }
        },
        {
            name: 'Tests about holidays chanel',
            browserName: 'chrome',
            specs: ['features/holidaysTests/*.feature'],
            chromeOptions : {
                args: [platforms[process.env.PLATFORM]]
            }
        },
        {
            name: 'Tests about hotels chanel',
            browserName: 'chrome',
            specs: ['features/hotelsTests/*.feature'],
            chromeOptions : {
                args: [platforms[process.env.PLATFORM]]
            }
        }
    ],

    allScriptsTimeout: 100000,
    getPageTimeout: 30000,

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts : {
        require : [
            'support/world.js',
            'support/protractor-extensions.js',
            'step_definitions/**/*.js',
            'step_definitions/*.js',
            'cucumber-reporting.js'
        ],
        format : 'pretty'
    },

    onPrepare : function() {
        var chai = require('chai'),
            chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
    }
};
