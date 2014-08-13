'use strict';

/**
 * @ngdoc function
 * @name truecallingNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the truecallingNgApp
 */
angular.module('truecallingNgApp')
    .controller('MainCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.$on('$includeContentLoaded', function(event) {
            console.log('another include was loaded', event.targetScope);
        });

        console.log('main');

        // $scope.$on('mapInitialized', function(event, map) {

        // });

    });
