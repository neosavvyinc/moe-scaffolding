'use strict'

MOE.Directives
    .directive('searchInput', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"view/tickets/shared/search-input-template.html",
            scope:{
            },
            link:function (scope, element, attrs) {

            },
        }
    });