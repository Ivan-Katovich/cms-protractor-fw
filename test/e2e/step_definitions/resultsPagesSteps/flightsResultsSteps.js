'use strict';

var steps = function(){

    // this.World = require('./../../support/world.js').World;

    this.Then(/^Flights results card contains '(1|2)' flight-leg(?:|s)$/, function (number,callback) {
        number=number*1;
        this.pageFactory.currentPage.getPageCardsFlightsNumber()
            .then(function(n){
                expect(n).to.equal(number);
                callback();
            });
    });

};

module.exports = steps;
