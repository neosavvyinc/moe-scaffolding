'use strict'

MOE.Directives
    .directive('expandedRow', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tabs/worklist/expanded-row-template.html',
            scope:{

            },
            link:function (scope, element, attrs) {

            },
        }
    });