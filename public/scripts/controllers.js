'use strict';

angular.module('profileApp')

.controller('BodyController', ['$scope', '$state', 'panelService', 'profileService', function($scope, $state, panelService, profileService){
	$scope.$state = $state;
	$scope.user = {};
	$scope.currentOrganization = {};
	$scope.panels = panelService.getPanels();

	$scope.user = profileService.getUser();
	var dateSort = function(a, b) {
		if(!a.dateEnd) return -1;
		if(!b.dateEnd) return 1;
		return b.dateEnd - a.dateEnd;
	}
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