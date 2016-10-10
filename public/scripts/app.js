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