'use strict';

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
                inputIdValue: "@",
                labelFunction: "&"
            },
            link:function (scope, element, attrs) {
                //Getters
                scope.getItemLabel = function(item) {
                    if (hasLabelFunction) {
                        return scope.labelFunction({item: item});
                    }
                    else if (item && scope.labelField) {
                        return item[scope.labelField];
                    }
                    return item;
                };

                //Action Handlers
                scope.onClickItem = function(item) {
                    scope.selectedItem = item;
                };

                //A solution to deal with Angular's standard closures on passed in functions
                var hasLabelFunction = attrs.labelFunction ? true : false;
            }
        }
    });