var pageFactory = require('./../pages/pageFactory');

var browserUtils = {

    _data: {
        timeOut: 30000,
        urlWords: {
            'super-home': '',
            'car-hire': 'c/carhire/results/',
            'hotels': 'c/hotels/results/'
        }
    },

    clearLocalStorage: function (){
        return browser.executeScript('window.localStorage.clear();');
    },

    navigateTo: function(page,dataObj){

        return browser.get(browser.baseUrl+this._data.urlWords[page])
            .then(function(){
                pageFactory.getPage(page);
            });
    },

    waitForRedirect: function(page){
        var _this=this;
        return browser.wait(function () {
            return browser.driver.getCurrentUrl()
                .then(function(url) {
                    return url.indexOf(_this._data.urlWords[page]) !== -1;
                });
        }, _this._data.timeOut, 'Was not redirected to "' + _this._data.urlWords[page] + '", after ' + _this._data.timeOut + 'ms')
            .then(function () {
                browser.sleep(1000);
            })
            .then(function(){
                pageFactory.getPage(page);
            });
    }

};

module.exports = browserUtils;
