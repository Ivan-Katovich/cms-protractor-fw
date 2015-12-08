var platforms = {

    mobile: '--window-size=500,800',
    tablet: '--window-size=768,800',
    desktop: '--window-size=1280,800'

};

//var firefox = require('./../../node_modules/protractor/node_modules/selenium-webdriver/firefox');
//var firefoxProfile = new firefox.Profile();
//firefoxProfile.setPreference('browser.startup.page',0);
//firefoxProfile.setPreference('startup.homepage_welcome_url.additional','about:blank');



exports.config = {

    specs: ['features/**/*.feature'],

    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions : {
                args: [platforms[process.env.PLATFORM]||platforms.desktop]
            }
        }
        //,{
        //    browserName: 'firefox',
        //    firefox_profile: firefoxProfile
        //}
    ],

    framework : 'cucumber',
    cucumberOpts : {
        require : [ 'support/protractor-extensions.js','step_definitions/**/*.js','step_definitions/hooks.js' ],
        format : 'pretty'
    },
    onPrepare : function() {

        var chai = require('chai'), chaiAsPromised = require('chai-as-promised');
        expect = chai.expect;
        chai.use(chaiAsPromised);

    }
};
