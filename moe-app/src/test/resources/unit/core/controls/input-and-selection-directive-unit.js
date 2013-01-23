'use strict';

describe("Input and selection directive", function () {
    var body = $('body');
    var simpleHtml = '<input-and-selection data-input-id-value="my-input" data-items="items" data-selected-item="selectedItem" data-text="text" data-label-field="name"></input-and-selection>';
    var labelFunctionHtml = '<input-and-selection data-input-id-value="my-input" data-items="items" data-selected-item="selectedItem" data-text="text" data-label-function="getLabel(item)"></input-and-selection>';
    var elm, $$compile, scope;

    //Load the angular directives
    beforeEach(module('moe.directives'));

    //Load the template
    beforeEach(module('core/controls/input-and-selection-template.html'));

    //Create scope
    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
        $$compile = $compile;

        //Setup Scope
        scope.items = [
            {name:"Charles I", data:"King of England from 1625 - 1649"},
            {name:"Charles II", data:"King of England from 1660 - 1685"},
            {name:"James II", data:"King of England from 1685 - 1688"}
        ];
        scope.selectedItem = scope.items[1];
        scope.text = null;

        //Setup up the element as an angular element
        elm = angular.element(simpleHtml);
    }));

    afterEach(function () {
        body.empty();
    });

    it('should compile the directive', function () {
        expect(body.find('.input-and-selection').length).toBe(0);

        var mock = $$compile(elm)(scope);

        body.append(mock);
        scope.$digest();

        expect(mock).not.toBeNull();
        expect(body.find('.input-and-selection').length).toBe(1);
    });

    describe("Simple inner directive", function () {
        var mock;

        beforeEach(function () {
            mock = $$compile(elm)(scope);
            scope.$digest();
        });

        it('should display the names (labelField) of the items passed in', function () {
            var listElements = $(mock).find('ul').find('li');

            expect($(listElements[0]).find('.item')[0].innerHTML).toBe("Charles I");
            expect($(listElements[1]).find('.item')[0].innerHTML).toBe("Charles II");
            expect($(listElements[2]).find('.item')[0].innerHTML).toBe("James II");
        });

        it("should display the label field of the selected item", function () {
            expect($(mock).find('.selected-item')[0].innerHTML.indexOf("Charles II") != -1).toBeTruthy();
        });

        it("should update the selected item when the selected item is changed from outside", function() {
            scope.selectedItem = scope.items[2];
            scope.$digest();

            expect($(mock).find('.selected-item')[0].innerHTML.indexOf("James II") != -1).toBeTruthy();
        });

        it("should update the selected item when an item is clicked", function() {
            var listElements = $(mock).find('ul').find('li');

            $(listElements[0]).find('.item')[0].click();
            scope.$digest();

            expect(scope.selectedItem.name).toBe("Charles I");
            expect(scope.selectedItem.data).toBe("King of England from 1625 - 1649");
            expect($(mock).find('.selected-item')[0].innerHTML.indexOf("Charles I") != -1).toBeTruthy();
        });

        //Val changes through jQuery are not registering with the watchers
        xit('should update text in the scope when text is changed', function() {
            var input = $(mock).find('.text');
            expect(input.val()).toBe("");

            scope.text = "Here is some text";
            scope.$digest();

            expect(input.val()).toBe("Here is some text");

            input.val("This text about the input");
            input.addClass('ng-valid ng-dirty');
            scope.$digest();

            expect(scope.text).toBe("This is text about the input");
        });

        it("should not affect a change in the text value if the selected item is changed", function() {
            var input = $(mock).find('.text');
            expect(input.val()).toBe("");
            scope.text = "Here is some more text";
            scope.$digest();

            expect(input.val()).toBe("Here is some more text");

            var listElements = $(mock).find('ul').find('li');

            $(listElements[2]).find('.item')[0].click();
            scope.$digest();

            expect(scope.text).toBe("Here is some more text");
            expect(input.val()).toBe("Here is some more text");
        });

        it("should apply and id value to the input", function() {
           expect($(mock).find("#my-input").length).toBe(1);
        });
    });

    describe("Advanced inner directive", function() {
        var mock;

        beforeEach(function () {
            elm = angular.element(labelFunctionHtml);

            scope.getLabel = function(item) {
                if (item && item.name) {
                    return item.name + " King of England";
                }
                return null;
            };

            mock = $$compile(elm)(scope);
            scope.$digest();
        });

        it('should display the names via the label function', function () {
            var listElements = $(mock).find('ul').find('li');

            expect($(listElements[0]).find('.item')[0].innerHTML).toBe("Charles I King of England");
            expect($(listElements[1]).find('.item')[0].innerHTML).toBe("Charles II King of England");
            expect($(listElements[2]).find('.item')[0].innerHTML).toBe("James II King of England");
        });

        it("should display the selected item via the label function", function () {
            var listElements = $(mock).find('ul').find('li');

            $(listElements[2]).find('.item')[0].click();

            expect($(mock).find('.selected-item')[0].innerHTML.indexOf("James II King of England") != -1).toBeTruthy();
        });
    });
});
