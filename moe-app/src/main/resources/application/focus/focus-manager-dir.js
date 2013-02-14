MOE.Directives
    .directive('focusGroupManager', function( focusManager ) {

    return {
        restrict: 'EA',
        replace: false,
        scope: false,
        link:function (scope, element, attrs) {

            var keyListener = function(){


                var managedGroup = scope.$index;


                var code;
                var isShift = event.shiftKey ? true : false;

                if (event.which) {
                    code = event.which;
                }

                if( focusManager.isGroupActive(managedGroup) )
                {
                    if( code == 37 ) {//&& isShift ) {
                        focusManager.reverseFocus(managedGroup);
                        event.preventDefault();
                    }
                    else if( code == 39 ) {
                        focusManager.forwardFocus(managedGroup);
                        event.preventDefault();
                    }
                    else if( code == 40 ) {
                        //down arrow
                        focusManager.activateNextGroup();
                    }
                    else if ( code == 38 ) {
                        //up arrow
                        focusManager.activatePreviousGroup();
                    }
                }

                if( code == 39 || code == 40 || code == 38 || code == 37) {
                    event.preventDefault();
                }

            }

            $(document).keydown(keyListener);


        }
    }

});