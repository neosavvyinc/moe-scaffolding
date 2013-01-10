'use strict'

MOE.Controllers.controller('view.tickets.equity.EquityTicketController',
    ['$scope', 'configuration', 'submitService', 'ticketManager', '$location'
        ,function ($scope, configuration, submitService, ticketManager, $location) {

        //Initialization
        $scope.submitTicket = function() {
            var productPromise = submitService.sendOrder( ticketManager.getTicket() )
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

    }]
);