'use strict';

MOE.Controllers.controller('view.tickets.equity.EquityTicketController',
    ['$scope', 'configuration', 'submitService', 'ticketManager', '$location'
        ,function ($scope, configuration, submitService, ticketManager, $location) {

        $scope.tickets = ticketManager.getTickets();

        $scope.openClass = function( id ) {
            if( id == 1 )
            {
                return "in";
            }
            else
            {
                return "";
            }
        }

        //Initialization
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
        }

        $scope.addTicket = function() {
            ticketManager.addTicket();
        }

    }]
);