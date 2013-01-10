'use strict'

MOE.Controllers.controller('view.tickets.equity.CollapsedController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', 'ticketManager'
        ,function ($scope, $rootScope, $routeParams, configuration, ticketManager) {

    //Initialization
    $scope.financialAdvisorNumbers = [101, 102, 103, 104];
    $scope.buyValues = ["Buy", "Sell", "Sell Short"];
    $scope.shareValues = ["Shares", "Cash", "Something"];
    $scope.firstLastValues = ["FIFO", "LIFO"];
    $scope.cashMarginValues = ['Cash', 'Margin'];
    $scope.solicitedValues = ['Solicited', 'Unsolicited'];
    $scope.stopLimitValues = ["Stop/Limit", "Go/Unlimited"];
    $scope.discountValues = ["Discount", "Regular", "Extra Crispy", "Overpriced"];


    $scope.ticket = ticketManager.getTicket();
}]);