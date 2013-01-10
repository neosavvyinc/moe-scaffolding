'use strict'

MOE.Services.factory('productService', function (configuration, $q, $rootScope, $http) {
    return {

        /**
         * Retrieves simple products
         * @param {string} id the name of the single menu item to get.
         * @return {Promise} Resolves to JSON array of products.
         */
        get:function (id) {

            var deferred, serviceUrl;

            /*
             * This should be based on isMockMode and after we have
             * real services should be made to depend properly on it
             */
            serviceUrl = configuration.PRODUCTS_URL;

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