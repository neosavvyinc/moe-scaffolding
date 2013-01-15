'use strict'

MOE.Controllers.controller('views.worklists.tabs.TabsController', ['$scope', '$rootScope', '$routeParams', 'configuration', 'managers.LocalStorageManager', 'ticketManager', function ($scope, $rootScope, $routeParams, configuration, localStorageManager, ticketManager) {

    //Initialization
    //$scope.worklists = localStorageManager.getWorklists();
    $scope.worklists = ticketManager.getTickets();
    $scope.selectedWorklist = $scope.worklists[0];

    //Getters
    $scope.getTicketLabel = function (ticket) {
        if (ticket) {
            return ticket['accountInfo']['name'] + " - " + ticket['accountInfo']['number'];
        }
        return null;
    }

    //Watchers
    $scope.$watch('selectedWorklist', function (newValue) {
        $rootScope.$broadcast(configuration.EVENTS.WORKLIST_SELECTED, newValue);
    });

}]);