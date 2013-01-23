'use strict';

describe("Dropdown with notes directive", function () {
    var body = $('body');
    var simpleHtml = '<dropdown-with-notes data-label-field="name" data-note-field="note" data-items="items" data-selected-item="selectedItem"></dropdown-with-notes>';
    var elm, $$compile, scope;

    //Load the angular directives
    beforeEach(module('moe.directives'));

    //Load the template
    beforeEach(module('core/controls/dropdown-with-notes-template.html'));

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
        expect(body.find('.dropdown-with-notes').length).toBe(0);

        var mock = $$compile(elm)(scope);

        body.append(mock);
        scope.$digest();

        expect(mock).not.toBeNull();

        //Check for the ul element of the dropdown
        expect(mock.find('ul').length).toBe(1);
        expect(body.find('.dropdown-with-notes').length).toBe(1);
    });

    it('should change the displayed item and note when a new item is selected', function () {
        var mock = $$compile(elm)(scope);
        body.append(mock);
        scope.$digest();

        //Simulate click action
        mock.find('ul').find('li')[0].click();

        expect(scope.selectedItem['name']).toBe("Beef")
        expect(mock.find('input').val()).toBe("Steak, burgers, stew")
    });

    //The input is not updating the model the way you would expect, need to reconsider
    xit("should update the data[note] value in the scope when note is edited by a user", function () {
        var mock = $$compile(elm)(scope);
        body.append(mock);
        scope.$digest();

        mock.find('input').val("Pumpkins, eggs, and beans");
        scope.$digest();

        expect(scope.selectedItem.note).toBe("Pumpkins, eggs, and beans");
        expect(scope.items[2].note).toBe("Pumpkins, eggs, and beans");
    });
});
