'use strict';

angular.module('profileApp', ['ui.router', 'ngResource', 'ngSanitize'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    // route for the home page
    .state('app', {
        url:'/',
        views: {
            'header': {
                templateUrl : 'views/header.html'
            },
            'content': {
                templateUrl : 'views/home.html',
                //controller  : 'IndexController'
            },
            'footer': {
                templateUrl : 'views/footer.html'
            }
        }
    })
    .state('app.experience', {
        url:'experience',
        views: {
            'content@': {
                templateUrl: 'views/experience.html',
            }
        }
    })
    .state('app.educations', {
        url:'educations',
        views: {
            'content@': {
                templateUrl: 'views/educations.html',
            }
        }
    })
    .state('app.skills', {
        url:'skills',
        views: {
            'content@': {
                templateUrl: 'views/skills.html',
            }
        }
    })
    .state('app.courses', {
        url:'courses',
        views: {
            'content@': {
                templateUrl: 'views/courses.html',
            }
        }
    })
    .state('app.certificates', {
        url:'certificates',
        views: {
            'content@': {
                templateUrl: 'views/certificates.html',
            }
        }
    })
    .state('app.projects', {
        url:'projects',
        views: {
            'content@': {
                templateUrl: 'views/projects.html',
            }
        }
    })
    .state('app.languages', {
        url:'languages',
        views: {
            'content@': {
                templateUrl: 'views/languages.html',
            }
        }
    });
    // route for the aboutus page
    // .state('app.aboutus', {
    //     url:'aboutus',
    //     views: {
    //         'content@': {
    //             templateUrl : 'views/aboutus.html',
    //             controller  : 'AboutController'                  
    //         }
    //     }
    // })
    $urlRouterProvider.otherwise('/');
});