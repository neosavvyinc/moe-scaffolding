'use strict'

MOE.Controllers.controller('view.tickets.equity.EquityTicketController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', 'products'
        ,function ($scope, $rootScope, $routeParams, configuration, products) {

        //Initialization
        $scope.submitTicket = function() {
            products = products.get()
            console.log("products are: " + products);
        }

    }]);