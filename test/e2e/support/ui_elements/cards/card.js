'use strict';

var Card = function(){};

Card.prototype.clickOnViewDeal = function(){
    return this._root.element(by.cssWithText('span','View Deal')).click();
};

module.exports = Card;
