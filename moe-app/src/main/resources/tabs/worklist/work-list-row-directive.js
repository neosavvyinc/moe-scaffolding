'use strict'

MOE.Directives
    .directive('workListRow', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:'tabs/worklist/work-list-row-template.html',
            scope:{

            },
            link:function (scope, element, attrs) {

            },
        }
    });