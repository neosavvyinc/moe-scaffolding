'use strict';

var body = $('body');

var simpleHtml = '<label-sub-label label="Mike" sub-label="Ike"></label-sub-label>';

describe("Label sub label directive", function () {
    var scope, $$compile;

    beforeEach(module('moe.directives'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        $$compile = $compile;

        //Define Everything In Scope For Directive
    }));

    afterEach(function () {
        body.empty();
    });

    it('should compile the directive', function () {
        expect(body.find('label').length).toBe(0);

        var mockLabelSubLabel = $$compile(simpleHtml)(scope);

        body.append(mockLabelSubLabel);
        scope.$digest();

        expect(mockLabelSubLabel.find('label').length).toBe(2);
        expect(body.find('label').length).toBe(2);
    });
});
