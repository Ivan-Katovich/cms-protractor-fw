
helper = {

    elementGetter: function(root,elementData){
        var _element = (elementData.isSingle ? root.element(by.css(elementData.css)) : root.element.all(by.css(elementData.css)));
        return _element;
    }

};

module.exports = helper;
