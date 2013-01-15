'use strict';

MOE.Services.factory('ticketManager',
    ['configuration', '$q', '$rootScope', '$http',
        function (configuration, $q, $rootScope, $http) {

            var templateTicket = {

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

            var tickets = [
                {

                    accountInfo:{
                        name:"John Doe",
                        accountType:"Active Assets Account",
                        number:"101-023148"
                    },

                    /**
                     * Primary
                     */
                    faNumber:"def",
                    symbol:"IBM",
                    side:'Buy',
                    selectedShareValue:"def",
                    stopLimit:"Stop/Limit",
                    stopLimitAmount:"109.00",
                    cashMargin:"Cash",
                    selectedFirstLast:"def",
                    solicited:"Solicited",
                    discountText:"Discount",
                    discountAmount:"50%",


                    /**
                     * Details
                     */
                    selectedTimeInForce:'def',
                    selectedClientPosition:'def',
                    secondarySelectedClientPosition:'def',
                    selectedDisposition:'def'

                },
                {
                    accountInfo:{
                        name:"Jane Doe",
                        accountType:"Index, Hedged Account",
                        number:"138-787891"
                    },

                    /**
                     * Primary
                     */
                    faNumber:"def",
                    symbol:"AAPL",
                    side:'Buy',
                    selectedShareValue:"def",
                    stopLimit:"Stop/Limit",
                    stopLimitAmount:"109.00",
                    cashMargin:"Cash",
                    selectedFirstLast:"def",
                    solicited:"Solicited",
                    discountText:"Discount",
                    discountAmount:"50%",


                    /**
                     * Details
                     */
                    selectedTimeInForce:'def',
                    selectedClientPosition:'def',
                    secondarySelectedClientPosition:'def',
                    selectedDisposition:'def'

                },
                {

                    accountInfo:{
                        name:"Dove Doe",
                        accountType:"Passive Assets Account",
                        number:"246-987146"
                    },

                    /**
                     * Primary
                     */
                    faNumber:"def",
                    symbol:"GOOG",
                    side:'Buy',
                    selectedShareValue:"def",
                    stopLimit:"Stop/Limit",
                    stopLimitAmount:"109.00",
                    cashMargin:"Cash",
                    selectedFirstLast:"def",
                    solicited:"Solicited",
                    discountText:"Discount",
                    discountAmount:"50%",


                    /**
                     * Details
                     */
                    selectedTimeInForce:'def',
                    selectedClientPosition:'def',
                    secondarySelectedClientPosition:'def',
                    selectedDisposition:'def'

                }
            ];

            return {

                getTickets:function () {
                    return tickets;
                },
                addTicket:function () {
                    tickets[tickets.length] = templateTicket;
                }


            }
        }]);

