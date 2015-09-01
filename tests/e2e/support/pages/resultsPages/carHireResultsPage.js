var gadgetFactory = require('./../../ui_elements/gadgetFactory');
var ResultsPage = require('./resultsPage');

var CarHireResultsPage = function(){

    var _this = this;

    _this._data = {
        elements: {
            resultsCard: {
                css: 'car-hire-card',
                isSingle: true
            }
        }
    };


};

helper.inherits(ResultsPage,CarHireResultsPage);

module.exports = CarHireResultsPage;
