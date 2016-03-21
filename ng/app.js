var socialApp = angular.module('socialApp', []);

socialApp.service('PostsService', function($http) {
    this.fetch = function() {
	return $http.get('/api/posts');
    };
    this.create = function(post) {
	return $http.post('/api/posts', post);
    };
});

socialApp.controller('PostsController', function($scope, PostsService){

    $scope.addPost = function() {
	if($scope.postBody){
	    PostsService.create({
		username: 'mrugesh',
		body: $scope.postBody
	    }).success(function (post) {
		$scope.posts.unshift(post);
		$scope.postBody = null;
	    });
	}
    };

    PostsService.fetch().success(function(posts){
	    $scope.posts = posts;
	});

});