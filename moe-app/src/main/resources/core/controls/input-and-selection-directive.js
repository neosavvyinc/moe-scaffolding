'use strict'

MOE.Directives
    .directive('inputAndSelection', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/input-and-selection-template.html",
            scope:{
                text: "=text",
                items: "=items"
            },
            link:function (scope, element, attrs) {

                //Action Handlers
                scope.onClickItem = function(item) {
                    scope.selectedItem = item;
                };

                //Watchers
                scope.$watch('items', function(newValue) {
                    if (newValue && newValue.length) {
                        scope.selectedItem = newValue[0];
                    } else {
                        scope.selectedItem = "No items";
                    }
                });
            },
        }
    });