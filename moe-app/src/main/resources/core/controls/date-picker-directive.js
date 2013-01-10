'use strict'

MOE.Directives
    .directive('datePicker', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/date-picker-template.html",
            scope:{
                date:"=date",
                format:"@format"
            },
            link:function (scope, element, attrs) {

                //jQuery
                $(element).datepicker().on('changeDate', function (e) {
                    scope.templateDate = e.date.strftime(scope.format || "%m-%d-%Y")
                });

                scope.$watch('date', function (newValue) {
                    scope.templateDate = newValue.strftime(scope.format || "%m-%d-%Y");
                });

                //Initialization
                scope.templateDate = null;

            }
        }
    });