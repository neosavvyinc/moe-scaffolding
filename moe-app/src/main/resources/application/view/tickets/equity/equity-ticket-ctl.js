'use strict'

MOE.Controllers.controller('view.tickets.equity.EquityTicketController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', 'products'
        ,function ($scope, $rootScope, $routeParams, configuration, products) {

        //Initialization
        $scope.submitTicket = function() {
            var productPromise = products.get()
            productPromise.then(function( products ) {
                alert('Successfully retrieved products: ' + products );
            }, function(reason) {
                alert('Failed: ' + reason);
            });
        }

    }]);