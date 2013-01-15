'use strict';

MOE.Directives
    .directive('topNavbar', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:'core/controls/top-navbar-template.html',
            scope:{
                title: "@title",
                items: "=items",
                labelField: "@labelField",
                routeField: "@routeField"
            },
            link:function (scope, element, attrs) {

            },
        }
    });