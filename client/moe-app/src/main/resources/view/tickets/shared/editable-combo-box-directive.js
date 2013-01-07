'use strict'

MOE.Directives
    .directive('editableComboBox', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"view/tickets/shared/editable-combo-box-template.html",
            scope:{
                items: '=items'
            },
            link:function (scope, element, attrs) {

            },
        }
    });