'use strict'

MOE.Services.factory('submitService', function (configuration, $q, $rootScope, $http) {
    return {

        sendOrder:function (id) {

            var deferred, serviceUrl;

            /*
             * This should be based on isMockMode and after we have
             * real services should be made to depend properly on it
             */
            serviceUrl = configuration.SUBMIT_URL;



            deferred = $q.defer();

            $http.get( serviceUrl ).
                success(function (data, status, headers, config) {

                    var result;

                    if (id) {

                        angular.forEach(data, function (obj, index) {
                            if (obj.id === id) {
                                result = obj;
                            }
                        });

                    } else {
                        result = data;
                    }

                    deferred.resolve(result);

                }).
                error(function (data, status, headers, config) {

                    console.error(data, status, headers, config);
                    deferred.reject(data);


                });

            return deferred.promise;
        }
    }
});