'use strict'

MOE.Controllers.controller('view.tickets.equity.CollapsedController',
    ['$scope', '$rootScope', '$routeParams', 'configuration'
        ,function ($scope, $rootScope, $routeParams, configuration) {

    //Initialization
    $scope.financialAdvisorNumbers = [101, 102, "WNUA 95.5"];

    $scope.buyValues = ["Buy", "Sell", "Sell Short"];

    $scope.accountInfo = {
        name: "John Doe"
        ,accountType: "Active Assets Account"
        ,number: "101-023148"
    };

}]);