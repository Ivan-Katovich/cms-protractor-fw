'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Field = require('./field');

var Button = function(data,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'button';
    
    _this._root = _this.world.helper.elementGetter(data.parent,data);

    _this.getTextValue = function(){
        return _this._root.getText();
    };

    _this.clickOn = function(){
        data.value = data.value ? data.value=false : data.value=true;
        return _this._root.click();
    };

    _this.completeByValue = function(value){
        if(value === 'click'){
            data.value = data.value ? data.value=false : data.value=true;
            return _this._root.click();
        }else{
            throw new Error('Not correct value for Button: '+value);
        }
    };
};

inheritance.inherits(Field,Button);

module.exports = Button;
