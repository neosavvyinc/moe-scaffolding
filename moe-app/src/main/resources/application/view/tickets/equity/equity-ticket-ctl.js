'use strict'

MOE.Controllers.controller('view.tickets.equity.EquityTicketController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', 'something'
        ,function ($scope, $rootScope, $routeParams, configuration, something) {

        //Initialization
        $scope.submitTicket = function() {
            var productPromise = something.get()
            productPromise.then(function( products ) {
            }, function(reason) {
            });
        }

    }]);