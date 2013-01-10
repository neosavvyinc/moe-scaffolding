'use strict'

MOE.Directives
    .directive('advancedTextInput', function () {
        var angularValidationTypes = ["text", "number", "url", "email", "radio", "checkbox"];
        var angularValidationDirectives = ["required", "pattern", "minlength", "maxlength", "min", "max"];

        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/validation/advanced-text-input-template.html",
            scope:{
                errorSide:"@",
                model:"=",
                form:"="
            },
            compile:function (tElement, tAttrs, transclude) {
                //Get Input From Template
                var input = tElement[0].getElementsByTagName('input')[0];

                //Set Type If Applies
                var type = tAttrs['inputType'];
                if (type && type != "") {
                    input.setAttribute("type", type);
                }

                var validation = tAttrs['validation'];
                if (validation && validation != "") {
                    var validators = validation.replace(" ", "").split(",");

                    for (var i = 0; i < validators.length; i++) {
                        var validator = validators[i];

                        //Determine if the validator is in key/value format
                        var keyValue = null;
                        if (validator.indexOf("=") != -1) {
                            keyValue = validator.split("=");
                        }

                        //Determine how to add the angular directive
                        if (angularValidationDirectives.indexOf(validator) != -1) {
                            input.setAttribute(validator, true);
                        } else if (keyValue && angularValidationDirectives.indexOf(keyValue[0]) != -1) {
                            input.setAttribute(keyValue[0], keyValue[1]);
                        }
                    }
                }

                return function (scope, iElement, iAttrs) {
                    //Find Input
                    var input = tElement[0].getElementsByTagName('input')[0];
                    var form = input.form;

                    //Initialization
                    scope.errorSide = scope.errorSide || "right";
                };
            }
        }
    });