MOE.Directives.directive('focusGroup', ['focusManager','$interpolate', function( focusManager, $interpolate ) {
    /**
     * Maybe:
     * https://groups.google.com/forum/?fromgroups=#!topic/angular/suCtNH10M2U
     *
     * http://stackoverflow.com/questions/13965627/angular-ng-click-event-delegation
     */
    return {
        restrict: 'A',
        replace: false,
        scope: false,
        controller: function($scope) {

            $scope.focusGroups = [];


        },
        link:function (scope, element, attrs, controller) {
            var focusGroup = scope.$index;

            console.log("focus group: " + focusGroup);
            console.log("id: " + attrs.id);
            console.log("index: " + scope.$index);



            if( focusManager.hasGroup(focusGroup) ) {
                focusManager.addItemToGroup( focusGroup, element );
            }
            else
            {
                focusManager.addGroup( focusGroup );
                focusManager.addItemToGroup( focusGroup, element );
            }

            var focusListener = function() {
                console.log("focus listener");
                focusManager.setFocusForGroup( focusGroup, element);
            }

            var focusOutListener = function() {
                element.removeClass('focused');
            }

            element.focusin(focusListener);
            element.focusout(focusOutListener);

        }
    }

}]);