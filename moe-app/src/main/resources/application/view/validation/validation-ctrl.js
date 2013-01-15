'use strict';

MOE.Controllers.controller('view.validation.ValidationController',
    ['$scope', '$rootScope', '$routeParams', 'configuration',
        function ($scope, $rootScope, $routeParams, configuration) {

    $scope.requiredValue = "Required";

    $scope.emailValue = "trevor.ewen@morganstanley.com";

    $scope.urlValue = "http://www.morganstanley.com";

    $scope.customClientSideOddNumber = 437;

    $scope.serverSideModel = null;

    $scope.clientAndServerSideModel = null;

    $scope.topErrorMessageModel = "Top";
    $scope.rightErrorMessageModel = "Right";
    $scope.bottomErrorMessageModel = "Bottom";
    $scope.leftErrorMessageModel = "Left";
}]);