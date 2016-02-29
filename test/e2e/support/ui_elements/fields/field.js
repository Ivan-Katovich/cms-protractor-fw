'use strict';

var Field = function(){};

Field.prototype.getLabel = function(){
    return this._root.element(by.css('label')).getText();
};

module.exports = Field;
