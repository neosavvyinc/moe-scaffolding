'use strict'

MOE.Directives
    .directive('datePicker', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/date-picker-template.html",
            scope:{
                date: "=date"
            },
            link:function (scope, element, attrs) {

                //jQuery
                $(element).datepicker();

                scope.$watch('date', function(newValue) {
                    scope.templateDate = newValue.strftime("%m-%d-%Y");
                });

                //Initialization
                scope.templateDate = null;

            }
        }
    });