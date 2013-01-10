'use strict'

MOE.Directives
    .directive('advancedTextInput', ['services.ValidationService', function (validationService) {
    var angularValidationTypes = ["text", "number", "url", "email", "radio", "checkbox"];
    var angularValidationDirectives = ["required", "pattern", "minlength", "maxlength", "min", "max"];

    return {
        restrict:'E',
        replace:true,
        templateUrl:"core/controls/validation/advanced-text-input-template.html",
        scope:{
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
                    if (keyValue) {
                        input.setAttribute(keyValue[0], keyValue[1]);
                    } else {
                        input.setAttribute(validator, true);
                    }
                }
            }

            //Re-configure UI for error message placement
            var errorSide = tAttrs['errorSide'];
            if (errorSide && errorSide != "") {
                if (errorSide.toLowerCase() == "top" || errorSide.toLowerCase() == "left") {
                    tElement[0].appendChild(tElement[0].removeChild(input));
                }
            }

            return function (scope, iElement, iAttrs) {
                //Determines if remote validation is enabled
                var remoteValidation = (validation && validation.indexOf('remote') != -1);

                //Handlers
                var handleRemoteValidation = function (result) {
                    if (result && !result.valid) {
                        scope.message = result.message;
                    }
                };

                //Watchers
                if (remoteValidation) {
                    scope.$watch('model', function (newValue) {
                        if (newValue) {
                            validationService.validate(newValue).
                                then(handleRemoteValidation);
                        } else {
                            scope.message = null;
                        }
                    });
                }

                //Initialization
                scope.errorSide = iAttrs.errorSide || "bottom";
                scope.message = iAttrs.message;
                scope.placeholder = iAttrs.placeholder;
            };
        }
    }
}]);