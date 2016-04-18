'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Field = require('./field');

var Checkbox = function(data,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'checkbox';
    
    _this._root = _this.world.helper.elementGetter(data.parent,data);

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

inheritance.inherits(Field,Checkbox);

module.exports = Checkbox;

