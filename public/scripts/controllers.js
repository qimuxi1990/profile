'use strict';

angular.module('profileApp')

.controller('HeaderController', ['$scope', function($scope){
	$scope.user = {
		firstname: 'Muxi',
		lastname: 'Qi',
		address: {
			street: '30 Beulah Street Apt 4',
			city: 'Framingham',
			state: 'Massachusetts',
			zipcode: '01701',
			country: 'The United States of America'
		},
		telephones: ['5088263287'],
		emails: ['mqi@wpi.edu', 'qimuxi1990@gmail.com'],
		avatar: './images/avatar.png',
		objective: 'Looking for full ',
		experiences: [{
			title: 'Application Developer',
			company: 'Diamond Diagnostics Inc.',
			industry: 'Medical Devices',
			dateStart: new Date('2016-08-01')
		}],
		educations: [],
		projects: [],
		skills: []
	}
}]);