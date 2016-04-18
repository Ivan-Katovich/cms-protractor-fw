'use strict';

var steps = function() {

    // this.World = require('./../support/world.js').World;

    this.When(/^I navigate to the '(.+)' (?:|results )page(?:| using '(.+)' profile)$/, function (page,profile,callback) {
        var _this = this;
        _this.browserUtils.navigateTo(page,profile)
            .then(function(){
                browser.ignoreSynchronization=true;
            })
            .then(function(){
                _this.pageFactory.currentPage.waitForPageLoaded();
            })
            .then(function(){
                browser.ignoreSynchronization=false;
            })
            .then(function(){
                return browser.sleep(500);
            })
            .then(function(){
                _this.helper.closeNotice('edr');
            })
            .then(function(){
                return browser.sleep(500);
            })
            .then(function(){
                _this.helper.closeNotice('suitcase');
            })
            .then(function(){
                _this.helper.closeNotice('cookie');
            })
            .then(function(){
                _this.helper.closeNotice('error');
            })
            .then(function(){
                callback();
            });
    });

    this.Then(/^I should be taken to the '(.+)' (?:|results )(?:page|site) in (?:a|the) '(new|same)' window$/, function (page,window,callback) {
        var _this = this;
        if(page === 'provider\'s'){
            _this.browserUtils.waitForRedirect(page)
                //.then(function(){
                //    console.log('Coming to the provider\'s site');
                //    browser.sleep(1000);
                //})
                .then(function(){
                    callback();
                });
        }else{
            if(window === 'new'){
                _this.browserUtils.switchToNewWindow()
                    .then(function(){
                        _this.browserUtils.waitForRedirect(page);
                    })
                    .then(function(){
                        browser.ignoreSynchronization=true;
                    })
                    .then(function(){
                        _this.pageFactory.currentPage.waitForPageLoaded();
                    })
                    .then(function(){
                        browser.ignoreSynchronization=false;
                    })
                    .then(callback);
            }else{
                _this.browserUtils.waitForRedirect(page)
                    .then(function(){
                        browser.ignoreSynchronization=true;
                    })
                    .then(function(){
                        _this.pageFactory.currentPage.waitForPageLoaded();
                    })
                    .then(function(){
                        browser.ignoreSynchronization=false;
                    })
                    .then(function(){
                        _this.helper.closeNotice('fancybox');
                    })
                    .then(function(){
                        _this.helper.closeNotice('error');
                    })
                    .then(callback);
            }
        }

    });

};

module.exports = steps;
