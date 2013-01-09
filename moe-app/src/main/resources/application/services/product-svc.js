'use strict'

MOE.Services.factory('products', function (configuration, $q, $rootScope, $http) {
    return {

        /**
         * Retrieves simple products
         * @param {string} id the name of the single menu item to get.
         * @return {Promise} Resolves to JSON array of products.
         */
        get:function (id) {

            var products, deferred, serviceUrl;

            if( $rootScope.isMockMode )
            {
                serviceUrl = configuration.PRODUCTS_URL
            }
            else
            {
                serviceUrl = "http://some/prod/url";
            }


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