var SuperHomePage = require('./superHomePage');
var ResultsPage = require('./resultsPages/resultsPage');
var CarHireResultsPage = require('./resultsPages/carHireResultsPage');

pageFactory = {
    currentPage: 'undefined',
    getPage: function(page){
        var pages = {
            'super-home': SuperHomePage,
            'results': ResultsPage,
            'car-hire': CarHireResultsPage,
            'flights': 'Flifhts',
            'hotels': 'Hotels',
            'holidays': 'Holidays',
            'insurance': 'insurance'
        };
        this.currentPage = new pages[page]();
    }
};

module.exports = pageFactory;