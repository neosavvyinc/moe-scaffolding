'use strict'

MOE.Controllers.controller('views.worklists.tabs.TabsController', ['$scope', '$rootScope', '$routeParams', 'configuration', 'managers.LocalStorageManager', function ($scope, $rootScope, $routeParams, configuration, localStorageManager) {

    //Get worklists
    $scope.worklists = null;

    //Event Listeners
    $scope.$on(configuration.EVENTS.WORKLISTS_UPDATED, function(e, worklists) {
       $scope.worklists = worklists;
    });

    //Watchers
    $scope.$watch('selectedWorklist', function(newValue) {
        $rootScope.$broadcast(configuration.EVENTS.WORKLIST_SELECTED, newValue);
    });

    //Initialization
    $scope.worklists = localStorageManager.getWorklists();

}]);