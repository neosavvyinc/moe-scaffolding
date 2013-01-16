'use strict'

MOE.Controllers.controller('views.worklists.tabs.TabsController', ['$scope', '$rootScope', 'configuration', 'managers.LocalStorageManager', 'ticketManager', 'services.WorklistService',
    function ($scope, $rootScope, configuration, localStorageManager, ticketManager, worklistService) {

        //Initialization
        //$scope.worklists = localStorageManager.getWorklists();
        $scope.worklists = null;
        $scope.selectedWorklist = null;

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

        //Initialization
        worklistService.get().then(function(result) {
            $scope.worklists = result;
            $scope.selectedWorklist = result[0];
        });


    }]);