'use strict'

MOE.Directives
    .directive('editableComboBox', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/editable-combo-box-template.html",
            scope:{
                items:'=items',
                additionalControlClasses: "@additionalControlClasses"
            },
            link:function (scope, element, attrs) {

                scope.$watch('items', function (newValue) {
                    if (newValue && newValue.length) {
                        scope.selectedItem = newValue[0];
                    } else {
                        scope.selectedItem = "No Value Provided";
                    }

                });

                //Initialization
                if (!scope.additionalControlClasses) {
                    scope.additionalControlClasses = "span2";
                }
            },
        }
    });