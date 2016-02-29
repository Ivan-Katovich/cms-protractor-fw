'use strict';

var helper = require('./../../helpers/helper');
var constants = require('./../../helpers/constants');
var Card = require('./card');
//var moment = require('moment');

var CarHireCard = function(data,number){

    var _this = this;

    _this.providerId = undefined;

    _this._root = data.parent.all(by.css(data.css)).get(number);

    _this.getProviderId = function(){
        return _this._root.element(by.css('.card__car-hire-provider-logo')).getAttribute('src')
            .then(function(src){
                console.log('Provider ID: '+src.replace(constants.REGEX_TO_EXTRACT_PROVIDER_ID_FROM_LOGO_SRC,'$1'));
                return src.replace(constants.REGEX_TO_EXTRACT_PROVIDER_ID_FROM_LOGO_SRC,'$1');
            });
    };
};

helper.inherits(Card,CarHireCard);

module.exports = CarHireCard;

