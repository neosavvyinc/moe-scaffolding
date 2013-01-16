'use strict';

MOE.Services.factory('services.WorklistService',
    ['configuration', '$q', '$rootScope', '$http',
        function (configuration, $q, $rootScope, $http) {
            return {

                get:function () {
                    var deferred = $q.defer();
                    $http.get(configuration.WORKLISTS_URL).
                        success(function (data, status, headers, config) {
                            deferred.resolve(data);
                        }).
                        error(function (data, status, headers, config) {
                            console.error(data, status, headers, config);
                            deferred.reject(data);
                        });
                    return deferred.promise;
                }
            }
        }]);