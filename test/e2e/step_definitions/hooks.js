'use strict';

var isStart = true;

module.exports = function () {

    // this.World = require('./../support/world.js').World;

    this.setDefaultTimeout(60000);

    this.After(function (callback) {
        var _this = this;
        _this.browserUtils.returnToMainWindow()
            .then(function(){
                return _this.browserUtils.clearLocalStorage();
            })
            .then(callback);
    });

    this.After(function (scenario,callback) {
        if (scenario.isFailed()) {

            browser.takeScreenshot()
                .then(function (stream) {
                    var decodedImage = new Buffer(stream, 'base64').toString('binary');
                    scenario.attach(decodedImage, 'image/png');

                })
                .then(callback);
        }
        else {
            callback();
        }
    });

    this.After(function (scenario,callback) {
        var _this = this;
        if (scenario.isFailed()) {
            var folder = process.cwd() + '/test/e2e/reports/screenshots/';

            if (!_this.fs.existsSync(folder)) {
                _this.fs.mkdirSync(folder);
            }

            browser.takeScreenshot()
                .then(function (stream) {
                    var path = folder + _this.browserUtils.getNameForScreenshot(scenario);
                    console.log('\nSaving screenshot @ ' + path);
                    _this.browserUtils.writeScreenShot(stream, path);
                })
                .then(function(){
                    callback();
                });
        }
        else {
            callback();
        }
    });

    this.Before(function () {
        var deferred = this.q.defer();
        if(isStart) {
            isStart = false;
            return this.helper.getPlatform()
                .then(function (platform) {
                    process.env.PLATFORM = platform;
                    console.log('platform ==> ' + platform);
                })
                .then(function(){
                    return browser.getCapabilities();
                })
                .then(function (capabilities) {
                    process.env.CURRENT_BROWSER = capabilities.caps_.browserName;
                    console.log('browser ==> ' +process.env.CURRENT_BROWSER);
                })
                .then(function(){
                    if(process.env.CURRENT_BROWSER === 'firefox'){
                        return browser.driver.manage().window().setSize(1280, 1000);
                    }
                })
                .then(function(){
                    deferred.resolve();
                    return deferred.promise;
                });
        }else{
            deferred.resolve();
            return deferred.promise;
        }
    });

};