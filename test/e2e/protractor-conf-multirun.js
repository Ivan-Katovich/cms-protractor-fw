/*jshint camelcase: false, strict: false */
/*global expect:true */

//var firefox = require('./../../node_modules/protractor/node_modules/selenium-webdriver/firefox');
//var firefoxProfile = new firefox.Profile();
//firefoxProfile.setPreference('browser.startup.page',0);
//firefoxProfile.setPreference('startup.homepage_welcome_url.additional','about:blank');
//firefoxProfile.setPreference('javascript.enabled',true);
//firefoxProfile.setPreference('plugin.state.npskypewebplugin',1);

exports.config = {

    specs: ['features/**/*.feature'/*,'features/*.feature'*/],

    multiCapabilities: [
        //{
        //    name: 'firefox_desktop',
        //    browserName: 'firefox',
        //    firefox_profile: firefoxProfile
        //},
        {
            name: 'chrome_mobile',
            browserName: 'chrome',
            chromeOptions : {
                args: ['--window-size=500,800']
            }
        },
        {
            name: 'chrome_tablet_portrait',
            browserName: 'chrome',
            chromeOptions : {
                args: ['--window-size=768,1024']
            }
        },
        //{
        //    name: 'chrome_tablet_landscape',
        //    browserName: 'chrome',
        //    chromeOptions : {
        //        args: ['--window-size=1024,768']
        //    }
        //},
        {
            name: 'chrome_desktop',
            browserName: 'chrome',
            chromeOptions : {
                args: ['--window-size=1280,800']
            }
        }
    ],

    allScriptsTimeout: 100000,
    getPageTimeout: 30000,

    framework : 'cucumber',
    cucumberOpts : {
        require : [
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

