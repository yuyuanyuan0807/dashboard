'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form
app.controller('contact',function($scope,getContact,$window){
	getContact.fetchlocation().then (function mysuccess(res){
		var response= res;

		$scope.locations = response.data.locations;
		// console.log(alllocation);
	},function myerror(){
		console.log("Error");
	});
	 getContact.fetchcategory().then (function mysuccess(res){
	 	var response=res;
	 	$scope.categories = response.data.categories;
	 },function myerror(){
	 	console.log("Error");
	 });
	$scope.date = new Date();
	$scope.rate = 0;
  	$scope.max = 10;
 
  	$scope.altActive=function(index){
  		$scope.active = index;
  		// console.log("inside function");
  	}
  	$scope.sendMail=function(emailid){
  		console.log("inside sendmail");
  		 $window.open("mailto:"+ emailid);
  	};
  	$scope.hoveringOver = function(value) {
	    $scope.overStar = value;
	    $scope.percent = 100 * (value / $scope.max);
	    // console.log(value);
	    if(value<3){
  			// console.log("inside function");
  			$scope.priorityconfirm= "Low";
  		} else if((value>=3) && (value<6)){
  			// console.log("inside function");
  			$scope.priorityconfirm="Medium";
  		} else if((value>=6) && (value<=10)){
  			// console.log("inside function");
  			$scope.priorityconfirm="High";
  		}
  	};

   	$scope.confirmationid=Math.floor(Math.random() * 899999999 + 1000000000);
});