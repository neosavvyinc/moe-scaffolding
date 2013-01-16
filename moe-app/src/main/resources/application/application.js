'use strict';

/**
 * The application file bootstraps the angular app by  initializing the main module and
 * creating namespaces and moduled for controllers, filters, services, and directives.
 */

var MOE = MOE || {};

MOE.Constants = angular.module('moe.constants', []);
MOE.Workers = angular.module('moe.workers', []);
MOE.Managers = angular.module('moe.managers', []);
MOE.Services = angular.module('moe.services', []);
MOE.Controllers = angular.module('moe.controllers', []);
MOE.Filters = angular.module('moe.filters', []);
MOE.Directives = angular.module('moe.directives', []);

//Global Accessor For Dependencies
MOE.Dependencies = ['moe.filters', 'moe.services', 'moe.directives', 'moe.constants', 'moe.controllers', 'moe.workers', 'moe.managers'];

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
        $locationProvider.html5Mode(false);

        //Init Routes
        $routeProvider.
            when('/ticket', {templateUrl:'application/view/tickets/equity/equity-ticket-ptl.html'}).
            when('/review', {templateUrl:'application/view/tickets/equity/equity-review-ticket-ptl.html'}).
            when('/validation', {templateUrl:'application/view/validation/validation-ptl.html'}).
            when('/sambuca', {templateUrl:'application/view/sambuca/sambuca-ptl.html'}).
            when('/worklists', {templateUrl:'application/view/worklists/worklist-ptl.html'}).
            otherwise({templateUrl:'application/view/tickets/equity/equity-ticket-ptl.html'});
    }]).
    run(['$location', '$rootScope', '$routeParams',
    function ($location, $rootScope, $routeParams) {
        $rootScope.isMockMode = ($location.search().mock === 'true') || ($location.search().mockMode === 'true');
        $rootScope.isFailMode = ($location.search().fail === 'true') || ($location.search().failMode === 'true');

        if ($location.search().clearLocalStorage === 'true') {
            window.localStorage.removeAll();
        }
    }]);
