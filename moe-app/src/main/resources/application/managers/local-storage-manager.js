'use strict'

MOE.Managers.factory('managers.LocalStorageManager', function (configuration, $q, $rootScope, $http) {

    //Temporarily stubbing value
    window.localStorage.setItem('worklists', JSON.stringify([{name: "Schwan"}, {name: "Doo"}, {name: "Tree"}]));

    return {
        getWorklists: function() {
            return JSON.parse(window.localStorage.getItem("worklists"));
        },
        setWorklists: function(value) {
            window.localStorage.setItem("worklists", JSON.stringify(value));
        }
    }
});
