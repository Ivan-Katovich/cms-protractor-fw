'use strict';

var CarHireCard = require('./carHireCard'),
    FlightsCard = require('./flightsCard'),
    HotelsCard = require('./hotelsCard'),
    HolidaysCard = require('./holidaysCard');

var CardFactory = function(world){

    var _this = this;

    _this.currentCard = undefined;

    _this.getCard = function(card,number){
        var cardConstructors = {
            'car-hire': CarHireCard,
            'flights': FlightsCard,
            'hotels': HotelsCard,
            'holidays': HolidaysCard
        },  
            cardObj = new cardConstructors[card.type](card,number,world);
        
        cardObj.getProviderId()
            .then(function(id){
                cardObj.providerId = id;
            });
        _this.currentCard = cardObj;
        return cardObj;
    };

};

module.exports = CardFactory;

