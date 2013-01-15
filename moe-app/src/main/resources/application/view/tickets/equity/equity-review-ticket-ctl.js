'use strict';

MOE.Controllers.controller('view.tickets.equity.EquityReviewTicketController',
    ['$scope', 'ticketManager'
        ,function ($scope, ticketManager) {

        $scope.tickets = ticketManager.getTickets();

        $scope.testSelected = function(){
            console.log("fa: " + $scope.ticket.faNumber);
            console.log("shareValue: " + $scope.ticket.selectedShareValue);
            console.log("firstLast: " + $scope.ticket.selectedFirstLast);
            console.log("timeInForce: " + $scope.ticket.selectedTimeInForce);
            console.log("clientPosition: " + $scope.ticket.selectedClientPosition);
            console.log("secondarySelectedClientPosition: " + $scope.ticket.secondarySelectedClientPosition);
        }

    }]
);