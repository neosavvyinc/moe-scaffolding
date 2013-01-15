'use strict';

MOE.Directives
    .directive('oddNumber', function () {
        return {
            require: 'ngModel',
            link:function (scope, element, attrs, ctrl) {
                ctrl.$parsers.unshift(function(viewValue) {
                    try {
                        var valueAsFloat = parseFloat(viewValue);
                        if ((valueAsFloat % 2) != 0) {
                            ctrl.$setValidity('number', true);
                            return viewValue;
                        }
                    } catch (e) {
                        //pass
                    }
                    ctrl.$setValidity('number', false);
                    return undefined
                });
            },
        }
    });