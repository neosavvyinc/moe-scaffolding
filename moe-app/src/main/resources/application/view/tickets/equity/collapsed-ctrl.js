'use strict'

MOE.Controllers.controller('view.tickets.equity.CollapsedController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', 'ticketManager'
        ,function ($scope, $rootScope, $routeParams, configuration, ticketManager) {

    //Initialization
    $scope.financialAdvisorNumbers = [101, 102, "WNUA 95.5"];

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

    $scope.accountInfo = {
        name: "John Doe"
        ,accountType: "Active Assets Account"
        ,number: "101-023148"
    };

    $scope.selectedFA = '';
    $scope.selectedShareValue = '';
    $scope.selectedFirstLast = '';

    $scope.testSelected = function(){
        console.log("fa: " + $scope.selectedFA);
        console.log("shareValue: " + $scope.selectedShareValue);
        console.log("firstLast: " + $scope.selectedFirstLast);
    }

}]);