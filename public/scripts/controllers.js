'use strict';

angular.module('profileApp')

.controller('BodyController', ['$scope', 'profileService', function($scope, profileService){
	$scope.user = {};
	$scope.currentOrganization = {};

	$scope.user = profileService.getUser();
	var dateSort = function(a, b) {
		if(!a.dateEnd) return -1;
		if(!b.dateEnd) return 1;
		return b.dateEnd - a.dateEnd;
	}
	console.log($scope.user.experience);
	var experience = $scope.user.experience.sort(dateSort);
	var educations = $scope.user.educations.sort(dateSort);
	if(experience.length===0 || experience[0].dateEnd) {
		$scope.currentOrganization = {
			title: educations[0].degree,
			organization: educations[0].university,
			industry: educations[0].major
		};
	}
	else {
		$scope.currentOrganization = {
			title: experience[0].title,
			organization: experience[0].company,
			industry: experience[0].industry
		};
	}
}]);