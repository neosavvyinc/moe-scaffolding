'use strict';

MOE.Services.factory('service.WorklistService',
    ['configuration', '$q', '$rootScope', '$http',
        function (configuration, $q, $rootScope, $http) {
            return {

                get:function (param) {

                    var deferred, serviceUrl;

                    deferred = $q.defer();

                    $http.get(serviceUrl).
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