'use strict';

var pageFactory = require('./../../support/pages/pageFactory');
//var browserUtils = require('./../../support/helpers/browserUtils');

var steps = function(){

    this.Then(/^Flights results card contains '(1|2)' flight-leg(?:|s)$/, function (number,callback) {
        number=number*1;
        pageFactory.currentPage.getPageCardsFlightsNumber()
            .then(function(n){
                expect(n).to.equal(number);
                callback();
            });
    });

};

module.exports = steps;
