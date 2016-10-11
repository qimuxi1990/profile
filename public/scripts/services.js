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
		summary: 'I am an Electrical Engineering graduate student with also plenty of Computer Science and Data Science skills. My current objective is to look for a job in the industries related to Software or Computer Engineering.', // required can empty
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
			address: '333 Fiske ST, Hollistion, MA 01746',
			logo: './images/logo-default.png',
			industry: 'Medical Devices',
			dateStart: new Date('2016-08-01'),
			dateEnd: null
		}], // required can empty
		educations: [{
			degree: 'Bachelor of Engineering (B.E.)',
			major: 'Electronics Information Science and Technology',
			description: '2 years in Department of Physics. 3 years in Department of Electronic Engineering. <br />3 months research on Border Detection of ID Card Photos Taken by Mobile Phones as graduation project. <br />3 months assist researching on Visible Light Communication within Short Range in Optical Wireless Information System Lab (OWISYS).<br />3 months assist applying Compressed Sensing to Underwater Sensor in Research Institute of High-Speed Signal Processing And Network Transmission. <br />1 year plan, organize and promote students\' activities in class.',
			organization: 'Tsinghua University',
			logo: './images/logo-tsinghuauniversity.png',
			department: 'Electronics Engineering',
			gpa: 3.0,
			dateStart: new Date('2009-09-01'),
			dateEnd: new Date('2014-07-14')
		},{
			degree: 'Master of Science (M.S.)',
			major: 'Electrical and Electronics Engineering',
			description: '2 years in Department of Electrical and Computer Engineering.<br />1 year research on extracted feature analysis for improving AlcoGait prediction accuracy as thesis project.',
			organization: 'Worcester Polytechnic Institute',
			logo: './images/logo-worcesterpolytechnicinstitute.png',
			department: 'Electrical and Electronics Engineering',
			gpa: 4.0,
			dateStart: new Date('2014-08-28'),
			dateEnd: new Date('2016-05-21')
		}], // required can empty
		skills: [{
			name: 'Electrical Engineering',
			endorsement: 3
		},{
			name: 'Computer Science',
			endorsement: 3
		},{
			name: 'Data Science',
			endorsement: 1
		},{
			name: 'Signal Processing',
			endorsement: 5
		},{
			name: 'Image Processing',
			endorsement: 0
		},{
			name: 'Telecommunications',
			endorsement: 0
		},{
			name: 'Network Engineering',
			endorsement: 0
		},{
			name: 'Integrated Circuit Design',
			endorsement: 0
		},{
			name: 'Computer Architecture',
			endorsement: 0
		},{
			name: 'Programming',
			endorsement: 3
		},{
			name: 'Databases',
			endorsement: 1
		},{
			name: 'Web Development',
			endorsement: 0
		},{
			name: 'C++',
			endorsement: 3
		},{
			name: 'Java',
			endorsement: 2
		},{
			name: 'Android',
			endorsement: 1
		},{
			name: 'Verilog',
			endorsement: 0
		},{
			name: 'VHDL',
			endorsement: 0
		},{
			name: 'R',
			endorsement: 0
		},{
			name: 'SQL',
			endorsement: 0
		},{
			name: 'MongoDB',
			endorsement: 0
		},{
			name: 'HTML5/CSS3',
			endorsement: 0
		},{
			name: 'Node.js',
			endorsement: 0
		},{
			name: 'JavaScript',
			endorsement: 1
		},{
			name: 'ElasticSearch',
			endorsement: 0
		},{
			name: 'SQL Server Reporting Services (SSRS)',
			endorsement: 0
		},{
			name: 'Matlab',
			endorsement: 1
		},{
			name: 'Altera Quartus',
			endorsement: 0
		},{
			name: 'PSpice',
			endorsement: 0
		},{
			name: 'Adobe Creative Suite',
			endorsement: 0
		},{
			name: 'Microsoft Office',
			endorsement: 0
		}], // required
		// Additional Career Fields
		/*publications: [], // not required*/
		courses: [{
			name: 'course 1',
			organization: 'Tsinghua University'
		},{
			name: 'course 2',
			organization: 'Worcester Polytechnic Institute'
		}], // required can empty based on education
		certificates: [{
			title: 'Introduction to HTML5',
			license: '',
			organization: 'Coursera Course Certificates',
			logo: './images/logo-coursera.png',
			date: new Date('2015-09-01'),
			url: 'http://www.google.com'
		},{
			title: 'Introduction to HTML5',
			license: '',
			organization: 'Coursera Course Certificates',
			logo: './images/logo-coursera.png',
			date: new Date('2015-09-01'),
			url: 'http://www.google.com'
		}], // not required
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