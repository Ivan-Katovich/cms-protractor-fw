var pageFactory = require('./../support/pages/pageFactory');
var browserUtils = require('./../support/helpers/browserUtils');

var steps = function(){

    this.When(/^I wait for all results load$/, function (callback) {
        browser.ignoreSynchronization = true;
        pageFactory.currentPage.waitForResults()
            .then(function(){
                browser.ignoreSynchronization = false;
            })
            .then(callback);
    });

    this.Then(/^results page main title should be visible$/, function (callback) {
        pageFactory.currentPage.isMainTitleVisible()
            .then(function(isVisible){
                expect(isVisible).to.be.true;
                callback();
            });
    });

};

module.exports = steps;
