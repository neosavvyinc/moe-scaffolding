'use strict';;

describe("Label sub label directive", function () {
    var body = $('body');
    var simpleHtml = '<label-sub-label label="Mike" sub-label="Ike"></label-sub-label>';
    var scope, $$compile;

    beforeEach(module('moe.directives'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
        $$compile = $compile;
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

    it('should apply the label values in the template', function () {
        var mockLabelSubLabel = $$compile(simpleHtml)(scope);
        body.append(mockLabelSubLabel);
        scope.$digest();

        expect(mockLabelSubLabel.find('label')[0].innerHTML).toBe('Mike')
        expect(mockLabelSubLabel.find('label')[1].innerHTML).toBe('Ike')
    });
});
