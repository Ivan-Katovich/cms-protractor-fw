'use strict';

var inheritance = require('./../../helpers/inheritance'),
    FilterField = require('./filterField');

var Slider = function(data,world){

    var _this = this;
    
    _this.world = world;

    _this.marker = 'slider';
    
    _this._root = _this.world.helper.elementGetter(data.parent,data);

    _this._data = {
        elements: {
            left: {
                xpath: './descendant::*[contains(@class,"noUi-handle-lower")][1]',
                isSingle: true
            },
            right: {
                xpath: './descendant::*[contains(@class,"noUi-handle-upper")][1]',
                isSingle: true
            },
            min: {
                css: '.filter-slider__value--low',
                isSingle: true
            },
            max: {
                css: '.filter-slider__value--high',
                isSingle: true
            },
            value: {
                // css: '.filter-slider__values',
                xpath: './descendant::*[contains(@class,"filter-slider__values")][1]',
                isSingle: true
            },
            body: {
                css: 'range-slider-new'
            },
            clearBtn: {
                xpath: './descendant::button[contains(@class,"filter__clear-btn")][1]',
                isSingle: true
            }
        }
    };

    _this.getTextValue = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.value).getText();
    };

    _this.moveHandler = function(handler,px){
        var deferred = _this.world.q.defer();

        _this._root.scrollIntoView()
            .then(function(){
                return _this.world.helper.elementGetter(_this._root,_this._data.elements[handler]).waitToBeCompletelyVisibleAndStable();
            })
            .then(function(){
                return browser.actions().dragAndDrop(_this.world.helper.elementGetter(_this._root,_this._data.elements[handler]),{x:parseInt(px), y:0}).perform();
            })
            .then(function(){
                return _this.world.helper.elementGetter(_this._root,_this._data.elements.value).getText();
            })
            .then(function(){
                return _this.world.helper.elementGetter(_this._root,_this._data.elements[handler]).waitToBeCompletelyVisibleAndStable();
                //return browser.sleep(2000);
            })
            .then(function(text){
                data.value = text;
                deferred.resolve();
            });
        return deferred.promise;
    };

    _this.completeByValue = function(value){
        if(value.match(_this.world.constants.REGEXP_TO_PARSE_SLIDER_VALUE)){
            return _this.world.helper.asyncLoop(value.split(',').length, function(loop,i){
                var innerPosition = i-1;
                var handler = value.split(',')[innerPosition].split(':')[0];
                var px = value.split(',')[innerPosition].split(':')[1];
                return _this.moveHandler(handler,px)
                    .then(function(){
                        return loop();
                    });
            });
        }else{
            throw new Error('Not correct value for Slider: '+value);
        }
    };

    _this.clearList = function(){
        data.value = null;
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.clearBtn).click();
    };

};

inheritance.inherits(FilterField,Slider);

module.exports = Slider;
