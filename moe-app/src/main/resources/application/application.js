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

/* Manager Definitions */
MOE.Managers = angular.module('moe.managers', []);

MOE.Services = angular.module('moe.services', []);
MOE.Controllers = angular.module('moe.controllers', []);
MOE.Filters = angular.module('moe.filters', []);
MOE.Directives = angular.module('moe.directives', []);

//Global Accessor For Dependencies
MOE.Dependencies = ['moe.filters', 'moe.services', 'moe.directives', 'moe.constants', 'moe.controllers', 'moe.workers.validation'];

//Application Initialization
angular.module('moe', MOE.Dependencies).
    config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {

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

        //HTML 5 Push States Enabled
        $locationProvider.html5Mode(true);

        //Init Routes
        $routeProvider.
            when('/ticket', {templateUrl:'application/view/tickets/equity/equity-ticket-ptl.html'}).
            when('/validation', {templateUrl:'application/view/validation/validation-ptl.html'}).
            when('/sambuca', {templateUrl:'application/view/sambuca/sambuca-ptl.html'}).
            otherwise({templateUrl:'application/view/tickets/equity/equity-ticket-ptl.html'});
    }]).
    run(['$location', '$rootScope',
    function ($location, $rootScope) {
        $rootScope.isMockMode = $location.search().mock || $location.search().mockMode;

        console.log("moe.run() isMockMode=" + $rootScope.isMockMode);
    }]);
