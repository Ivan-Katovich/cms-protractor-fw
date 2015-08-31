var helper = require('./../../helpers/helper');
var gadgetFactory = require('./../../ui_elements/gadgetFactory');
var Page = require('./../page');

var ResultsPage = function(){};

ResultsPage.prototype._resultsData = {
    elements:{
        mainTitle: {
            css: '.hotel-result-card',
            isSingle: false
        }
    }
};

ResultsPage.prototype.isMainTitleExists = function(){
    return helper.elementGetter(this._root,this._resultsData).isDisplayed();
};

helper.inherits(Page,ResultsPage);

module.exports = ResultsPage;
