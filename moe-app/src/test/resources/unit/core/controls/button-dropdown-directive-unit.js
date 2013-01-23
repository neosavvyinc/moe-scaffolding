'use strict';

ddescribe("Button dropdown directive", function () {
    var body = $('body');
    var simpleHtml = '<button-dropdown data-items="items" data-selected-item="selectedItem" data-label-field="name"></button-dropdown>';
    var labelFunctionHtml = '<button-dropdown data-items="items" data-selected-item="selectedItem" data-label-function="getLabel(item)"></button-dropdown>';
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
            {name:"Beef", note:"Steak, Burgers, stew"},
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

    describe("Simple inner directive", function () {
        var mock;

        beforeEach(function() {
            //Standard setup
            mock = $$compile(elm)(scope);
            scope.$digest();
        });

        it('should display the names (labelField) of the items passed in', function () {
            var listElements = $(mock).find('ul').find('li');

            expect(listElements.length).toBe(3);
            expect($(listElements[0]).find('.item')[0].innerHTML).toBe("Beef");
            expect($(listElements[1]).find('.item')[0].innerHTML).toBe("Chicken");
            expect($(listElements[2]).find('.item')[0].innerHTML).toBe("Pork");
        });

        it("should display the labelField of the selectedItem", function () {
            expect($(mock).find('.selected-item')[0].innerHTML).toBe("Pork");
        });

        it("should update the selected item when the selected item is changed from outside", function() {
            scope.selectedItem = scope.items[0];
            scope.$digest();

            expect($(mock).find('.selected-item')[0].innerHTML).toBe("Beef");
        });

        it("should update the selected item when an item is clicked", function() {
            var listElements = $(mock).find('ul').find('li');

            listElements[1].click();
            scope.$digest();

            expect(scope.selectedItem.name).toBe("Chicken");
            expect($(mock).find('.selected-item')[0].innerHTML).toBe("Chicken");
        });
    });

    describe("Advanced inner directive", function() {
        var mock;

        beforeEach(function() {
            elm = angular.element(labelFunctionHtml);

            scope.getLabel = function(item) {
                if (item && item.note) {
                    return item.note.split(',')[1].replace(' ', '');
                }
                return null;
            };

            //Standard setup
            mock = $$compile(elm)(scope);
            scope.$digest();
        });

        it("should choose a label for the items via the label function", function() {
            var listElements = $(mock).find('ul').find('li');

            expect(listElements.find('.item')[0].innerHTML).toBe("Burgers");
            expect(listElements.find('.item')[1].innerHTML).toBe("Nuggets");
            expect(listElements.find('.item')[2].innerHTML).toBe("Fried");
        });

        it("should choose a label for the selected item via the label function", function() {
            expect($(mock).find('.selected-item')[0].innerHTML).toBe("Fried");
        });

        it("should update the selected item externally when an item is selected", function() {
            var listElements = $(mock).find('ul').find('li');

            listElements[0].click();
            scope.$digest();

            expect(scope.selectedItem.name).toBe("Beef");
            expect($(mock).find('.selected-item')[0].innerHTML).toBe("Burgers");
        });
    });
});
