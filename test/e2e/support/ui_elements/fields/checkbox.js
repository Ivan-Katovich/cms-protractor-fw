'use strict';

var helper = require('./../../helpers/helper');
var Field = require('./field');

var Checkbox = function(data){

    var _this = this;

    //_this._root = data.parent.element(by.css(data.css));
    _this._root = helper.elementGetter(data.parent,data);

    _this.clickOn = function(){
        if(data.value === true){
            data.value = false;
        }else{
            data.value = true;
        }
        return _this._root.click();
    };

    _this.completeByValue = function(value){
        data.value = value;
        if(value){
            return _this._root.element(by.css('input')).isSelected()
                .then(function(is){
                    if(!is){
                        return _this._root.click();
                    }
                });
        }else{
            return _this._root.element(by.css('input')).isSelected()
                .then(function(is){
                    if(is){
                        return _this._root.click();
                    }
                });
        }
    };
};

helper.inherits(Field,Checkbox);

module.exports = Checkbox;

