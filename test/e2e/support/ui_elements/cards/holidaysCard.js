'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Card = require('./card');

var HolidaysCard = function(data,number,world){

    var _this = this;

    _this.world = world;

    _this.providerId = undefined;

    _this._root = data.parent.all(by.css(data.css)).get(number);

    _this.getProviderId = function(){
        return _this._root.element(by.css('.card__price-provider-logo')).getAttribute('src')
            .then(function(src){
                console.log('Provider ID: '+src.replace(_this.world.constants.REGEX_TO_EXTRACT_PROVIDER_ID_FROM_LOGO_SRC,'$1'));
                return src.replace(_this.world.constants.REGEX_TO_EXTRACT_PROVIDER_ID_FROM_LOGO_SRC,'$1');
            });
    };

};

inheritance.inherits(Card,HolidaysCard);

module.exports = HolidaysCard;




