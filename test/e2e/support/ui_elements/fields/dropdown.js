'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Field = require('./field');

var Dropdown = function(data,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'dropdown';
    
    _this._root = _this.world.helper.elementGetter(data.parent,data);

    _this.selectByPosition = function(position){
        return _this._root.element(by.css('select')).click()
            .then(function(){
                var option = _this._root.all(by.css('option')).get(position);
                option.getText()
                    .then(function(text){
                        data.value = text;
                        if(process.env.CURRENT_BROWSER === 'firefox'){
                            return browser.actions().mouseDown(option).mouseUp().perform();
                        }else{
                            return option.click();
                        }
                    });
            });
    };

    _this.completeByValue = function(value){
        data.value = value;
        return _this._root.element(by.css('select')).click()
            .then(function(){
                var option = _this._root.element(by.cssWithText('option',value));
                if(process.env.CURRENT_BROWSER === 'firefox'){
                    return browser.actions().mouseDown(option).mouseUp().perform();
                }else{
                    return option.click();
                }
            });
    };

    _this.selectByGroupAndValue = function(group,value){
        data.value = value;
        return _this._root.element(by.css('select')).click()
            .then(function(){
                if(!isNaN(group*1)){
                    var optionVal = _this._root.all(by.css('optgroup')).get(group).element(by.cssWithText('option',value));
                    if(process.env.CURRENT_BROWSER === 'firefox'){
                        return browser.actions().mouseDown(optionVal).mouseUp().perform();
                    }else{
                        return optionVal.click();
                    }
                }else{
                    var optionNam =  _this._root.element(by.css('optgroup[label="'+group+'"]')).element(by.cssWithText('option',value));
                    if(process.env.CURRENT_BROWSER === 'firefox'){
                        return browser.actions().mouseDown(optionNam).mouseUp().perform();
                    }else{
                        return optionNam.click();
                    }
                }
            });
    };

};

inheritance.inherits(Field,Dropdown);

module.exports = Dropdown;
