'use strict';

MOE.Directives
    .directive('searchInput', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/search-input-template.html",
            scope:{
                searchTerm: "=",
                placeholder: "@",
                inputIdValue: "@"
            },
            link:function (scope, element, attrs) {

            }
        }
    });