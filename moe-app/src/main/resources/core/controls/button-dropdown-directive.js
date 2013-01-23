'use strict';

MOE.Directives
    .directive('buttonDropdown', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/button-dropdown-template.html",
            scope:{
                items: "=",
                selectedItem: "=",
                labelField: "@",
                labelFunction: "&"
            },
            link:function (scope, element, attrs) {
                //Action Handlers
                scope.onClickItem = function(item) {
                    scope.selectedItem = item;
                };

                //Getters
                scope.getItemLabel = function(item) {
                    if (hasLabelFunction) {
                        return scope.labelFunction({item: item});
                    }
                    else if (item && scope.labelField) {
                        return item[scope.labelField];
                    }
                    return item;
                };

                //Initialization
                $(element).find('dropdown-toggle').dropdown();

                //Get id from parent
                scope.parentId = attrs.id;

                //Deals with an issue of the function closure given from Angular
                var hasLabelFunction = attrs.labelFunction ? true : false;
            }
        }
    });