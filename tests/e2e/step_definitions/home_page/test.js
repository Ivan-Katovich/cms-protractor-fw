//describe('angularjs homepage todo list', function() {
//    it('should add a todo', function() {
//        browser.get('http://localhost:9000/beta/');
//
//        expect(element(by.css('.hero-section__heading-title')).getText()).toEqual('Leave London behind');
//
//    });
//});


var steps = function(){

    this.When(/^I navigate to the Home page$/, function (callback) {
        console.log('I am in ===============');
        browser.get('http://localhost:9000/beta/').then(callback);
    });

    this.Then(/^the title should have correct text$/, function (callback) {
        console.log(' all right');
        //expect(element(by.css('.hero-section__heading-title')).getText()).to.eventually.equal('Leave London111 behind');
        element(by.css('.hero-section__heading-title')).getText().then(function(text){
            console.log(text);
            expect(text).to.equal('Leave London behind');
            callback();
        });
    });

};

module.exports = steps;