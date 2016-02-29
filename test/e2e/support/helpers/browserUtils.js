'use strict';

var pageFactory = require('./../pages/pageFactory');
var fs = require('fs');

var browserUtils = {

    _data: {
        timeOut: 45000,
        urlWords: {
            'base': '.travelsupermarket.',
            'super-home': '',
            'car-hire': '/carhire/results/',
            'flights': '/flight/results/',
            'hotels': '/hotels/results/',
            'holidays': '/holidays/results/',
            'interstitial': '/interstitial/'
        }
    },

    clearLocalStorage: function (){
        return browser.executeScript('window.localStorage.clear();');
    },

    navigateTo: function(page,profile){
        pageFactory.getPage(page);
        return pageFactory.currentPage.constructUrlForPage(profile)
            .then(function(url){
                return browser.get(url);
            });
    },

    waitForRedirect: function(page){
        var _this=this;
        return browser.sleep(3000)
            .then(function(){
                if(page === 'provider\'s'){
                    return browser.wait(function () {
                        return browser.driver.getCurrentUrl()
                            .then(function(url) {
                                return url.indexOf(_this._data.urlWords.base) === -1;
                            });
                    }, _this._data.timeOut, 'Was not redirected to Provider\'s site, after ' + _this._data.timeOut + 'ms');
                }else{
                    if(_this._data.urlWords[page] === undefined){
                        throw 'Unknown page: ' +page;
                    }
                    return browser.wait(function () {
                            return browser.driver.getCurrentUrl()
                                .then(function(url) {
                                    return url.indexOf(_this._data.urlWords[page]) !== -1;
                                });
                        }, _this._data.timeOut, 'Was not redirected to "' + _this._data.urlWords[page] + '", after ' + _this._data.timeOut + 'ms')
                        .then(function(){
                            pageFactory.getPage(page);
                        });
                }
            });
    },

    switchToNewWindow : function () {
        var _this=this;
        return browser.wait(function () {
            return browser.getAllWindowHandles()
                .then(function(handles){
                    return handles.length > 1;
                });
        },_this._data.timeOut,'Can\'t switch to another handle')
            .then(function(){
                return browser.getAllWindowHandles();
            })
            .then(function(handles){
                return browser.switchTo().window(handles[1]);
            });
    },

    returnToMainWindow : function(){
        return browser.getAllWindowHandles()
            .then(function(handles){
                if(handles.length > 1){
                    browser.driver.close();
                    return browser.switchTo().window(handles[0]);
                }
            });
    },

    writeScreenShot: function (data, filename) {
        var stream = fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

};

module.exports = browserUtils;
