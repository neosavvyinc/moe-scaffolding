ddescribe('The non-jquery date formatter filter in MOE.Filters', function () {
    'use strict';

    var runTest = ' ',
        input = new Date(),
        inputFormat = '%I:%M:%S %p',
        prettyDate = 'Sep 1, 2011',
        testDateFormatter;

//    beforeEach(module('go'));

    beforeEach(inject (function ($filter) {
        testDateFormatter = $filter('toDateFormat');
    }));

    iit('converts the raw date string "' + input + '" to a localized date with the specified format: ' +
        inputFormat + '.', function () {

        console.log("prettyDate: " + prettyDate);
        console.log("testDateFormatter(format, text)" + testDateFormatter(input, inputFormat) );

        expect(testDateFormatter(input, inputFormat)).toEqual(prettyDate);
    });

    it('returns undefined when format is not set', function() {
        expect(testDateFormatter("inputValueInvalid", null)).toEqual(undefined);
    });

    it('returns undefined when format and text is not set', function() {
        expect(testDateFormatter(null, null)).toEqual(undefined);
    });

    it('returns undefined when text is not set', function() {
        expect(testDateFormatter(null, inputFormat)).toEqual(undefined);
    });
});
