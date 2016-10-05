'use strict';
// OVERVIEW CONTROLLER
// Description: Define the following functionalities:
// Make service call to retrieve user's information
app.controller('overview',function($scope,getProfile,session){
	getProfile.fetchprofile().then(function(res){
		// console.log(res);
		var response=res;
		var user=session.get('user');
		response.data.profiles.forEach(function(item){
			if (item.username == user){
				$scope.name= item.username;
				$scope.nickname = item.nickname;
				$scope.image = item.profileImage;
			}
		});
	});
	// console.log(profilesdata);

});
// if (user == "minh"){
		// 	$scope.name=$scope.profiles[0].username;
		// 	$scope.nickname= $scope.profiles[0].nickname;
		// 	$scope.image=$scope.profiles[0].profileImage;
		// } else{
		// 	$scope.name=$scope.profiles[1].username;
		// 	$scope.nickname= $scope.profiles[1].nickname;
		// 	$scope.image=$scope.profiles[1].profileImage;
		// }