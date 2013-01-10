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
        selectedFirstLast: "def",

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
