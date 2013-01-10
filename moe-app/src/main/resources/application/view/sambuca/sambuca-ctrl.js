'use strict'

MOE.Controllers.controller('view.sambuca.SambucaController',
    ['$scope', '$rootScope', '$routeParams', 'configuration',
        function ($scope, $rootScope, $routeParams, configuration) {
            $scope.buttonDropdownItems = [{label: "Button Dropdown"}, {label: "Chumba Wumba"}];
            $scope.buttonDropdownSelectedItem = $scope.buttonDropdownItems[0];
        }]);