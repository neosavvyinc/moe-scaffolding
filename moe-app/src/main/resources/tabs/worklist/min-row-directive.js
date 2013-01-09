'use strict'

MOE.Directives
    .directive('minRow', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tabs/worklist/min-row-template.html',
            scope:{

            },
            link:function (scope, element, attrs) {

            },
        }
    });