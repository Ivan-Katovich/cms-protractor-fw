'use strict';

var browserUtils = require('./../support/helpers/browserUtils');
//var fs = require('fs');
var helper = require('./../support/helpers/helper');
//var moment = require('moment');
var q = require('q');
var isStart = true;

module.exports = function () {

    this.setDefaultTimeout(60000);

    this.After(function (callback) {
        browserUtils.returnToMainWindow()
            .then(function(){
                return browserUtils.clearLocalStorage();
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

    //this.After(function (scenario,callback) {
    //    if (scenario.isFailed()) {
    //        var folder = process.cwd() + '/test/e2e/reports/screenshots/';
    //
    //        if (!fs.existsSync(folder)) {
    //            fs.mkdirSync(folder);
    //        }
    //
    //        getNameForScreenshot(scenario)
    //            .then(function (filename) {
    //                var path = folder + filename;
    //
    //                browser.takeScreenshot()
    //                    .then(function (stream) {
    //
    //                        console.log('Saving screenshot @ ' + path);
    //                        browserUtils.writeScreenShot(stream, path);
    //                    });
    //
    //            })
    //            .then(callback);
    //    }
    //    else {
    //        callback();
    //    }
    //});

    this.Before(function () {
        var deferred = q.defer();
        if(isStart) {
            isStart = false;
            return helper.getPlatform()
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