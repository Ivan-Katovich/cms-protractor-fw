'use strict';

var helper = require('./../../helpers/helper');
var Field = require('./field');

var Autocomplete = function(data){

    var _this = this;

    //_this._root = data.parent.element(by.css(data.css));
    _this._root = helper.elementGetter(data.parent,data);

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

helper.inherits(Field,Autocomplete);

module.exports = Autocomplete;
