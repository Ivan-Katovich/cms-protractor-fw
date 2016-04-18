'use strict';

var inheritance = require('./../../helpers/inheritance'),
    FilterField = require('./filterField');

var Checkboxlist = function(data,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'checkboxlist';

    _this._root = _this.world.helper.elementGetter(data.parent,data);

    _this._data = {
        elements: {
            body: {
                css: '.panel-body',
                isSingle: true
            },
            clearBtn: {
                css: 'button.filter__clear-btn',
                isSingle: true
            }
        }
    };

    _this.completeByValue = function(value){
        data.value.push(value);
        //console.log(data.value);
        return _this._root.scrollIntoView()
            .then(function(){
                return _this._root.element(by.cssWithText('span',value)).click();
            });
    };

    _this.completeByNumber = function(num){
        return _this._root.scrollIntoView()
            .then(function(){
                _this._root.all(by.css('li')).get(num-1).click();
            })
            .then(function(){
                return _this._root.all(by.css('li label')).get(num-1).getText();
            })
            .then(function(text){
                data.value.push(text.split('\n')[0]);
                //console.log(data.value);
                return text.split('\n')[0];
            });
    };

    _this.clearList = function(){
        data.value = [];
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.clearBtn).click();
    };

};

inheritance.inherits(FilterField,Checkboxlist);

module.exports = Checkboxlist;
