'use strict';

ddescribe("Button dropdown directive", function () {
    var body = $('body');
    var simpleHtml = '<button-dropdown data-items="items" data-selected-item="selectedItem" data-label-field="name"></button-dropdown>';
    var elm, $$compile, scope;

    //Load the angular directives
    beforeEach(module('moe.directives'));

    //Load the template
    beforeEach(module('core/controls/button-dropdown-template.html'));

    //Create scope
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
        $$compile = $compile;

        //Setup Scope
        scope.items = [
            {name:"Beef", note:"Steak, burgers, stew"},
            {name:"Chicken", note:"Wings, Nuggets, Roasted"},
            {name:"Pork", note:"Slow Cooked, Fried, Honey Baked"}
        ];
        scope.selectedItem = scope.items[2];

        //Setup up the element as an angular element
        elm = angular.element(simpleHtml);
    }));

    afterEach(function () {
        body.empty();
    });

    it('should compile the directive', function () {
        expect(body.find('div').length).toBe(0);

        var mock = $$compile(elm)(scope);

        body.append(mock);
        scope.$digest();

        expect(mock).not.toBeNull();
        expect(body.find('.button-dropdown').length).toBe(1);
    });

    it('should display the names (labelField) of the items passed in', function () {
        //Standard setup
        var mock = $$compile(elm)(scope);
        scope.$digest();

        var listElements = $(mock).find('ul').find('li');

        expect(listElements.length).toBe(3);
        expect($(listElements[0]).find('.item')[0].innerHTML).toBe("Beef");
        expect($(listElements[1]).find('.item')[0].innerHTML).toBe("Chicken");
        expect($(listElements[2]).find('.item')[0].innerHTML).toBe("Pork");
    });

    it("should display the labelField of the selectedItem", function () {
        //Standard setup
        var mock = $$compile(elm)(scope);
        scope.$digest();

        expect($(mock).find('.selected-item')[0].innerHTML).toBe("Pork");
    });
});
