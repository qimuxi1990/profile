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
		contact: [{
			category: 'mobile',
			value: '5088263287'
		},{
			category: 'email',
			subCat: 'work',
			value: 'mqi@wpi.edu',
			primary: true
		},{
			category: 'email',
			subCat: 'personal',
			value: 'qimuxi1990@gmail.com'
		},{
			category: 'website',
			subCat: 'Linkedin',
			value: 'https://linkedin.com/in/qimuxi1990'
		},{
			category: 'website',
			subCat: 'Github',
			value: 'https://github.com/qimuxi1990'
		}], // required not empty
		// Career Fields
		/*adviceForContacting: '', // not required*/
		summary: 'I am looking for full time jobs related to the industry of Computer Engineering', // required can empty
		position: 'Application Developer at Diamond Diagnostics', // required not empty
		experience: [{
			title: 'Engineering Intern',
			description: '<u>Content:</u> Contribute to Radar scanning control and display interfaces using MFC. Test handle and scanning display with non-real time data from database.',
			company: 'Beijing Lein Electronic Technology Co., LTD',
			address: '1 Haiying ST, Kexuecheng, Fengtai District, Beijing, Beijing, China',
			logo: './images/logo-default.png',
			industry: 'Electronics',
			dateStart: new Date('2016-07-01'),
			dateEnd: new Date('2016-08-01')
		},{
			title: 'Application Developer',
			description: '<u>Objective</u>: Perform Software/Program Development, Application Customization, Database/Reporting Development/Management, with tools like Mongo-Express-Angular-NodeJS, and SQL Server Reporting Services. Also complete any professional task or job function asked by the company.<br /><u>Content:</u> Full-Stack App Development based on Mongo-Express-Angular-NodeJS and ElasticSearch, Reporting Development based on SQL Server Reporting Services and also Visual Studio Tools for Office.',
			company: 'Diamond Diagnostics Inc.',
			address: '333 Fiske ST, Hollistion, MA 01701',
			logo: './images/logo-default.png',
			industry: 'Medical Devices',
			dateStart: new Date('2016-08-01'),
			dateEnd: null
		}], // required can empty
		educations: [{
			degree: 'Bachelor of Engineering',
			major: 'Electrics Technology and Information Science',
			organization: 'Tsinghua University',
			logo: './images/logo-tsinghuauniversity.png',
			department: 'Electronics Engineering',
			gpa: 3.0,
			dateStart: new Date('2009-09-01'),
			dateEnd: new Date('2014-07-14')
		},{
			degree: 'Master of Science',
			major: 'Electrical & Computer Engineering',
			organization: 'Worcester Polytechnic Institute',
			logo: './images/logo-worcesterpolytechnicinstitute.png',
			department: 'Electrical & Computer Engineering',
			gpa: 4.0,
			dateStart: new Date('2014-08-28'),
			dateEnd: new Date('2016-05-21')
		}], // required can empty
		skills: [{
			name: 'Electrical Engineering',
			endorsment: 3
		},{
			name: 'Computer Science',
			endorsment: 3
		},{
			name: 'Signal Processing',
			endorsment: 5
		},{
			name: 'Data Science',
			endorsment: 1
		},{
			name: 'Databases',
			endorsment: 1
		}], // required
		// Additional Career Fields
		/*publications: [], // not required*/
		courses: [{
			name: 'course 1',
			education: 2
		}], // required can empty based on education
		certificates: [], // not required
		projects: [], // not required
		/*volunteer: {
			interests: [],
			experience: [],
			opportunities: []
		}, // not required
		organizations: [], // not required
		honorsAwards: [], // not required
		testScores: [], // not required
		patents: [], // not required
		supportedOrganizations: [], // not required
		posts: [], // not required*/
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
		/*additionalInformation: {
			dateOfBirth: new Date('1990-05-26'), // not required
			maritalStatus: 'Single', // not required
		},*/
		/*interests: [], // not required*/

		// Networking Fields
		/*connections: [], // required can empty
		groups: [], // not required
		followings: [] // not required*/
	};
	this.getUser = function() {
		return user;
	};
});