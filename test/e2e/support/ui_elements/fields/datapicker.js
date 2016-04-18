'use strict';

var inheritance = require('./../../helpers/inheritance'),
    Field = require('./field');

var DataPicker = function(data,world){

    var _this = this;

    _this.world = world;

    _this.marker = 'datapicker';

    _this._root = _this.world.helper.elementGetter(data.parent,data);

    _this._data = {
        elements: {
            holder: {
                css: '.picker__holder',
                isSingle: true
            },
            next: {
                css: '.picker__nav--next',
                isSingle: true
            },
            prev: {
                css: '.picker__nav--prev',
                isSingle: true
            },
            years: {
                css: '.picker__select--year',
                isSingle: true
            },
            months: {
                css: '.picker__select--month',
                isSingle: true
            },
            days: {
                css: '.picker__table',
                isSingle: true
            }
        }
    };

    _this.selectDayFromNextMonth = function(value){
        var valueOut = value<10 ? '0'+value : value;
        var date = _this.world.moment().add(1,'months');
        data.value = date.format('YYYY-MM-'+valueOut);
        console.log('Date will be: '+date.format('YYYY-MM-'+valueOut));
        return _this._root.element(by.css('.searchGadgetForm__datePicker-wrapper>input')).click()
            .then(function(){
                return _this.world.helper.elementGetter(_this._root,_this._data.elements.holder).waitReady();
            })
            .then(function(){
                var years = _this.world.helper.elementGetter(_this._root,_this._data.elements.years);
                years.element(by.cssWithText('option',date.format('YYYY'))).getAttribute('selected')
                    .then(function(attr){
                        if(!attr){
                            return years.click()
                                .then(function(){
                                    return years.element(by.cssWithText('option',date.format('YYYY'))).click();
                                });
                        }
                    });
            })
            .then(function(){
                var months = _this.world.helper.elementGetter(_this._root,_this._data.elements.months);
                months.element(by.cssWithText('option',date.format('MMMM'))).getAttribute('selected')
                    //var month = helper.elementGetter(_this._root,_this._data.elements.months).element(by.cssWithText('option',date.format('MMMM')));
                    .then(function(attr){
                        if(!attr){
                            return months.click()
                                .then(function(){
                                    return months.element(by.cssWithText('option',date.format('MMMM'))).click();
                                });
                        }

                    });
            })
            .then(function(){
                return _this.world.helper.elementGetter(_this._root,_this._data.elements.holder).scrollIntoView(false)
                    .then(function(){
                        return _this.world.helper.elementGetter(_this._root,_this._data.elements.days).element(by.cssWithText('.picker__day',value)).click();
                    });
            })
            .then(function(){
                _this.world.helper.elementGetter(_this._root,_this._data.elements.holder).waitToBeHidden();
            });
            //.then(function(){
            //    console.log('sleep ==============');
            //    browser.sleep(5000);
            //});
    };

    var creteDateByValue = function(value){
        var date = _this.world.moment();
        console.log('value = '+value);
        var day = value.replace(_this.world.constants.REGEXP_TO_PARSE_DATAPICKER_VALUE, '$1') ? value.replace(_this.world.constants.REGEXP_TO_PARSE_DATAPICKER_VALUE, '$1').match(/[+|-]?\d{1,2}/)[0] : date.format('DD');
        var month = value.replace(_this.world.constants.REGEXP_TO_PARSE_DATAPICKER_VALUE, '$2') ? value.replace(_this.world.constants.REGEXP_TO_PARSE_DATAPICKER_VALUE, '$2').match(/[+|-]?\d{1,2}/)[0] : date.format('MM');
        var year = value.replace(_this.world.constants.REGEXP_TO_PARSE_DATAPICKER_VALUE, '$3') ? value.replace(_this.world.constants.REGEXP_TO_PARSE_DATAPICKER_VALUE, '$3').match(/[+|-]?\d{1,4}/)[0] : date.format('YYYY');
        if(day.match(/[+|-]/)){
            day = date.add(day*1,'days').format('DD');
        }
        if(month.match(/[+|-]/)){
            month = date.add(month*1,'months').format('MM');
        }
        if(year.match(/[+|-]/)){
            year = date.add(year*1,'years').format('YYYY');
        }
        return _this.world.moment(year+'-'+month+'-'+day);
    };

    /* correct value for this function should match /^(d:[+|-]?\d{1,2})?\/?(m:[+|-]?\d{1,2})?\/?(y:[+|-]?\d{1,4})?$/ regexp */
    _this.completeByValue = function(value){
        if(value.match(_this.world.constants.REGEXP_TO_PARSE_DATAPICKER_VALUE)){
            var date = creteDateByValue(value);
            data.value = date.format('YYYY-MM-DD');
            return _this._root.element(by.css('.searchGadgetForm__datePicker-wrapper>input')).click()
                .then(function(){
                    return _this.world.helper.elementGetter(_this._root,_this._data.elements.holder).waitReady();
                })
                .then(function(){
                    var years = _this.world.helper.elementGetter(_this._root,_this._data.elements.years);
                    years.element(by.cssWithText('option',date.format('YYYY'))).getAttribute('selected')
                        .then(function(attr){
                            if(!attr){
                                return years.click()
                                    .then(function(){
                                        return years.element(by.cssWithText('option',date.format('YYYY'))).click();
                                    });
                            }
                        });
                })
                .then(function(){
                    var months = _this.world.helper.elementGetter(_this._root,_this._data.elements.months);
                    months.element(by.cssWithText('option',date.format('MMMM'))).getAttribute('selected')
                        //var month = helper.elementGetter(_this._root,_this._data.elements.months).element(by.cssWithText('option',date.format('MMMM')));
                        .then(function(attr){
                            if(!attr){
                                return months.click()
                                    .then(function(){
                                        return months.element(by.cssWithText('option',date.format('MMMM'))).click();
                                    });
                            }

                        });
                })
                .then(function(){
                    return _this.world.helper.elementGetter(_this._root,_this._data.elements.holder).scrollIntoView(false)
                        .then(function(){
                            return _this.world.helper.elementGetter(_this._root,_this._data.elements.days).element(by.cssWithText('.picker__day',date.format('D'))).click();
                        });
                })
                .then(function(){
                    _this.world.helper.elementGetter(_this._root,_this._data.elements.holder).waitToBeHidden();
                });
        }else{
            throw new Error('Not correct value for Datapicker: '+value);
        }
    };

};

inheritance.inherits(Field,DataPicker);

module.exports = DataPicker;
