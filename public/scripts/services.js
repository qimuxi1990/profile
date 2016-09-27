'use strict';

angular.module('profileApp')
.service('profileService', function(){
	var user = {
		// Basic Fields
		firstname: 'Muxi', // required
		lastname: 'Qi', // required
		avatar: './images/avatar.jpg', // not required
		address: {
			street: '30 Beulah Street Apt 4',
			city: 'Framingham',
			state: 'Massachusetts',
			zipcode: '01701',
			country: 'The United States of America'
		}, // required can empty
		telephones: ['5088263287'], // required can empty
		emails: ['mqi@wpi.edu', 'qimuxi1990@gmail.com'], // required can empty
		// Career Fields
		summary: 'Looking for full ', // required can empty
		experience: [{
			title: 'Application Developer',
			company: 'Diamond Diagnostics Inc.',
			industry: 'Medical Devices',
			dateStart: new Date('2016-08-01'),
			dateEnd: null
		}], // required can empty
		educations: [], // required can empty
		// Additional Career Fields
		projects: [], // not required
		certifications: [], // not required
		skills: [], // not required
		courses: [], // required can empty based on education
		volunteerInterests: [], // not required DISPLAY AS Volenteer
		volunteerExperience: [], // not required DISPLAY AS Volenteer
		volunteerOpportunities: [], // not required DISPLAY AS Volenteer
		organizations: [],
		honorsAwards: [],
		testScore: [],
		patent: [],
		supportedOrganizations: [],
		publications: [],
		post: [],
		// Personal Fields
		languages: [{
			name: 'Chinese',
			level: 'native'
		},{
			name: 'English',
			level: 'intermediate'
		}],
		// Additional Personal Fields
		// additionalInfo (DOB, Marital Status)
		dateOfBirth: new Date('1990-05-26'), // not required
		maritalStatus: 'Single', // not required
		interests: [],
		adviceForContacting: [],

		// Networking Fields
		connections: [],
		groups: [],
		followings: []
	};
	this.getUser = function() {
		return user;
	};
});