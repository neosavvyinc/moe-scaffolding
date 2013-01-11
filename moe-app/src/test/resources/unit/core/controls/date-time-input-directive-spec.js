'use strict';

define(['jquery', 'console', 'angular', 'core/controls/date-time-input-directive',
    function ($, Console, angular, dateTimeInput) {
    var body = $('body');

    describe("Date & Time input directive", function() {
       var scope, $$compile;

        beforeEach(module('dateTimeInput'));

        beforeEach(inject(function($rootScope, $compile) {
            scope = $rootScope.$new();
            $$compile = $compile;

            //Define Everything In Scope For Directive
            scope.date = new Date(1990, 0, 15); // January 15th, 1990
            scope.format = "%B %d, %Y";
        }));

        afterEach(function() {
            body.empty();
        })

    });

}]);