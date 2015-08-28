var helper = require('./../../helpers/helper');
var Field = require('./field');

var Dropdown = function(data){

    var _this = this;

    this._root = data.parent.element(by.css(data.css));

    this.selectByPosition = function(position){
        return _this._root.element(by.css('select')).click()
            .then(function(){
                return _this._root.all(by.css('option')).get(position-1).click();
            });
    };

    this.completeByValue = function(value){
        return _this._root.click()
            .then(function(){
                return _this._root.element(by.cssContainingText('option',value)).click();
            });
    }
};

helper.inherits(Field,Dropdown);

module.exports = Dropdown;
