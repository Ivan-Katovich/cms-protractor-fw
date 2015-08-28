var SuperHomePage = require('./superHomePage');
var ResultsPage = require('./resultsPages/resultsPage');

pageFactory = {
    currentPage: 'undefined',
    getPage: function(basePage){
        var pages = {
            'super-home-page': SuperHomePage,
            'results-page': ResultsPage,
            'car-hire': 'CarHire',
            'flights': 'Flifhts',
            'hotels': 'Hotels',
            'holidays': 'Holidays',
            'insurance': 'insurance'
        };
        return new pages[basePage]();
    }
};

module.exports = pageFactory;