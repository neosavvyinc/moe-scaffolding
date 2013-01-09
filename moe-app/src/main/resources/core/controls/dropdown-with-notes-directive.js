'use strict'

MOE.Directives
    .directive('dropdownWithNotes', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/dropdown-with-notes-template.html",
            scope:{
                items:"=items",
                note:"=note"
            },
            link:function (scope, element, attrs) {

                scope.$watch('items', function (newValue) {
                    if (newValue && newValue.length) {
                        scope.selectedItem = newValue[0];
                    } else {
                        scope.selectedItem = "No Value Provided";
                    }

                });

                scope.onClickItem = function(item) {
                    scope.selectedItem = item;
                };

            }
        }
    });