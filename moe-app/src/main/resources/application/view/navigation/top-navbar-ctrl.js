'use strict';

MOE.Controllers.controller('view.navigation.TopNavbarController',
    ['$scope', '$rootScope', '$routeParams', 'configuration',
        function ($scope, $rootScope, $routeParams, configuration) {

    //Initialization
    $scope.items = [
        {label: "Equity Ticket", route: "/"}
        , {label: "Validation", route: "#/validation"}
        , {label: "Sambuca Additions", route: "#/sambuca"}
        , {label: "Worklists", route: "#/worklists"}];

}]);