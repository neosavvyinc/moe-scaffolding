'use strict';

MOE.Controllers.controller('view.tickets.equity.CollapsedController',
    ['$scope', '$rootScope', '$routeParams', 'configuration', 'ticketManager', 'constants.EquityTicket',
        function ($scope, $rootScope, $routeParams, configuration, ticketManager, equityTicketConstants) {

            //Initialization
            $scope.financialAdvisorNumbers = [101, 102, 103, 104];
            $scope.buyValues = equityTicketConstants.BUY_TYPE_VALUES;
            $scope.shareValues = ["Shares", "Cash", "Something"];
            $scope.firstLastValues = ["FIFO", "LIFO"];
            $scope.cashMarginValues = equityTicketConstants.FUNDS_TYPE;
            $scope.solicitedValues = ['Solicited', 'Unsolicited'];
            $scope.stopLimitValues = equityTicketConstants.PRICE_TYPE_VALUES;
            $scope.discountValues = equityTicketConstants.COMMISSION_TYPE_VALUES;

        }]);