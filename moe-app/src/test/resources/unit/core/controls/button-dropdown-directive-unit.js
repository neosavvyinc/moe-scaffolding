'use strict';

describe("Button dropdown directive", function () {
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
    });
});
