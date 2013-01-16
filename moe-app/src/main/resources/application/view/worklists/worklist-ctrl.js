'use strict'

MOE.Controllers.controller('view.worklists.WorklistController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', 'managers.LocalStorageManager', 'managers.TicketManager',
        function ($scope, $rootScope, $routeParams, configuration, localStorageManager, ticketManager) {

            //Scope Variables
            $scope.worklist = null;

            //Event Listeners
            $scope.$on(configuration.EVENTS.CONTROLLER.WORKLIST_SELECTED, function (e, worklist) {
                $scope.worklist = worklist;
                if (worklist) {
                    ticketManager.setTickets(worklist.tickets);
                }
            });

            //Action Handlers
            $scope.onSaveWorklist = function() {
                localStorageManager.updateWorklist($scope.worklist);
            };

        }]);