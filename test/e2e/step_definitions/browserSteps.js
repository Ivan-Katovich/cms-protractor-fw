'use strict';

var pageFactory = require('./../support/pages/pageFactory');
var browserUtils = require('./../support/helpers/browserUtils');
var helper = require('./../support/helpers/helper');
//var moment = require('moment');

var steps = function() {

    this.When(/^I navigate to the '(.+)' (?:|results )page(?:| using '(.+)' profile)$/, function (page,profile,callback) {
        browserUtils.navigateTo(page,profile)
            .then(function(){
                browser.ignoreSynchronization=true;
            })
            .then(function(){
                pageFactory.currentPage.waitForPageLoaded();
            })
            .then(function(){
                browser.ignoreSynchronization=false;
            })
            .then(function(){
                return browser.sleep(1000);
            })
            .then(function(){
                helper.closeNotice('edr');
            })
            .then(function(){
                return browser.sleep(1000);
            })
            .then(function(){
                helper.closeNotice('suitcase');
            })
            .then(function(){
                helper.closeNotice('cookie');
            })
            .then(function(){
                helper.closeNotice('error');
            })
            .then(function(){
                callback();
            });
    });

    this.Then(/^I should be taken to the '(.+)' (?:|results )(?:page|site) in (?:a|the) '(new|same)' window$/, function (page,window,callback) {
        if(page === 'provider\'s'){
            browserUtils.waitForRedirect(page)
                //.then(function(){
                //    console.log('Coming to the provider\'s site');
                //    browser.sleep(1000);
                //})
                .then(function(){
                    callback();
                });
        }else{
            if(window === 'new'){
                browserUtils.switchToNewWindow()
                    .then(function(){
                        browserUtils.waitForRedirect(page);
                    })
                    .then(function(){
                        browser.ignoreSynchronization=true;
                    })
                    .then(function(){
                        pageFactory.currentPage.waitForPageLoaded();
                    })
                    .then(function(){
                        browser.ignoreSynchronization=false;
                    })
                    .then(callback);
            }else{
                browserUtils.waitForRedirect(page)
                    .then(function(){
                        browser.ignoreSynchronization=true;
                    })
                    .then(function(){
                        pageFactory.currentPage.waitForPageLoaded();
                    })
                    .then(function(){
                        browser.ignoreSynchronization=false;
                    })
                    .then(function(){
                        helper.closeNotice('fancybox');
                    })
                    .then(function(){
                        helper.closeNotice('error');
                    })
                    .then(callback);
            }
        }

    });

};

module.exports = steps;
