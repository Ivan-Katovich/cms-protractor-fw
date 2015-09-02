var helper = require('./../helpers/helper');
var gadgetFactory = require('./../ui_elements/gadgetFactory');
var Page = require('./page');


var SuperHomePage = function(){

    var _this=this;

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
                css: '.searchGadgetForm__channelOption',
                isSingle: false
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
        return helper.elementGetter(_this._root,_this._data.elements.channelsButtons).get(channelButtons[channel]).click()
            .then(function(){
                gadgetFactory.getSearchGadget(channel);
            });
    };

    _this.getCarHireDriversAgeText = function(){
        return gadgetFactory.currentSearchGadget.getDriversAdgeText();
    };

};

helper.inherits(Page,SuperHomePage);

module.exports = SuperHomePage;
