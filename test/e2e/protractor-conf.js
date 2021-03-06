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

    specs: ['features/**/*.feature'/*,'features/*.feature'*/],
    // specs: ['reports/@rerun.txt'],

    capabilities: {
        name: 'chrome_'+process.env.PLATFORM,
        browserName: 'chrome',
        // specs: ['features/carHireTests/*.feature','features/flightsTests/*.feature'/*,'features/*.feature'*/],
        //count: 2,
        //shardTestFiles: true,
        //maxInstances: 8,
        chromeOptions : {
            args: [platforms[process.env.PLATFORM]]
        }
    },

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
        format : 'rerun:test/e2e/reports/@rerun.txt'
        // formats : ['pretty','rerun:@rerun.txt']
    },

    onPrepare : function() {
        var chai = require('chai');
            chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);
    }
};
