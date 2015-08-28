
var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype.sayHello = function(){
    console.log('Hello world');
    return element(by.css('.hero-section__heading-title')).getText();
};

module.exports = Page;
