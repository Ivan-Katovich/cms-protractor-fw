'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Card = require('./card');

var HotelsCard = function(data,number,world){

    var _this = this;

    _this.world = world;

    _this.providerId = undefined;

    _this._root = data.parent.all(by.css(data.css)).get(number);

    _this.getProviderId = function(){
        return _this._root.element(by.css('.card__wrap')).getAttribute('e2e__lead-provider-id')
            .then(function(id){
                console.log('Provider ID: '+id);
                return id;
            });
    };

};

inheritance.inherits(Card,HotelsCard);

module.exports = HotelsCard;



