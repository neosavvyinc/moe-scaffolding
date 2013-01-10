'use strict'

MOE.Directives
    .directive('buttonGroup', function () {
        return {
            restrict:'E',
            replace:true,
            template:"<div class='btn-group'><button class='btn' ng-repeat='item in items'>{{ getItemLabel(item) }}</button></div>",
            scope:{
                items: '=items',
                labelField: '@labelField'
            },
            link:function (scope, element, attrs) {
                //Getters
                scope.getItemLabel = function(item) {
                    if (item && scope.labelField) {
                        return item[scope.labelField];
                    }
                    return item;
                };
            }
        }
    });