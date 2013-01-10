'use strict'

MOE.Controllers.controller('view.tickets.equity.EquityTicketController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', 'submitService'
        ,function ($scope, $rootScope, $routeParams, configuration, submitService) {

        //Initialization
        $scope.submitTicket = function() {
            var productPromise = submitService.sendOrder()
            productPromise.then(
                function( orderStatus ) {
                    console.log("order was successfully submitted with immediate status: " + JSON.stringify(orderStatus));
                },
                function(reason) {
                    console.log("order was not successfully submitted: " + reason);
                }
            );
        }

    }]
);