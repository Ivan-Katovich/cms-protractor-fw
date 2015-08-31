var gadgetFactory = require('./../../ui_elements/gadgetFactory');
var ResultsPage = require('./resultsPage');

var CarHireResultsPage = function(){

    _this = this;

    _this._data = {
        elements: {
            resultsCard: {
                css: '.results-summary__title',
                isSingle: true
            }
        }
    };





};

helper.inherits(ResultsPage,CarHireResultsPage);

module.exports = CarHireResultsPage;
