'use strict';

describe("Editable dropdown directive", function () {
    var body = $('body');
    var simpleHtml = '<editable-dropdown data-items="items" data-selected-item="selectedItem"></editable-dropdown>';
    var elm, $$compile, scope;

    //Load the angular directives
    beforeEach(module('moe.directives'));

    //Load the template
    beforeEach(module('core/controls/editable-dropdown-template.html'));

    //Create scope
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
        $$compile = $compile;

        //Setup Scope
        scope.items = [
            "Chicken", "Beef", "Tofu", "Pork"
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
