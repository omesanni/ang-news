'use strict';
/* global app:true */
/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'firebase'
  ]).constant('FIREBASE_URL', 'https://radiant-fire-3928.firebaseio.com/');
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
         
      })
	   .when('/register', {
         templateUrl: 'views/register.html',
         controller: 'AuthCtrl'
      })
	  .when('/login', {
		templateUrl: 'views/login.html',
		controller: 'AuthCtrl'
      })
	  .when('/users/:username', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/posts.html',
        controller: 'NavCtrl'
      })
	  .when('/comments/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
	  
  });
  
  
