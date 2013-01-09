'use strict'

MOE.Controllers.controller('view.tickets.equity.CollapsedController',
    ['$scope', '$rootScope', '$routeParams', 'configuration'
        ,function ($scope, $rootScope, $routeParams, configuration) {

    //Initialization

    $scope.accountInfo = {
        name: "John Doe"
        ,accountType: "Active Assets Account"
        ,number: "101-023148"
    };

}]);