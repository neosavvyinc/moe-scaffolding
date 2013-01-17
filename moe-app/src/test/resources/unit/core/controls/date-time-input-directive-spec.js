'use strict';

var body = $('body');

var simpleHtml = '<date-time-input data-date="date" format="%m-%d-%Y"></date-time-input>',
    htmlWithFormat = '<date-time-input data-date="date" format="%B %d, %Y"></date-time-input>';

xdescribe("Date Time input directive", function () {
    var scope, $$compile;

    beforeEach(module('moe.directives'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        $$compile = $compile;

        //Define Everything In Scope For Directive
        scope.date = new Date(1990, 0, 15); // January 15th, 1990
    }));

    afterEach(function () {
        body.empty();
    });

    it('should compile the directive', function () {
        expect(body.find('input').length).toBe(0);

        var mockDateInput = $$compile(simpleHtml)(scope);

        body.append(mockDateInput);
        scope.$digest();

        expect(mockDateInput.find('input').length).toBe(1);
        expect(body.find('input').length).toBe(1);
    });
});
