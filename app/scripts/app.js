/*global $:false */
'use strict';

/**
 * @ngdoc overview
 * @name truecallingNgApp
 * @description
 * # truecallingNgApp
 *
 * Main module of the application.
 */
var app = angular.module('truecallingNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngFitText',
    'ngMap',
    'ui.router'
]);

app.config(function($urlRouterProvider, $stateProvider, $locationProvider) {

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode(true);
    }

    $urlRouterProvider.otherwise('/');

    $urlRouterProvider.when('', '/main');

    $stateProvider
        .state('main', {
            url: '/',
            views: {
                'main-view': {
                    templateUrl: 'views/main.tpl.html',
                    controller: 'MainCtrl'
                }
            },
            onEnter: function() {
                console.log('Enter Main');
            }
        })
        .state('quiz', {
            url: '/quiz',
            views: {
                'main-view': {
                    templateUrl: 'views/quiz.tpl.html',
                    controller: 'QuizCtrl'
                }
            },
            onEnter: function() {
                console.log('Enter Quiz');
            }
        })
        .state('result', {
            url: '/result',
            views: {
                'main-view': {
                    templateURL: 'views/main.tpl.html'
                }
            },
            onEnter: function() {
                console.log('Enter Result');
            }
        });
});

app.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function() {
        $(document).foundation();
    });
});
