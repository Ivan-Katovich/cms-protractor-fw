'use strict';
/*jshint -W083 */

var Gadget = function(){};

Gadget.prototype.isGadgetVisible = function(){
    var fieldForCheck = Object.keys(this._data.fields)[0];
    return this.world.fieldFactory.getField(this._data.fields[fieldForCheck]).isFieldVisible();
};

Gadget.prototype.waitForGadgetVisibleAndStable = function(){
    var fieldForCheck = Object.keys(this._data.fields)[0];
    return this.world.fieldFactory.getField(this._data.fields[fieldForCheck]).waitForFieldVisibleAndStable();
};

Gadget.prototype.completeFieldByValue = function(field, value){
    return this.world.fieldFactory.getField(this._data.fields[field]).completeByValue(value);
};

Gadget.prototype.completeByProfile = function(profileName){
    var _this = this;

    return _this.world.helper.asyncLoop(_this._data.profiles[profileName].length, function(loop,i){
        var innerPosition = i-1,
            field = Object.keys(_this._data.profiles[profileName][innerPosition])[0];
        return _this.completeFieldByValue(field,_this._data.profiles.minimum[innerPosition][field])
                .then(function(){
                    return loop();
                });
    });
};

Gadget.prototype.clickOnButton = function(field){
    if(this._data.fields[field].type !== 'button'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type+'". It should be "button"');
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).clickOn();
};

Gadget.prototype.selectDropdownByPosition = function(field, position){
    if(this._data.fields[field].type !== 'dropdown'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type+'". It should be "dropdown"');
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).selectByPosition(position);
};

Gadget.prototype.selectDropdownByGroupAndValue = function(field, group, value){
    if(this._data.fields[field].type !== 'dropdown'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type+'". It should be "dropdown"');
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).selectByGroupAndValue(group,value);
};

Gadget.prototype.selectRadiobuttonByLabel = function(field, label){
    if(this._data.fields[field].type !== 'radiobuttons'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type+'". It should be "radiobuttons"');
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).completeByValue(label);
};

Gadget.prototype.selectDatapickerDayInNextMonth = function(field, day){
    if(this._data.fields[field].type !== 'datapicker'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type+'". It should be "datapicker"');
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).selectDayFromNextMonth(day);
};

Gadget.prototype.getFieldLabel = function(field){
    return this.world.fieldFactory.getField(this._data.fields[field]).getLabel();
};

Gadget.prototype.mergeProfile = function(profile){
    var _this = this;
    _this._data.profiles[profile].forEach(function(fieldObj){
        var field = Object.keys(fieldObj)[0];
        _this._data.fields[field].value = fieldObj[field];
    });
};

Gadget.prototype.moveSliderHandler = function(field,handler,px){
    if(this._data.fields[field].type !== 'slider'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type+'". It should be "slider"');
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).moveHandler(handler,px);
};

Gadget.prototype.getSliderValue = function(field){
    if(this._data.fields[field].type !== 'slider'){
        throw new Error('Wrong type of field:"'+this._data.fields[field].type+'". It should be "slider"');
    }
    return this.world.fieldFactory.getField(this._data.fields[field]).getValue();
};

Gadget.prototype.getTextValueOf = function(field){
    return this.world.fieldFactory.getField(this._data.fields[field]).getTextValue();
};

Gadget.prototype.isObjectVisible = function(field){
    return this.world.fieldFactory.getField(this._data.fields[field]).isFieldVisible();
};

Gadget.prototype.isObjectPresentAndVisible = function(field){
    return this.world.fieldFactory.getField(this._data.fields[field]).isFieldPresentAndVisible();
};

module.exports = Gadget;
