'use strict'

MOE.Controllers.controller('menu', ['menu', '$scope', function(menu, $scope){
	
	$scope.items = menu.get();
	
}]);