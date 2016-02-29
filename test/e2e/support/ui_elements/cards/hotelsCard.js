'use strict';

var helper = require('./../../helpers/helper');
//var constants = require('./../../helpers/constants');
var Card = require('./card');
//var moment = require('moment');

var HotelsCard = function(data,number){

    var _this = this;

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

helper.inherits(Card,HotelsCard);

module.exports = HotelsCard;



