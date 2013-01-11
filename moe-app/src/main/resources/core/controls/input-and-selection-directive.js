'use strict'

MOE.Directives
    .directive('inputAndSelection', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/input-and-selection-template.html",
            scope:{
                text: "=",
                items: "=",
                selectedItem: "=",
                labelField: "@",
                placeholder: "@",
                inputIdValue: "@"
            },
            link:function (scope, element, attrs) {
                //Getters
                scope.getItemLabel = function(item) {
                    if (item && scope.labelField) {
                        return item[scope.labelField];
                    }
                    return item;
                };

                //Action Handlers
                scope.onClickItem = function(item) {
                    scope.selectedItem = item;
                };
            }
        }
    });