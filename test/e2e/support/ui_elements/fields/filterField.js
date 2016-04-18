'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Field = require('./field');

var FilterField = function(){};

inheritance.inherits(Field,FilterField);

FilterField.prototype.isOpen = function(){
    return this.world.helper.elementGetter(this._root,this._data.elements.body).isDisplayed();
};

FilterField.prototype.accordionSelf = function(status){
    var _this=this;
    switch(status){
        case 'open':
            return _this.isOpen()
                .then(function(is){
                    if(!is){
                        return _this._root.scrollIntoView()
                            .then(function(){
                                return _this._root.element(by.css('span.filter__sub-title')).click();
                            })
                            .then(function(){
                                return _this.world.helper.elementGetter(_this._root,_this._data.elements.body).waitToBeCompletelyVisibleAndStable();
                            });
                    }
                });
        case 'close':
            return _this.isOpen()
                .then(function(is){
                    if(is){
                        return _this._root.scrollIntoView()
                            .then(function(){
                                return _this._root.element(by.css('span.filter__sub-title')).click();
                            })
                            .then(function(){
                                return _this.world.helper.elementGetter(_this._root,_this._data.elements.body).waitToBeHidden();
                            });
                    }
                });
        default:
            throw new Error('Wrong status of slider: '+status);
    }
};

module.exports = FilterField;