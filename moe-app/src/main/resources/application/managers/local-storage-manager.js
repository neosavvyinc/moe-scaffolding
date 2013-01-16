'use strict'

MOE.Managers.factory('managers.LocalStorageManager',
    ['configuration','$q','$rootScope','$http',
    function (configuration, $q, $rootScope, $http) {

    return {
        getWorklists: function() {
            return JSON.parse(window.localStorage.getItem("worklists"));
        },
        setWorklists: function(value) {
            window.localStorage.setItem("worklists", JSON.stringify(value));
        },
        updateWorklist: function(value) {
            var worklists = JSON.parse(window.localStorage.getItem("worklists"));
            worklists = MOE.Utils.CollectionUtils.update(worklists, value, ["accountInfo", "number"]);
            window.localStorage.setItem("worklists", JSON.stringify(worklists));
        }
    }
}]);
