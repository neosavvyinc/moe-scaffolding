'use strict'

MOE.Directives
    .directive('advancedTextInput', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/validation/advanced-text-input-template.html",
            scope:{
                value: "=value",
                validation: "@validation"
            },
            link:function (scope, element, attrs) {

            },
        }
    });