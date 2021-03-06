var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

/* AWS health check */
router.get('/health', function(req, res, next) { res.status(200).end(); });

/* GET home page. */
router.get('/user/:userId', function(req, res, next) {
    var user = {
        _id: "mqi",
        // Basic Fields
        firstname: 'Muxi', // required
        lastname: 'Qi', // required
        avatar: './images/avatar-qimuxi1990.png', // not required
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
        summary: 'Innovative, analytical, and diligent computer and software engineer with broad experience transforming and streamlining enterprise-wide processes to increase productivity, reduce inefficiencies, and increase accuracy. Skilled at JavaScript programming and consulting engineering team projects backed by expertise in advanced technologies acquired during graduate coursework in computer science. Exceptional interpersonal skills to sustain project planning, design reviews, and code reviews.', // required can empty
        position: 'Senior Software Engineer, at Diamond Diagnostics Inc.', // required not empty
        experience: [{
            title: 'Engineering Intern',
            description: '<ul><li>Consulted and supported engineers on a radar scanning control and display project using Microsoft Foundation Class (MFC) library in a C++ object-oriented environment.</li></ul>',
            company: 'Beijing Leiyin Electronic Technology Development Co., Ltd.',
            location: '3 Haiying ST, Kexuecheng, Fengtai District, Beijing, Beijing, China',
            logo: './images/logo-leiyin.png',
            industry: 'Electronics',
            dateStart: new Date('2012-07-01'),
            dateEnd: new Date('2012-08-01')
        },{
            title: 'Application Engineer I',
            description: '<ul><li>Investigating Business Intelligence requirement for all departments in company.</li><li>Developed an Excel .Net reporting system to facilitate document updating and quickly compile large data requests company-wide with an engine feed accomplished with an asynchronized work flow and .Net table render technique.</li><li>Built a sturdy and dependable reporting engine using .Net VSTO, C#, ClickOnce, InstallShield, SQL, and MongoDB and resolved glitches in Excel Tier 1 design utilizing Async calls without extra data IO.</li></ul>',
            company: 'Diamond Diagnostics Inc.',
            location: '333 Fiske ST, Hollistion, MA 01746',
            logo: './images/logo-diamonddiagnostics.png',
            industry: 'Medical Devices',
            dateStart: new Date('2016-08-01'),
            dateEnd: new Date('2017-05-01')
        },{
            title: 'Application Engineer II',
            description: '<ul><li>Engineered an e-Commerce full-stack application to bolster product competition in the marketplace.</li><li>Increased efficiency and productivity of the enterprise resource planning full-stack application.</li><li>Streamlined data integration with Node.js, Angular.js, MS SQL and MongoDB to advance productivity and guarantee accuracy in scalable modules.</li><li>Collaborated with two applications engineers to upgrade the company management portal and streamline communication between customers, sales, and services resulting in a 50% increase in client requests.</li><li>Worked with a team of two other application engineers to develop a web platform to increase enterprise-wide productivity, automation, and communication.</li><li>Enhance BI engine by designing SQL ETL reporting system with incrementing and self-correction feature.</li></ul>',
            company: 'Diamond Diagnostics Inc.',
            location: '333 Fiske ST, Hollistion, MA 01746',
            logo: './images/logo-diamonddiagnostics.png',
            industry: 'Medical Devices',
            dateStart: new Date('2017-06-01'),
            dateEnd: new Date('2019-05-01')
        },{
            title: 'Senior Application Engineer',
            description: '<ul><li>Leading a team of four Application Engineers to enhance e-Commerce and enterprice resource planning applications.</li><li>Structure and accomplish cross-application SQL integration between enterprice resource planning appilcation and 3rd party applications, like Microsoft Dynamics GP.</li><li>Design RESTful api class layer on back-end to standarize and centralize database operation for higher data integrity and lower transaction risk.</li><li>Finalize project requirement and blueprint, and schedule project timeline with deparment leaders and sales representitives for applications.</li><li>Mentor new application engineers to learn techniques used in these applications, assign and review their tasks until they can confidently participate in development lifecycle using Git.</li></ul>',
            company: 'Diamond Diagnostics Inc.',
            location: '333 Fiske ST, Hollistion, MA 01746',
            logo: './images/logo-diamonddiagnostics.png',
            industry: 'Medical Devices',
            dateStart: new Date('2019-06-01'),
            dateEnd: null
        }], // required can empty
        educations: [{
            degree: 'Bachelor of Engineering (B.E.)',
            fieldOfStudy: 'Electronics Information Science and Technology',
            description: '2 years in Department of Physics. 3 years in Department of Electronic Engineering. <br />3 months research on Border Detection of ID Card Photos Taken by Mobile Phones as graduation project. <br />3 months assist researching on Visible Light Communication within Short Range in Optical Wireless Information System Lab (OWISYS).<br />3 months assist applying Compressed Sensing to Underwater Sensor in Research Institute of High-Speed Signal Processing And Network Transmission. <br />1 year plan, organize and promote students\' activities in class.',
            school: 'Tsinghua University',
            logo: './images/logo-tsinghuauniversity.png',
            department: 'Electronics Engineering',
            grade: 3.0,
            dateStart: new Date('2009-09-01'),
            dateEnd: new Date('2014-07-14')
        },{
            degree: 'Master of Science (M.S.)',
            fieldOfStudy: 'Electrical and Electronics Engineering',
            description: '2 years in Department of Electrical and Computer Engineering.<br />1 year research on extracted feature analysis for improving AlcoGait prediction accuracy as thesis project.',
            school: 'Worcester Polytechnic Institute',
            logo: './images/logo-worcesterpolytechnicinstitute.png',
            department: 'Electrical and Electronics Engineering',
            grade: 4.0,
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
            endorsement: 0
        },{
            name: 'Signal Processing',
            endorsement: 4
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
            endorsement: 2
        },{
            name: 'Databases',
            endorsement: 1
        },{
            name: 'Web Development',
            endorsement: 0
        },{
            name: 'Full-Stack Development',
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
            endorsement: 1
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
            name: 'Matlab',
            endorsement: 2
        },{
            name: 'Typescript',
            endorsement: 0
        },{
            name: 'C#',
            endorsement: 0
        },{
            name: '.Net',
            endorsement: 0
        },{
            name: 'Angular',
            endorsement: 0
        },{
            name: 'PHP',
            endorsement: 0
        }], // required
        // Additional Career Fields
        /*publications: [], // not required*/
        courses: [{
            name: 'Computer Languages and Programming',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Fundamentals of Programming',
            associateSchool: 'Tsinghua University'
        },{
            name: 'The Practice of C++ Programming',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Data Structure',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Database',
            associateSchool: 'Tsinghua University'
        },{
            name: 'JAVA and Object-Oriented Programming',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Advanced Matlab Programming and Its Application',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Computer Organization',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Fundamentals of Semiconductor Devices',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Digital Logic Circuits & Systems',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Laboratory of Electronic Circuits',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Probability and Stochastic Processes (1)',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Probability and Stochastic Processes (2)',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Principles of Imaging Information',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Signals and Systems',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Electronic Technology Practice',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Communication Circuits Laboratory',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Communication RF Circuits Design',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Fundamentals of Communication Networks',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Principles of Antenna',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Fundamentals of Microwave and Lightwave Technology',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Electronic Circuits Course Design',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Principles of Modern Communications',
            associateSchool: 'Tsinghua University'
        },{
            name: 'Analysis of Deterministic Signals and Systems',
            associateSchool: 'Worcester Polytechnic Institute'
        },{
            name: 'Introduction to Local and Wide Area Networks',
            associateSchool: 'Worcester Polytechnic Institute'
        },{
            name: 'Mobile and Ubiquitous Computing',
            associateSchool: 'Worcester Polytechnic Institute'
        },{
            name: 'ST: Noise in Analog and Mixed Signal Circuit and Systems',
            associateSchool: 'Worcester Polytechnic Institute'
        },{
            name: 'SP: Digital Systems Testing and Design',
            associateSchool: 'Worcester Polytechnic Institute'
        },{
            name: 'Database Management Systems',
            associateSchool: 'Worcester Polytechnic Institute'
        },{
            name: 'Methodologies for System Level Design and Modeling',
            associateSchool: 'Worcester Polytechnic Institute'
        },{
            name: 'Digital Signal Processing',
            associateSchool: 'Worcester Polytechnic Institute'
        }], // required can empty based on education
        certificates: [{
            name: 'Introduction to HTML5',
            license: '8DLERMS2M2M3',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2015-09-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/certificate/8DLERMS2M2M3'
        },{
            name: 'HTML, CSS and JavaScript',
            license: 'PEWBH5HJJRX8',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2015-10-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/certificate/PEWBH5HJJRX8'
        },{
            name: 'R Programming',
            license: 'SW8Q6D4DST',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2015-10-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/certificate/SW8Q6D4DST'
        },{
            name: 'Front-End Web UI Frameworks and Tools',
            license: 'AXG3FKGYYYGM',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2015-11-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/certificate/AXG3FKGYYYGM'
        },{
            name: 'The Data Scientist\'s Toolbox',
            license: 'Q38HWR87QP',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2015-10-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/certificate/Q38HWR87QP'
        },{
            name: 'Getting and Cleaning Data',
            license: 'SR8BV2BQ3N',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2015-11-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/certificate/SR8BV2BQ3N'
        },{
            name: 'Exploratory Data Analysis',
            license: 'W8N8U5527AWP',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2016-08-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/certificate/W8N8U5527AWP'
        },{
            name: 'Server-side Development with NodeJS',
            license: 'K3MBYMM3RKKC',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2016-09-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/verify/K3MBYMM3RKKC'
        },{
            name: 'Multiplatform Mobile App Development with Web Technologies',
            license: 'ABNCM5JC5NLE',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2016-09-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/verify/ABNCM5JC5NLE'
        },{
            name: 'Front-End Javascript Frameworks: AngularJS',
            license: 'VTTHZFREDUM5',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2016-10-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/verify/VTTHZFREDUM5'
        },{
            name: 'Computer Vision Basics',
            license: 'BJ84V2RAYJ7D',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2019-05-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/verify/BJ84V2RAYJ7D'
        },{
            name: 'Visual Recognition & Understanding',
            license: 'A52KV8MHUVNJ',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2019-06-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/verify/A52KV8MHUVNJ'
        },{
            name: 'Image Processing, Feature & Segmentation',
            license: '6NHKZFX5GBGF',
            authority: 'Coursera',
            logo: './images/logo-coursera.png',
            dateStart: new Date('2019-07-01'),
            dateEnd: null,
            url: 'https://www.coursera.org/account/accomplishments/certificate/6NHKZFX5GBGF'
        },{
            name: 'Deep Learning Onramp',
            license: '1bf945ad-6572-4a05-ba4d-658e709d1777',
            authority: 'MathWorks',
            logo: './images/logo-mathworks.png',
            dateStart: new Date('2019-06-01'),
            dateEnd: null,
            url: 'https://matlabacademy.mathworks.com/progress/share/certificate.html?id=1bf945ad-6572-4a05-ba4d-658e709d1777'
        }], // not required
        projects: [{
            name: 'Company Portal Web App',
            occupation: 'Applications Engineer II at Diamond Diagnostics Inc.',
            description: '<u>Team and Objective:</u> Work in a group of three to enhance an existing Node webapp to a multi-page company internal portal including many component single page applications, including but not limited to sales, purchasing, inventory, manufacturing, financing and management.<br /><u>Content:</u> Setup application environment on linux server, including MongoDB 4.0, NodeJS 8.11, establish ExpressJS server with node-mssql 3.3, and mongoose 5.2, handle requests using mixed routes of RESTful and Non-RESTful api, design compact styled front-end pages using AngularJS, Bootstrap and customized css.<br /><u>Challenge and Solution:</u> A manner of displaying all records is preferred in our production and will result in huge rendering cost, so we implement pagination on scroll action with ng-table package.<br /><u>Outcome:</u> a comprehensive, integrated NodeJS web app used by every department.',
            member: ['Muxi Qi', 'Kunal Watkar', 'Dylan Yao'],
            dateStart: new Date('2017-06-01'),
            dateEnd: null,
            url: ''
        },{
            name: 'Excel-based Reporting Engine',
            occupation: 'Applications Engineer II at Diamond Diagnostics Inc.',
            description: '<u>Team and Object:</u> Work individually to produce a reporting system which takes SQL data and generates excel workbooks as output. This system should be distributed to all client PCs throughout the company and should be sensitive to changes on both application and the reports generated.<br /><u>Content:</u> Build upgradable Excel Addin application using Visual Studio InstallShield, schedule app version check/notification on load, achieve access control based on Windows credential, design json feed configuration in MongoDB, and implement features, including report parameterization, data fetching and workbook formatting, using .Net/VSTO library.<br /><u>Challenge and Solution:</u> Long time cost from data fetching results in slow performance, so an async procedure is called while the main process is rendering basic components and styles; Report design changes frequently as requested, so a report engine with json feed from database is my choice; Application can only be installed by administrator under company policy but PS-remoting has limit on network and firewall, so an on-load version checking and notification procedure is added in case of version discrepancy<br /><u>Outcome:</u> an Excel Addin application widely and frequently used in our production.',
            member: ['Muxi Qi'],
            dateStart: new Date('2016-08-01'),
            dateEnd: new Date('2017-05-31'),
            url: ''
        },{
            name: 'A Comprehensive Comparative Performance Evaluation of Signal Processing Features in Detecting Alcohol Consumption from Gait Data',
            occupation: 'Student at Worcester Polytechnic Institute, Master of Science (M.S) Electrical and Computer Engineering',
            description: '<u>Team and Objective:</u> Work under instructions from advisor to improve accuracy of existing project AlcoGait by applying new features, new extraction method involving DSP, and correlation analysis<br /><u>Content:</u> Implement 27 features in MATLAB code, extract these features from data set, calculate correlation between feature and prediction and find 22 better ones, also analyze their performance in different machine learning classifiers.',
            member: ['Muxi Qi', 'Emmanuel Agu'],
            dateStart: new Date('2015-09-01'),
            dateEnd: new Date('2016-05-31'),
            url: ''
        },{
            name: 'Exchange Plus_Worcester (Full-Stack Application)',
            occupation: 'Student at Worcester Polytechnic Institute, Master of Science (M.S) Electrical and Computer Engineering',
            description: '<u>Team and Objective:</u> Work in group of two to design a web application to provide a more information protective way to exchange local 2nd hand products, also experiencing the differences between SQL and NoSQL databases.<br /><u>Content:</u> Front-End Design using Bootstrap and Angular; Sever-Side Design using php; Database-Side Design using mySQL and MongoDB; Tests to briefly compare performance between SQL and NoSQL databases<br /><u>Outcome:</u> such a web app running on local apache server',
            member: ['Muxi Qi', 'Jing Yang'],
            dateStart: new Date('2015-09-01'),
            dateEnd: new Date('2015-12-31'),
            url: 'https://github.com/qimuxi1990/ExchangePlusWorcester.git'
        },{
            name: 'Writing In Air (Android Application)',
            occupation: 'Student at Worcester Polytechnic Institute, Master of Science (M.S) Electrical and Computer Engineering',
            description: '<u>Team and Objective:</u> Work in a group of three to designed an android app to keep track of user writing gestures (single alphabetical) and display an image of the alphabet as output<br /><u>Content:</u> Collect data from multiple sensors (including linear acceleration, gravity, magnetic); Use noise filters; Implemented the UI design; Use multiple MVC android threads.<br /><u>Outcome:</u> a demo app tracking simple writing gestures successfully',
            member: ['Muxi Qi', 'Xuanyu Li', 'Chen Lin'],
            dateStart: new Date('2015-02-01'),
            dateEnd: new Date('2015-06-30'),
            url: 'https://github.com/qimuxi1990/Writing-In-Air.git'
        },{
            name: 'Application of Compressed Sensing of Underwater Sensor',
            occupation: 'Student at Tsinghua University, Bachelor of Engineering (B.E) Electronics Information Science and Technology',
            description: '<u>Objective:</u> Work in a group of two to apply the compressed sensing theory to under water sensor system, in Research Institute of High-Speed Signal Processing and Network Transmission<br /><u>Content:</u> Assist researching papers, optimizing researching direction, applying recovery matrix',
            member: ['Muxi Qi'],
            dateStart: new Date('2013-09-01'),
            dateEnd: new Date('2013-12-31'),
            url: ''
        },{
            name: 'A Research on Border Detection of ID Card Photos Taken by Mobile Phones',
            occupation: 'Student at Tsinghua University, Bachelor of Engineering (B.E) Electronics Information Science and Technology',
            description: '<u>Team and Objective:</u> Work individually to design an algorithm to fast and accurately locate the boundaries of business card areas in photos of business cards, which are taken by cellphones, in Research Institute of Network and Human-Machine Speech Communication<br /><u>Content:</u> Algorithm collection, applicability analysis and verification, timing and accuracy performance test, algorithm design and implementation, comprehensive performance test<br /><u>Outcome:</u> Successfully implement boundary detection solution inspired by Euclidean geometry principle and real-time detected domain theory under two-dimensional code, and write a thesis collected in university database',
            member: ['Muxi Qi', 'Changsong Liu'],
            dateStart: new Date('2012-09-01'),
            dateEnd: new Date('2013-06-31'),
            url: ''
        },{
            name: 'Research on Visible Light Communication within Short Range',
            occupation: 'Student at Tsinghua University, Bachelor of Engineering (B.E) Electronics Information Science and Technology',
            description: '<u>Objective:</u> Work in group of five to design a short range communication system based on visible light, in Optical Wireless Information System Lab (OWISL)<br /><u>Content:</u> Assist designing intermediate power amplifier in transmitter and receiver<br /><u>Outcome:</u> Our group successfully establish a short range visible light communication system',
            member: ['Muxi Qi'],
            dateStart: new Date('2011-09-01'),
            dateEnd: new Date('2011-12-01'),
            url: ''
        }], // not required
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
            proficiency: 'native or bilingual proficiency'
        },{
            name: 'English',
            proficiency: 'limited working proficiency'
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
    if(req.params.userId == 'mqi'){
        res.json(user);
    }
    else {
        res.json({});
    }
});

module.exports = router;
