'use strict';

var steps = function() {

    this.When(/^I navigate to the '(.+)' (?:|results )page(?:| using '(.+)' profile)$/, function (page,profile) {
        var _this = this;
        return _this.browserUtils.navigateTo(page,profile)
            .then(function(){
                return browser.ignoreSynchronization=true;
            })
            .then(function(){
                return _this.pageFactory.currentPage.waitForPageLoaded();
            })
            .then(function(){
                return browser.ignoreSynchronization=false;
            })
            .then(function(){
                return browser.sleep(500);
            })
            .then(function(){
                return _this.helper.closeNotice('edr');
            })
            .then(function(){
                return browser.sleep(500);
            })
            .then(function(){
                return _this.helper.closeNotice('suitcase');
            })
            .then(function(){
                return _this.helper.closeNotice('cookie');
            })
            .then(function(){
                return _this.helper.closeNotice('error');
            });
    });

    this.Then(/^I should be taken to the '(.+)' (?:|results )(?:page|site) in (?:a|the) '(new|same)' window$/, function (page,window) {
        var _this = this;
        if(page === 'provider\'s'){
            return _this.browserUtils.waitForRedirect(page);
        }else{
            if(window === 'new'){
                return _this.browserUtils.switchToNewWindow()
                    .then(function(){
                        return _this.browserUtils.waitForRedirect(page);
                    })
                    .then(function(){
                        return browser.ignoreSynchronization=true;
                    })
                    .then(function(){
                        return _this.pageFactory.currentPage.waitForPageLoaded();
                    })
                    .then(function(){
                        browser.ignoreSynchronization=false;
                        var deferred = _this.q.defer();
                        deferred.resolve();
                        return deferred.promise;
                    });
            }else{
                return _this.browserUtils.waitForRedirect(page)
                    .then(function(){
                        return browser.ignoreSynchronization=true;
                    })
                    .then(function(){
                        return _this.pageFactory.currentPage.waitForPageLoaded();
                    })
                    .then(function(){
                        return browser.ignoreSynchronization=false;
                    })
                    .then(function(){
                        return _this.helper.closeNotice('fancybox');
                    })
                    .then(function(){
                        return _this.helper.closeNotice('error');
                    });
            }
        }
    });

};

module.exports = steps;
