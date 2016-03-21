angular.module('socialApp')
    .controller('PostsController', function($scope, PostsService){

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