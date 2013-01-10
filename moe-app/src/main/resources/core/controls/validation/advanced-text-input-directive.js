'use strict'

MOE.Directives
    .directive('advancedTextInput', function () {
        var angularValidationTypeMap = {
            'angular-text':"text", 'angular-number':"number", 'angular-url':"url", 'angular-email':"email", 'angular-radio':"radio", 'angular-checkbox':"checkbox"
        };

        var angularValidationDirectiveMap = {
            'angular-required':"required", 'angular-pattern':"pattern", 'angular-minlength':"minlength", 'angular-maxlength':"maxlength", 'angular-min':"min", 'angular-max':"max"
        }

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
                    var validators = validation.split(",");

                    for (var i = 0; i < validators.length; i++) {
                        console.log(validators[i]);
                    }


                }

                return function (scope, iElement, iAttrs) {
                    //Find Input
                    var input = tElement[0].getElementsByTagName('input')[0];
                    var form = input.form;


                };
            }
        }
    });