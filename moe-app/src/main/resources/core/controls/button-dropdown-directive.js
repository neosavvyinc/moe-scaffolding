'use strict'

MOE.Directives
    .directive('buttonDropdown', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/button-dropdown-template.html",
            scope:{
                items: "=items"
            },
            link:function (scope, element, attrs) {
                //Action Handlers
                scope.onClickItem = function(item) {
                    scope.selectedItem = item;
                };

                scope.$watch('items', function(newValue) {
                    if (newValue && newValue.length) {
                        scope.selectedItem = newValue[0];
                    } else {
                        scope.selectedItem = "No items";
                    }
                });

                //Initialization
                scope.selectedItem = null;
                $(element).find('dropdown-toggle').dropdown();
            },
        }
    });