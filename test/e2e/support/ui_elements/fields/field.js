'use strict';

var Field = function(){};

Field.prototype.getLabel = function(){
    var _this=this;
    return _this._root.element(by.css('label')).getText()
        .catch(function(){
            return _this._root.element(by.css('.filter__sub-title')).getText();
        });
};

Field.prototype.isFieldVisible = function(){
    return this._root.isDisplayed();
};

Field.prototype.isFieldPresentAndVisible = function(){
    return this._root.isPresentAndDisplayed();
};

Field.prototype.waitForFieldVisibleAndStable = function(){
    return this._root.waitToBeCompletelyVisibleAndStable();
};

module.exports = Field;
