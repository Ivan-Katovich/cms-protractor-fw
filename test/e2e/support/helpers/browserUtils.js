'use strict';

var BrowserUtils = function(world){
    var _this = this;

    _this._data = {
        timeOut: 45000,
        urlWords: {
            'base': '.travelsupermarket.',
            'super-home': '',
            'car-hire': '/car-hire/results/',
            'flights': '/flights/results/',
            'hotels': '/hotels/results/',
            'holidays': '/holidays/results/',
            'interstitial': '/interstitial/'
        }
    };

    _this.clearLocalStorage = function (){
        return browser.executeScript('window.localStorage.clear();');
    };

    _this.navigateTo = function(page,profile){
        world.pageFactory.getPage(page);
        return world.pageFactory.currentPage.constructUrlForPage(profile)
            .then(function(url){
                return browser.get(url);
            });
    };

    _this.waitForRedirect = function(page){
        var _this=this;
        return browser.sleep(100)
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
                        throw new Error('Unknown page: ' +page);
                    }
                    return browser.wait(function () {
                            return browser.driver.getCurrentUrl()
                                .then(function(url) {
                                    return url.indexOf(_this._data.urlWords[page]) !== -1;
                                });
                        }, _this._data.timeOut, 'Was not redirected to "' + _this._data.urlWords[page] + '", after ' + _this._data.timeOut + 'ms')
                        .then(function(){
                            world.pageFactory.getPage(page);
                        });
                }
            });
    };

    _this.switchToNewWindow = function () {
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
    };

    _this.returnToMainWindow = function(){
        return browser.getAllWindowHandles()
            .then(function(handles){
                if(handles.length > 1){
                    browser.driver.close();
                    return browser.switchTo().window(handles[0]);
                }
            });
    };

    _this.writeScreenShot = function (data, filename) {
        var stream = world.fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    };

    _this.getNameForScreenshot = function(scenario) {
        var name = '';

        name += process.env.CURRENT_BROWSER;
        name += '(' + process.env.PLATFORM + ')';
        name += '-' + scenario.getName();
        name += '_' + world.moment().format('YYYYMMDD-HHmmssSSS');
        name += '.png';

        return name;
    };

};

module.exports = BrowserUtils;
