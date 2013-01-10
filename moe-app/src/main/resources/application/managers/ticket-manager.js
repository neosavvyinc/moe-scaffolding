'use strict'

MOE.Services.factory('ticketManager', function (configuration, $q, $rootScope, $http) {
    this.ticket = {
    }

    return {

        getTicket:function () {
            return this.ticket;
        },

        setAccountInfo:function( accountInfo ) {
          this.ticket.accountInfo = accountInfo;
        }
    }
});
