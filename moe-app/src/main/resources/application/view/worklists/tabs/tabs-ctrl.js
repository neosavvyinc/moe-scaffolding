'use strict'

MOE.Controllers.controller('views.worklists.tabs.TabsController', ['$scope', '$rootScope', 'configuration', 'managers.LocalStorageManager', 'managers.TicketManager', 'services.WorklistService',
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
            $rootScope.$broadcast(configuration.EVENTS.CONTROLLER.WORKLIST_SELECTED, newValue);
        });

        //Initialization
        $scope.worklists = localStorageManager.getWorklists();

        //If local storage fails, get it from the service
        if (!$scope.worklists || !$scope.worklists.length) {
            worklistService.get().then(function (result) {
                $scope.worklists = result;
                $scope.selectedWorklist = result[0];
                localStorageManager.setWorklists($scope.worklists);
            });
        } else {
            $scope.selectedWorklist = $scope.worklists[0];
        }
    }]);