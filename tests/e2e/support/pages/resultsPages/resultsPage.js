var helper = require('./../../helpers/helper');
var gadgetFactory = require('./../../ui_elements/gadgetFactory');
var Page = require('./../page');

var ResultsPage = function(){};

helper.inherits(Page,ResultsPage);

ResultsPage.prototype._resultsData = {
    elements:{
        mainTitle: {
            css: '.results-summary__title',
            isSingle: true
        },
        loadPercentage: {
            css: '.search-progress__percentage',
            isSingle: false
        }
    }
};

ResultsPage.prototype.isMainTitleVisible = function(){
    return helper.elementGetter(this._root,this._resultsData.elements.mainTitle).isDisplayed();
};

ResultsPage.prototype.waitForResults = function(){
    return helper.elementGetter(this._root,this._resultsData.elements.loadPercentage).waitForDisappeared();
};


module.exports = ResultsPage;
