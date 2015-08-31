var pageFactory = require('./../support/pages/pageFactory');
var browserUtils = require('./../support/helpers/browserUtils');

var steps = function(){

    this.Then(/^results page main title should be visible$/, function (callback) {
        pageFactory.currentPage.isMainTitleExists()
            .then(function(isVisible){
                expect(isVisible).to.be.true;
                callback();
            });
    });

};

module.exports = steps;
