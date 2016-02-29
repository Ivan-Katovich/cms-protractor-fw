'use strict';

var helper = require('./../../helpers/helper');
var Field = require('./field');

var Radiobuttons = function(data){

    var _this = this;

    //_this._root = data.parent.element(by.css(data.css));
    _this._root = helper.elementGetter(data.parent,data);

    _this.completeByValue = function(value){
        data.value = value;
        return _this._root.element(by.cssWithText('label',value)).click();
    };

};

helper.inherits(Field,Radiobuttons);

module.exports = Radiobuttons;