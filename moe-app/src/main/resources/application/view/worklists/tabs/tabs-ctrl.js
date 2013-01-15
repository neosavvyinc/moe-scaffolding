'use strict'

MOE.Controllers.controller('views.worklists.tabs.TabsController', ['$scope', '$rootScope', '$routeParams', 'configuration', 'managers.LocalStorageManager', function ($scope, $rootScope, $routeParams, configuration, localStorageManager) {

    //Watchers
    $scope.$watch('selectedWorklist', function(newValue) {
        $rootScope.$broadcast(configuration.EVENTS.WORKLIST_SELECTED, newValue);
    });

    //Initialization
    $scope.worklists = localStorageManager.getWorklists();

}]);