'use strict';

var helper = require('./../helpers/helper');
var gadgetFactory = require('./../ui_elements/gadgetFactory');
var Page = require('./page');
var q = require('q');

var SuperHomePage = function(){

    var _this=this;

    _this.marker = 'super-home';

    _this._data = {
        elements: {
            mainLogo: {
                css: '.site-logo-link',
                isSingle: true
            },
            title: {
                css: '.hero-section__heading-title',
                isSingle: true
            },
            channelsButtons: {
                css: 'button.searchGadgetForm__channelOption',
                isSingle: false
            },
            carHireButton: {
                css: 'button.searchGadgetForm__channelOption',
                text: 'Car Hire',
                isSingle: true
            },
            searchButton: {
                css: '.sG__form-element--btn-submit',
                isSingle: true,
                platform: 'mobile'
            }
        }
    };

    _this.isMainLogoVisible = function(){
        return helper.elementGetter(_this._root,_this._data.elements.mainLogo).isDisplayed();
    };

    _this.getTitleText = function(){
        return helper.elementGetter(_this._root,_this._data.elements.title).waitReady()
            .then(function(el){
                return el.getText();
            });
    };

    _this.initSearchGadget = function(channel){
        var channelButtons = {
            'holidays': 0,
            'flights': 1,
            'hotels': 2,
            'car-hire': 3,
            'insuranse': 4
        };
        return helper.elementGetter(_this._root,_this._data.elements.channelsButtons).get(channelButtons[channel]).waitToBeCompletelyVisibleAndStable()
            .then(function(){
                return helper.elementGetter(_this._root,_this._data.elements.channelsButtons).get(channelButtons[channel]).click();
            })
            .then(function(){
                return gadgetFactory.getSearchGadget(channel);
            });
    };

    _this.getCarHireDriversAgeText = function(){
        return gadgetFactory.currentSearchGadget.getDriversAdgeText();
    };

    _this.clickSearchIfMobile = function(){
        if(process.env.PLATFORM === 'mobile'||process.env.PLATFORM === 'tabletP'){
            return helper.elementGetter(_this._root,_this._data.elements.searchButton).click();
        }else{
            return browser.sleep(10);
        }
    };

    _this.constructUrlForPage = function(){
        var deferred = q.defer();
        deferred.resolve(browser.baseUrl);
        return deferred.promise;
    };

};

helper.inherits(Page,SuperHomePage);

module.exports = SuperHomePage;
