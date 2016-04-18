'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Field = require('./field');

var Radiobuttons = function(data,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'radiobuttons';

    _this._root = _this.world.helper.elementGetter(data.parent,data);

    _this.completeByValue = function(value){
        data.value = value;
        return _this._root.element(by.cssWithText('label',value)).click();
    };

};

inheritance.inherits(Field,Radiobuttons);

module.exports = Radiobuttons;