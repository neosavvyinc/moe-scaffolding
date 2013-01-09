'use strict'

MOE.Directives
    .directive('dateTimeInput', function () {
        return {
            restrict:'E',
            replace:true,
            template:'<div class="input"><input class="span2" type="text" ng-model="dateString"></div>',
            scope:{
                date: "=date",
                format: "@format"
            },
            link:function (scope, element, attrs) {

                scope.$watch('date', function(newValue) {
                    if (newValue) {
                        scope.dateString = newValue.strftime(scope.format);
                    }
                    return null;
                });

                //Initialization
                scope.dateString = null;
            }
        }
    });