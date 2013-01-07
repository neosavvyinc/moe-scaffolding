'use strict'

MOE.Controllers.controller('view.tickets.equity.DetailController', ['$scope', '$rootScope', '$routeParams', 'configuration', function ($scope, $rootScope, $routeParams, configuration) {

    //Initialization
    $scope.timeInForceValues = ["Day", "Week", "Month"];
    $scope.yesNoValues = ["Yes", "No"];

}]);