var helper = require('./../helpers/helper');
var gadgetFactory = require('./../ui_elements/gadgetFactory');
var Page = require('./page');


var SuperHomePage = function(){

    var _this=this;

    this._data = {
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
                css: '.searchGadgetForm__channelOption',
                isSingle: false
            }
        }
    };

    this.navigateTo = function(){
        return browser.get(browser.baseUrl);
    };

    this.isMainLogoVisible = function(){
        return helper.elementGetter(_this._root,_this._data.elements.mainLogo).isDisplayed();
    };

    this.getTitleText = function(){
        return helper.elementGetter(_this._root,_this._data.elements.title).getText();
    };

    this.initSearchGadget = function(channel){
        var channelButtons = {
            'holidays': 0,
            'flights': 1,
            'hotels': 2,
            'car-hire': 3,
            'insuranse': 4
        };
        return helper.elementGetter(_this._root,_this._data.elements.channelsButtons).get(channelButtons[channel]).click()
            .then(function(){
                gadgetFactory.getSearchGadget(channel);
            });
    };

    this.getCarHireDriversAgeText = function(){
        return gadgetFactory.currentSearchGadget.getDriversAdgeText();
    };

    this.selectPageDropdownByPosition = function(field,position){
        return gadgetFactory.currentSearchGadget.selectDropdownByPosition(field,position);
    };

    this.completePageFieldByValue = function(field,value){
        return gadgetFactory.currentSearchGadget.completeFieldByValue(field,value);
    };

    this.getPageFieldLabel = function(field){
        return gadgetFactory.currentSearchGadget.getFieldLabel(field);
    };

};

helper.inherits(Page,SuperHomePage);

module.exports = SuperHomePage;
