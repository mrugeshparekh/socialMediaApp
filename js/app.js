var socialApp = angular.module('socialApp', []);

socialApp.controller('PostsController', function($scope){

    //Starting Data
    $scope.posts = [
	{
	    username: 'Mrugesh',
	    body: 'Node Rules !'
	},
	{
	    username: 'Nihar',
	    body: 'Trying out Angualr....'
	}
    ];

    $scope.addPost = function() {
	//Only add post if there is body
	if($scope.postBody){  
	    $scope.posts.unshift({
		username: 'Krishna',
		body: $scope.postBody
	    })
	    //clear out the input field
	    $scope.postBody = null;
	}
    };
});