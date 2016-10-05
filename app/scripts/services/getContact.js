'use strict';
// GETCONTACT SERVICE
// Description: Define the contactService that has 2 functionalities: getLocation and getCategory 
angular.module('myApp')
.factory('getContact',function($http){
	return{
		fetchlocation:function(){
			var locationdata= $http.get('/api/location');	
			return locationdata;
		},
		fetchcategory:function(){
			var categorydata= $http.get('/api/category');
			return categorydata;
		}
	}
})