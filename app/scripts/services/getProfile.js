'use strict';
// GETPROFILE SERVICE
// Description: Define the profileService that has 1 functionality: getProfile
// var app= angular.module("myapp");
angular.module('myApp')
// .factory('getProfile',['$http',function($http, session){
// 	var res ={};
// 	res.fetchprofile= function(){
// 		return $http.get('/api/profile');

// 	}
// 	console.log(res);
// 	return res;
// }]);
.factory('getProfile',function($http){
	// var res;
	return{
		fetchprofile:function(){
			var promise= $http.get('/api/profile');
		// promise.then(function(response){
		// 	res=response.data.profiles;
		// },function(){
		// 	console.log("noprofiles");
		// });
		return promise;
		}
	};

})