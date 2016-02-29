'use strict';

var CarHireCard = require('./carHireCard');
var FlightsCard = require('./flightsCard');
var HotelsCard = require('./hotelsCard');
var HolidaysCard = require('./holidaysCard');

var cardFactory = {

    currentCard: undefined,

    getCard: function(card,number){
        var cardConstructors = {
            'car-hire': CarHireCard,
            'flights': FlightsCard,
            'hotels': HotelsCard,
            'holidays': HolidaysCard
        };
        var cardObj = new cardConstructors[card.type](card,number);
        cardObj.getProviderId()
            .then(function(id){
                cardObj.providerId = id;
            });
        this.currentCard = cardObj;
        return cardObj;
    }

};

module.exports = cardFactory;

