'use strict'

MOE.Directives
    .directive('labelSubLabel', function () {
        return {
            restrict:'E',
            replace:true,
            template:"<div class='label-sub-label'><label>{{ label }}</label><label>{{ subLabel }}</label></div>",
            scope:{
                label: '@label',
                subLabel: '@subLabel'
            },
            link:function (scope, element, attrs) {

            },
        }
    });