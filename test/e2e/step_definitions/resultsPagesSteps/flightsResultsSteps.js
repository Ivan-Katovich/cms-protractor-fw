'use strict';

var steps = function(){

    // this.World = require('./../../support/world.js').World;

    this.Then(/^Flights results card contains '(1|2)' flight-leg(?:|s)$/, function (number) {
        number=number*1;
        return this.pageFactory.currentPage.getPageCardsFlightsNumber()
            .then(function(n){
                return expect(n).to.equal(number);
            });
    });

};

module.exports = steps;
