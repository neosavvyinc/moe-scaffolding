'use strict';

MOE.Services.factory('submitService',
    ['configuration','$q','$rootScope','$http',
    function (configuration, $q, $rootScope, $http) {
    return {

        sendOrder:function ( ticket ) {

            var deferred, serviceUrl;

            /*
             * This should be based on isMockMode and after we have
             * real services should be made to depend properly on it
             */
            serviceUrl = configuration.SUBMIT_URL;

            deferred = $q.defer();

            $http.get( serviceUrl ).
                success(function (data, status, headers, config) {

                    var result = data;
                    deferred.resolve(result);

                }).
                error(function (data, status, headers, config) {

                    console.error(data, status, headers, config);
                    deferred.reject(data);

                });

            return deferred.promise;
        }
    }
}]);