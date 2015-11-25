
helper = {

    elementGetter: function(root,elementData){
        var _element;
        if(elementData.css){
            _element = (elementData.isSingle ? root.element(by.css(elementData.css)) : root.all(by.css(elementData.css)));
        }
        if(elementData.id){
            _element = (elementData.isSingle ? root.element(by.id(elementData.id)) : root.all(by.id(elementData.id)));
        }
        if(elementData.tagName){
            _element = (elementData.isSingle ? root.element(by.tagName(elementData.tagName)) : root.all(by.tagName(elementData.tagName)));
        }
        if(elementData.text){
            _element = (elementData.isSingle ? root.element(by.cssContainingText(elementData.css,elementData.text)) : root.all(by.cssContainingText(elementData.css,elementData.text)));
        }

        return _element;
    },

    inherits: function(Parent,Child){
        var F = function(){};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
    }

};

module.exports = helper;
