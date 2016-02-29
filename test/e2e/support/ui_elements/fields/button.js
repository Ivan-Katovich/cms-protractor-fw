'use strict';

var helper = require('./../../helpers/helper');
var Field = require('./field');

var Button = function(data){

    var _this = this;

    //_this._root = data.parent.element(by.css(data.css));
    _this._root = helper.elementGetter(data.parent,data);

    _this.clickOn = function(){
        data.value = true;
        return _this._root.click();
    };

    _this.completeByValue = function(value){
        if(value === 'click'){
            data.value = true;
            return _this._root.click();
        }else{
            throw 'Not correct value for Button: '+value;
        }
    };
};

helper.inherits(Field,Button);

module.exports = Button;
