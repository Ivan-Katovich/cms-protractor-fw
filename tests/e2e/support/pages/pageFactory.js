var Page = require('./page');
var SuperHomePage = require('./superHomePage');

pageFactory = {
    inherits: function(Parent,Child){
        var F = function(){};
        F.prototype = new Parent();
        Child.prototype = new F();
        Child.prototype.constructor = Child;
    },
    getPage: function(channel){
        var channels = {
            'super-home-page': SuperHomePage
        };
        this.inherits(Page,channels[channel]);
        return new channels[channel](element(by.css('body')));
    }
    //superHomePage: this.getChannelResultsPageConstructor('super-home-page')
};

module.exports = pageFactory;