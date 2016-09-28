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
		adviceForContacting: '', // not required
		summary: 'I am looking for full time jobs related to the industry of Computer Engineering', // required can empty
		experience: [{
			title: 'Application Developer',
			company: 'Diamond Diagnostics Inc.',
			industry: 'Medical Devices',
			dateStart: new Date('2016-08-01'),
			dateEnd: null
		}], // required can empty
		educations: [{
			degree: "Master of Science",
			major: "Electrical & Computer Engineering",
			organization: "Worcester Polytechnic Institute",
			department: "Electrical & Computer Engineering",
			gpa: 4.0,
			dateStart: new Date('2014-08-28'),
			dateEnd: new Date('2016-05-21')
		}], // required can empty
		// Additional Career Fields
		publications: [], // not required
		projects: [], // not required
		certifications: [], // not required
		skills: [], // not required
		courses: [], // required can empty based on education
		volunteer: {
			interests: [],
			experience: [],
			opportunities: []
		}, // not required
		organizations: [], // not required
		honorsAwards: [], // not required
		testScores: [], // not required
		patents: [], // not required
		supportedOrganizations: [], // not required
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
		_id: "publications",
		name: "Publications",
		image: "./images/avatar.jpg",
		description: "Publications: all kinds, mostly career related"
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
		name: "Skills",
		image: "./images/avatar.jpg",
		description: "Skills: all important skills, mostly career related"
	},{
		_id: "courses",
		name: "Cources",
		image: "./images/avatar.jpg",
		description: "Courses: all important courses, grouped by educations"
	},{
		_id: "volunteer",
		name: "Volenteer",
		image: "./images/avatar.jpg",
		description: "Volenteer: all interests, experience and opportunities on volunteer"
	},{
		_id: "organizations",
		name: "Organizations",
		image: "./images/avatar.jpg",
		description: "Organizations: all kinds"
	},{
		_id: "honorsAwards",
		name: "Honors & Awards",
		image: "./images/avatar.jpg",
		description: "Honors & Awards: all kinds"
	},{
		_id: "testScores",
		name: "Test Scores",
		image: "./images/avatar.jpg",
		description: "Test Scores: all kinds, including language, professional and etc."
	},{
		_id: "patents",
		name: "Patents",
		image: "./images/avatar.jpg",
		description: "Patents: all kinds"
	},{
		_id: "supportedOrganizations",
		name: "Supported Organizations",
		image: "./images/avatar.jpg",
		description: "Supported Organizations: all kinds"
	},{
		_id: "posts",
		name: "Posts",
		image: "./images/avatar.jpg",
		description: "Posts: all important online posts, mostly career related"
	},{
		_id: "languages",
		name: "Languages",
		image: "./images/avatar.jpg",
		description: "Languages: all levels"
	},{
		_id: "additionalInformation",
		name: "Additional Information",
		image: "./images/avatar.jpg",
		description: "Additional Information: additional personal information"
	},{
		_id: "interests",
		name: "Interests",
		image: "./images/avatar.jpg",
		description: "Interests: personal interests"
	},{
		_id: "connections",
		name: "Connections",
		image: "./images/avatar.jpg",
		description: "Connections: people I connect"
	},{
		_id: "groups",
		name: "Groups",
		image: "./images/avatar.jpg",
		description: "Groups: groups I join"
	},{
		_id: "followings",
		name: "Followings",
		image: "./images/avatar.jpg",
		description: "Followings: people I follow"
	}];
	this.getPanels = function(){
		return panels;
	}
});