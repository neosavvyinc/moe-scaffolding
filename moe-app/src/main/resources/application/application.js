'use strict'

/**
 * The application file bootstraps the angular app by  initializing the main module and
 * creating namespaces and moduled for controllers, filters, services, and directives.
 */

var MOE = MOE || {};
MOE.Workers = MOE.Workers || {};

MOE.Constants = angular.module('moe.constants', []);

/* Worker Definitions */
MOE.Workers.Validation = angular.module('moe.workers.validation', []);

MOE.Services = angular.module('moe.services', []);
MOE.Controllers = angular.module('moe.controllers', []);
MOE.Filters = angular.module('moe.filters', []);
MOE.Directives = angular.module('moe.directives', []);

//Global Accessor For Dependencies
MOE.Dependencies = ['moe.filters', 'moe.services', 'moe.directives', 'moe.constants', 'moe.controllers', 'moe.workers.validation'];

//Application Initialization
angular.module('moe', MOE.Dependencies).
    config(['$routeProvider',
    function ($routeProvider) {

        function getParameterByName(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.search);
            if (results == null) {
                return "";
            }
            else {
                return decodeURIComponent(results[1].replace(/\+/g, " "));
            }
        }

        $routeProvider.
            when('/about', {templateUrl:'about/about-partial.html'}).
            when('/:id/', {templateUrl:'details/details-partial.html'}).
            otherwise({templateUrl:'error/error-partial.html'});
    }]).
    run(['$location', '$rootScope',
    function ($location, $rootScope) {
        $rootScope.isMockMode = $location.search().mock || $location.search().mockMode;
    }]);
