'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user
app.controller('login', function($scope, $state, authenticate, session) {

    

    $scope.submitForm = function() {
        session.set("user", $scope.userName);
        session.set("password", $scope.password);
        
    
        if (authenticate.getUser() == "success") {
           $scope.valid=true;
            $state.go("root.work");
          

        } else if(authenticate.getUser() == "wrong") {

            $scope.valid=false;
            console.log("error");
             
        }
    }

});
