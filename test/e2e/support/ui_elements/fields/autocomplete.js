'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Field = require('./field');

var Autocomplete = function(data,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'autocomplete';
    
    _this._root = _this.world.helper.elementGetter(data.parent,data);

    _this.completeByValue = function(value){
        return _this._root.all(by.css('input')).get(1).sendKeys(value)
            .then(function(){
                return _this._root.element(by.css('.tsmAutoCompleteResults')).waitReady();
            })
            .then(function(){
                var option = _this._root.all(by.css('button.tsmAutoCompleteResults__option')).get(0);
                return _this._root.all(by.css('button.tsmAutoCompleteResults__option')).get(0).getText()
                    .then(function(text){
                        data.value = text.replace('\n','');
                        return option.click();
                    });
            });
    };


};

inheritance.inherits(Field,Autocomplete);

module.exports = Autocomplete;
