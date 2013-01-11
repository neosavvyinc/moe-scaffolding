'use strict'

MOE.Directives
    .directive('dropdownWithNotes', function () {
        return {
            restrict:'E',
            replace:true,
            templateUrl:"core/controls/dropdown-with-notes-template.html",
            scope:{
                items:"=",
                selectedItem: "=",
                labelField:"@",
                noteField:"@",
                inputIdValue: "@"
            },
            link:function (scope, element, attrs) {

                //Getters
                scope.getItemLabel = function(item) {
                    if (item && scope.labelField) {
                        return item[scope.labelField];
                    }
                    return item;
                };

                //Action Handlers
                scope.onClickItem = function(item) {
                    scope.selectedItem = item;
                };

                //Watchers
                scope.$watch('selectedItem', function(newValue) {
                    if (newValue) {
                        if (scope.noteField) {
                            scope.note = newValue[scope.noteField];
                        }
                    }
                });

                scope.$watch('note', function(newValue) {
                    if( scope.selectedItem && scope.selectedItem.hasOwnProperty(scope.noteField) )
                    {
                        if (newValue != scope.selectedItem[scope.noteField]) {
                            scope.selectedItem[scope.noteField] = newValue;
                        }
                    }
                });

                scope.note;
            }
        }
    });