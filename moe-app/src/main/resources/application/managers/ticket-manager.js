'use strict'

MOE.Services.factory('ticketManager', function (configuration, $q, $rootScope, $http) {

    this.ticket = {
        accountInfo: {
            name: "John Doe",
            accountType: "Active Assets Account",
            number: "101-023148"
        },
        faNumber: "",
        selectedShareValue: "",
        selectedFirstLast: ""
    }

    return {

        getTicket:function () {
            return this.ticket;
        }

    }
});
