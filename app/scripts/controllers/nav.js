// JavaScript Document
'use strict';
 
 //console.log(angNewsApp);
 app.controller('NavCtrl', function ($scope, $location, Post, Auth) {
	 $scope.posts = Post.all;
     $scope.post = {url: 'http://', title: ''};
	 
	  $scope.submitPost = function () {
	         Post.create($scope.post).then(function (postId) {
				$scope.post = {url: 'http://', title: ''};
				$location.path('/posts/' + postId);
			 });
			 
	  };
	  
	  $scope.deletePost = function (postId) {
		Post.delete(postId);
     };
	 
	 $scope.logout = function () {
        Auth.logout();
     };
 });
 