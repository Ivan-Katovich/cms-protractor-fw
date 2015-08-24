var helper = require('./../helpers/helper');


var SuperHomePage = function(root){

    this._root=root;

    var _data = {
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

    };

    this.isMainLogoVisible = function(){
        return helper.elementGetter(root,_data.mainLogo).isDisplayed();
    };

};

module.exports = SuperHomePage;
