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
    $scope.stopLimitText = "207.00";
    $scope.stopLimitValues = ["Stop/Limit", "Go/Unlimited"];
    $scope.discountValues = ["Discount", "Regular", "Extra Crispy", "Overpriced"];
    $scope.discountText = "17%";
    $scope.selectedFa = $scope.financialAdvisorNumbers[2];

    /**
     * This needs to move to the ticket manager
     * @type {Object}
     */
//    $scope.accountInfo = {
//        name: "John Doe"
//        ,accountType: "Active Assets Account"
//        ,number: "101-023148"
//    };

    $scope.ticket = ticketManager.getTicket();
}]);