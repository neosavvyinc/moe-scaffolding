'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and moduled for controllers, filters, services, and directives. 
*/

var MOE = MOE || {};

MOE.Constants = angular.module('moe.constants', []);
MOE.Services = angular.module('moe.services', []);
MOE.Controllers = angular.module('moe.controllers', []);
MOE.Filters = angular.module('moe.filters', []);
MOE.Directives = angular.module('moe.directives', []);


angular.module('moe', ['moe.filters', 'moe.services', 'moe.directives', 'moe.constants', 'moe.controllers']).
  config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
      when('/about', {templateUrl: 'about/about-partial.html'}).
      when('/:id/', {templateUrl: 'details/details-partial.html'}).
      otherwise({templateUrl: 'error/error-partial.html'});
  }]);
