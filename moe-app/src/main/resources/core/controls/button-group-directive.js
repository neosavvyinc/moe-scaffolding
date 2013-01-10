'use strict'

MOE.Directives
    .directive('buttonGroup', function () {
        return {
            restrict:'E',
            replace:true,
            template:"<div class='btn-group'><button class='btn' ng-click='onClickItem(item)' ng-repeat='item in items'>{{ getItemLabel(item) }}</button></div>",
            scope:{
                items: '=items',
                labelField: '@labelField',
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