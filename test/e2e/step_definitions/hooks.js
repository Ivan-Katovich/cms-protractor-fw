'use strict';

var isStart = true;

module.exports = function () {

    this.setDefaultTimeout(60000);

    this.After(function () {
        var _this = this;
        return _this.browserUtils.returnToMainWindow()
            .then(function(){
                return _this.browserUtils.clearLocalStorage();
            });
    });

    this.After(function (scenario) {
        var deferred = this.q.defer();
        if (scenario.isFailed()) {
            browser.takeScreenshot()
                .then(function (stream) {
                    var decodedImage = new Buffer(stream, 'base64').toString('binary');
                    scenario.attach(decodedImage, 'image/png');
                    deferred.resolve();
                });
        }
        else {
            deferred.resolve();
        }
        return deferred.promise;
    });

    this.After(function (scenario) {
        var _this = this;
        var deferred = _this.q.defer();
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
                    deferred.resolve();
                });
        }
        else {
            deferred.resolve();
        }
        return deferred.promise;
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