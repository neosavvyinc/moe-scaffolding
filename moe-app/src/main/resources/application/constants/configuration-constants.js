/**
 * Defines application-wide key value pairs
 */
MOE.Constants.constant('configuration', {

    PRODUCTS_URL:'mockData/products.json',
    WORKLISTS_URL:'mockData/worklists.json',
    SUBMIT_URL:'mockData/submit.json',
    VALIDATION_URL:'mockData/validation.json',
    VALIDATION_FAILURE_URL:'mockData/validation-failure.json',
    EVENTS:{
        CONTROLLER:{
            WORKLISTS_UPDATED:"worklistsUpdatedCtrl",
            WORKLIST_SELECTED:"worklistSelectedCtrl"
        },
        MANAGER: {
            TICKETS_UPDATED: "ticketsUpdatedMgr"
        }
    }
});