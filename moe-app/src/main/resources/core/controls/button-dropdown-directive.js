'use strict'

MOE.Directives
    .directive('buttonDropdown', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/button-dropdown-template.html",
            scope:{
                items: "=items",
                selectedItem: "=selectedItem",
                labelField: "@labelField"
            },
            link:function (scope, element, attrs) {
                //Action Handlers
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

                //Watchers
                scope.$watch('selectedItem', function(newValue) {
                   scope.selectedItemDisplay = scope.getItemLabel(newValue);
                });

                //Initialization
                $(element).find('dropdown-toggle').dropdown();
            }
        }
    });