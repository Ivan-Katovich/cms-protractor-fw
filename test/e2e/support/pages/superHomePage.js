'use strict';

var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var SuperHomePage = function(world){

    var _this=this;
    
    _this.world = world;

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
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.mainLogo).isDisplayed();
    };

    _this.getTitleText = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.title).waitReady()
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
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.channelsButtons).get(channelButtons[channel]).waitToBeCompletelyVisibleAndStable()
            .then(function(){
                return _this.world.helper.elementGetter(_this._root,_this._data.elements.channelsButtons).get(channelButtons[channel]).click();
            })
            .then(function(){
                return _this.world.gadgetFactory.getSearchGadget(channel);
            });
    };

    _this.getCarHireDriversAgeText = function(){
        return _this.world.gadgetFactory.currentGadget.getDriversAdgeText();
    };

    _this.clickSearchIfMobile = function(){
        if(process.env.PLATFORM === 'mobile'||process.env.PLATFORM === 'tabletP'){
            return _this.world.helper.elementGetter(_this._root,_this._data.elements.searchButton).click();
        }else{
            return browser.sleep(10);
        }
    };

    _this.constructUrlForPage = function(){
        var deferred = _this.world.q.defer();
        deferred.resolve(browser.baseUrl);
        return deferred.promise;
    };

};

inheritance.inherits(Page,SuperHomePage);

module.exports = SuperHomePage;
