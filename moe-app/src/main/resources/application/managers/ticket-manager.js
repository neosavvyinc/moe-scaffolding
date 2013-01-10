'use strict'

MOE.Services.factory('ticketManager', function (configuration, $q, $rootScope, $http) {

    var ticket = {

        accountInfo: {
            name: "John Doe",
            accountType: "Active Assets Account",
            number: "101-023148"
        },

        /**
         * Primary
         */
        faNumber: "def",
        symbol: "IBM",
        side: 'Buy',
        selectedShareValue: "def",
        stopLimit: "Stop/Limit",
        stopLimitAmount: "109.00",
        cashMargin: "Cash",
        selectedFirstLast: "def",
        solicited: "Solicited",
        discountText: "Discount",
        discountAmount: "50%",


        /**
         * Details
         */
        selectedTimeInForce: 'def',
        selectedClientPosition: 'def',
        secondarySelectedClientPosition: 'def',
        selectedDisposition: 'def'

    };

    return {

        getTicket:function () {
            return ticket;
        }

    }
});
