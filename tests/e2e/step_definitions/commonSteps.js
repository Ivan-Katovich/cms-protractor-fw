var pageFactory = require('./../support/pages/pageFactory');
var browserUtils = require('./../support/helpers/browserUtils');
//var SuperHomePage = require('./../../support/pages/superHomePage');
//var superHomePage = new SuperHomePage(element(by.css('body')));

var steps = function() {

    this.When(/^I navigate to the '(.+)' page$/, function (page,callback) {
        browserUtils.navigateTo(page)
            .then(callback);
    });

    this.Then(/^I should be taken to the '(.+)' results page$/, function (page,callback) {
        browserUtils.waitForRedirect(page)
            .then(callback);
    });

};

module.exports = steps;

