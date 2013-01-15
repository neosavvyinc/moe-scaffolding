'use strict'

MOE.Controllers.controller('view.worklists.WorklistController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', 'managers.LocalStorageManager',
        function ($scope, $rootScope, $routeParams, configuration, localStorageManager) {

    $scope.worklist = null;

    //Event Listeners
    $scope.$on(configuration.EVENTS.WORKLIST_SELECTED, function(e, worklist) {
        $scope.worklist = worklist;
    });

}]);