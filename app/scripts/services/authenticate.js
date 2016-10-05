'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 

var app = angular.module("myApp");
app.factory('authenticate', function($http, session) {
    var res;
    
    //console.log(user);
    // console.log(psw);
    
    return {
        getUser: function() {
            var user = session.get('user');
            var psw = session.get('password');
            var promise = $http.post('/api/login', {
                    userName: user,
                    password: psw
                });
    promise.then(function(response) {
        res = response.data.authentication;  
    }, function() {
        res="wrong";
        console.log("wrong");
    });
            return res;
        }
    };
});
