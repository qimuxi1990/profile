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
		organizations: [], // not required
		honorsAwards: [], // not required
		testScores: [], // not required
		patents: [], // not required
		supportedOrganizations: [], // not required
		publications: [], // not required
		posts: [], // not required
		// Personal Fields
		languages: [{
			name: 'Chinese',
			level: 'native'
		},{
			name: 'English',
			level: 'intermediate'
		}], // required
		// Additional Personal Fields
		// additionalInfo (DOB, Marital Status)
		additionalInformation: {
			dateOfBirth: new Date('1990-05-26'), // not required
			maritalStatus: 'Single', // not required
		},
		interests: [], // not required
		adviceForContacting: '', // not required

		// Networking Fields
		connections: [], // required can empty
		groups: [], // not required
		followings: [] // not required
	};
	this.getUser = function() {
		return user;
	};
})

.service('panelService', function(){
	var panels = [{
		_id: "experience",
		name: "Experience",
		image: "./images/avatar.jpg",
		description: "Working experience: internship, co-op, part time and full time jobs"
	},{
		_id: "educations",
		name: "Educations",
		image: "./images/avatar.jpg",
		description: "Education history: post high school educations"
	},{
		_id: "projects",
		name: "Projects",
		image: "./images/avatar.jpg",
		description: "Projects: group and independent"
	},{
		_id: "certifications",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "skills",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "courses",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "volunteerInterests",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "volunteerExperience",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "volunteerOpportunities",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "organizations",
		name: "honorsAwards",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "honorsAwards",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "testScores",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "patents",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "supportedOrganizations",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "publications",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "posts",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "languages",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "additionalInformation",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "interests",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "connections",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "groups",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	},{
		_id: "followings",
		name: "Certifications",
		image: "./images/avatar.jpg",
		description: "Certifications: all levels"
	}];
	this.getPanels = function(){
		return panels;
	}
});