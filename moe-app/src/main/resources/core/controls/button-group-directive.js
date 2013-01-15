'use strict';

MOE.Directives
    .directive('buttonGroup', function () {
        return {
            restrict:'E',
            replace:true,
            template:"<div class='btn-group'><a class='btn' ng-repeat='item in items' ng-click='onClickItem(item)'>{{ getItemLabel(item) }}</a></div>",
            scope:{
                items: '=',
                labelField: '@',
                selectedItem: '='
            },
            link:function (scope, element, attrs) {
                scope.onClickItem = function(item) {
                    scope.selectedItem = item;
                };

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