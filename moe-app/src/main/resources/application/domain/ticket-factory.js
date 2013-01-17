'use strict';

MOE.Domain.factory('domain.TicketFactory',
    ['configuration', '$q', '$rootScope', '$http',
        function (configuration, $q, $rootScope, $http) {

            var templateTicket = {

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

            };

            return {
                newTicket: function() {

                    var newObj = JSON.parse(JSON.stringify( templateTicket ));
                    return newObj;

                },
                cloneTicket: function( sourceTicket ) {

                    var clone = JSON.parse(JSON.stringify( sourceTicket ));
                    return clone;

                }
            }
        }
    ]
);