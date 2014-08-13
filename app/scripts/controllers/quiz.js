'use strict';

/**
 * @ngdoc function
 * @name truecallingNgApp.controller:QuizCtrl
 * @description
 * # Quiztrl
 * Controller of the truecallingNgApp
 */
angular.module('truecallingNgApp')
    .controller('QuizCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var $quiz = $scope.quiz = {};

        $quiz.step = 0;

        console.log($quiz);

    });
