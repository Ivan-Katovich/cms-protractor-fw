//var helper = require('./../helpers/helper');
var gadgetFactory = require('./../../ui_elements/gadgetFactory');
var Page = require('./../superHomePage');

var ResultsPage = function(){

    this.sayResultsHello = function(){
        return console.log('Hello results');
    }

};

//helper.inherits(Page,ResultsPage);

module.exports = ResultsPage;
