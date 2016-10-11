'use strict';

angular.module('profileApp')

.controller('BodyController', ['$scope', '$state', 'profileService', function($scope, $state, profileService){
	$scope.$state = $state;
	$scope.user = {};
	$scope.currentOrganization = {};

	$scope.user = profileService.getUser();
    
    $scope.nameArray = function(currentValue, index, array){
        return currentValue.name;
    };

}]);