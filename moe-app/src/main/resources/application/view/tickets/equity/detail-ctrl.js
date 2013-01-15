'use strict';

MOE.Controllers.controller('view.tickets.equity.DetailController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', "ticketManager",
        function ($scope, $rootScope, $routeParams, configuration, ticketManager) {

            //Initialization
            $scope.timeInForceValues = ["Day", "Week", "Month"];
            $scope.yesNoValues = ["Yes", "No"];
            $scope.timeReceivedValues = ["Now", "Other"];
            $scope.strategyValues = ["Execution Strategies", "Mediation Strategies", "Lunch Strategies"];
            $scope.dateValue = new Date();
            $scope.dateValueDateFormat = new DateAndFormat(new Date(), "%m/%d/%Y");
            $scope.dateValueTimeFormat = new DateAndFormat(new Date(), "%I:%M:%S %p");
            $scope.clientPositionValues = ["Assures Delivery", "Unassured Delivery", "Pizza Delivery"];
            $scope.secondaryClientPositionValues = ["Not sure what goes here"];
            $scope.dispositionValues = [{name: 'Holds Proceeds', note: "Some description"},{name: 'Holds Proceeds', note: "Some description"}];

            $scope.ticket = ticketManager.getTicket();
        }
    ]
);