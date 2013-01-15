'use strict';

MOE.Services.factory('services.ValidationService',
    ['configuration','$q','$rootScope','$http',
    function (configuration, $q, $rootScope, $http) {
    return {

        validate:function (fields) {

            var deferred, serviceUrl;

            /*
             * This should be based on isMockMode and after we have
             * real services should be made to depend properly on it
             */
            if ($rootScope.isFailMode) {
                serviceUrl = configuration.VALIDATION_FAILURE_URL;
            } else {
                serviceUrl = configuration.VALIDATION_URL;
            }

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