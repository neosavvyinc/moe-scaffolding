'use strict'

/**
 * Defines application-wide key value pairs
 */

MOE.Constants.constant('constants.EquityTicket', {

    PRICE_TYPE_VALUES: ["Market", "Limit", "Stop", "Stop Limit", "Market On Close"],
    COMMISSION_TYPE_VALUES: ["Standard", "Discount", "Cents Per Share", "Gross Amount", "Basis Points"],
    TIME_IN_FORCE_VALUES: ["Day", "GTC", "At the Opening"],
    NEXT_CALL_DATE_VALUES: ["Callable security only", "Display only"],
    DISCRETION_VALUES: ["Exercised", "Not Exercised"]

});