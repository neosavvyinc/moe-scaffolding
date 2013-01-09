'use strict'

MOE.Directives
    .directive('buttonGroup', function () {
        return {
            restrict:'E',
            replace:true,
            template:"<div class='btn-group'><button class='btn' ng-repeat='item in items'>{{ item }}</button></div>",
            scope:{
                items: '=items'
            },
            link:function (scope, element, attrs) {

            }
        }
    });