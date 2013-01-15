'use strict';

MOE.Services.factory('managers.WorklistManager',
    ['configuration', '$q', '$rootScope', '$http',
        function (configuration, $q, $rootScope, $http) {

            var worklists = [];

            return {
                getWorklists: function () {
                    return worklists;
                },
                addWorklist: function (value) {
                    worklists.push(value);
                    return worklists;
                },
                removeWorklist: function(value) {
                    worklists.splice(worklists.indexOf(value), 1);
                    return worklists;
                }
            }

        }]);