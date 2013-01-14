'use strict'

MOE.Directives
    .directive('editableDropdown', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/editable-dropdown-template.html",
            scope:{
                items:'=items',
                additionalControlClasses:"@additionalControlClasses",
                selectedItem:"=",
                inputIdValue:"@",
                dropdownIdValue:"@"
            },
            link:function (scope, element, attrs) {

                scope.$watch('items', function (newValue) {
                    if (newValue && newValue.length) {
                        scope.selectedItem = newValue[0];
                    } else {
                        scope.selectedItem = "No Value Provided";
                    }
                });

                //Action Handlers
                scope.onClickItem = function (item) {
                    scope.selectedItem = item;
                };

                //Initialization
                if (!scope.additionalControlClasses) {
                    scope.additionalControlClasses = "span2";
                }
            }
        }
    });