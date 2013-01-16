'use strict';

MOE.Controllers.controller('view.tickets.equity.EquityTicketController',
    ['$scope', 'configuration', 'submitService', 'managers.TicketManager', '$location'
        ,function ($scope, configuration, submitService, ticketManager, $location) {

        //Event Listeners
        $scope.$on(configuration.EVENTS.MANAGER.TICKETS_UPDATED, function(e) {
            $scope.tickets = ticketManager.getTickets();
        });

        //Action Handlers
        $scope.submitTicket = function() {
            var productPromise = submitService.sendOrders( ticketManager.getTickets() )
            productPromise.then(
                function( orderStatus ) {
                    console.log("order was successfully submitted with immediate status: " + JSON.stringify(orderStatus));
                    $location.path('review');
                },
                function(reason) {
                    console.log("order was not successfully submitted: " + reason);
                }
            );
        };

        $scope.addTicket = function() {
            ticketManager.addTicket();
        };

        //Getters
        $scope.openClass = function( id ) {
            if( id == 1 )
            {
                return "in";
            }
            else
            {
                return "";
            }
        };

        //Initialization
        $scope.tickets = ticketManager.getTickets();

    }]
);