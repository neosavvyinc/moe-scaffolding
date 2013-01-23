'use strict';

MOE.Controllers.controller('view.sambuca.SambucaController',
    ['$scope', '$rootScope', '$routeParams', 'configuration',
        function ($scope, $rootScope, $routeParams, configuration) {
            $scope.buttonDropdownItems = [{label: "Button Dropdown"}, {label: "Chumba Wumba"}];
            $scope.buttonDropdownSelectedItem = $scope.buttonDropdownItems[0];

            $scope.buttonGroupItems = ["Button Bar", "Red", "Green", "Blue", "Yellow", "Magenta"];

            $scope.today = new Date();

            $scope.dropdownWithNotesItems = [{name: "Beef", note: "Steak, burgers, stew"}, {name: "Chicken", note: "Wings, Nuggets, Roasted"}, {name: "Pork", note: "Slow Cooked, Fried, Honey Baked"}];
            $scope.dropdownWithNotesSelectedItem = $scope.dropdownWithNotesItems[1];

            $scope.editableDropdownItems = ["Editable Dropdown", "Bootstrap", "Angular"];
            $scope.editableDropdownSelectedItem = $scope.editableDropdownItems[0];

            $scope.inputAndSelectionItems = ["Input & Selection", "Low Cal", "Med Cal", "Beer Batter Fried"];
            $scope.inputAndSelectionSelectedItem = $scope.inputAndSelectionItems[0];
            $scope.inputAndSelectionText = null;

            $scope.searchTerm = null;

            //Watchers
            $scope.$watch('inputAndSelectionText', function(newValue) {
                console.log("Input and selection: " + newValue);
            })
        }]);