'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them
//var app = angular.module("myApp",[]);  
    app.controller('work', function($scope,$http, $filter) {
        
 
        
        $http({
            
            method:"GET",
            url:"/api/work"
        
            }).then(function mySuccess(response){
            
            
             $scope.works=response.data.works;
             
            
            
        }, function myError(response){
        
        console.log("error");
    });
    

        
        $scope.deleteItem = function(item) {
        
          
            $scope.removeIndex = -1;
            $scope.removeIndex=$scope.works.indexOf(item);
        
        
        };
        
        $scope.deleteConfirm = function() {
  
            $scope.works.splice($scope.removeIndex, 1);
         
        };
        
        
        $scope.addItems=function(){
     
            var newItem={
                
                title: $scope.addtitle,
                author:$scope.addAuthor,
                like:$scope.addLike,
                comment:$scope.addComment,
                image: ''
                
                  
            }
           // alert($scope.addTitle);
            $scope.works.push(newItem);
            $scope.addtitle="";
            $scope.addAuthor="";
            $scope.addLike="";
            $scope.addComment="";
            
            
        }
        
         $scope.editItems=function(item){
             $scope.editIndex = -1;
            $scope.editIndex=$scope.works.indexOf(item);
             $scope.edittitle=item.title;
            $scope.editAuthor=item.author;
            $scope.editLike=item.like;
            $scope.editComment=item.comment;
             
         }
         
         $scope.editConfirm = function() {
             var i=$scope.editIndex;
            $scope.works[i].author=$scope.editAuthor;
            $scope.works[i].title=$scope.edittitle;
             $scope.works[i].like=$scope.editLike;
             $scope.works[i].comment=$scope.editComment;
            
        };
    
        
        $scope.order = function(expression, reverse) {
            $scope.works = $filter('orderBy')($scope.works, expression, reverse);
        }

          $scope.greaterThan1 = function(work) {
      
          var partNum=work.like.substring(0,work.like.length-6).split(',');
          var num=parseInt(partNum[0]+partNum[1]);
          
              if(!$scope.searchLike){
                  
                  return true;
                  
              }
            if (num>parseInt($scope.searchLike)) {                
                return true;
            } else {                
                return false;
            }
    
   
        };
        
        
         $scope.greaterThan2 = function(work) {
 
          var partNum=work.comment.substring(0,work.comment.length-9).split(',');
          var num=parseInt(partNum[0]+partNum[1]);
        
              if(!$scope.searchComment){
                  
                  return true;
                  
              }
            if (num>parseInt($scope.searchComment)) {                
                return true;
            } else {                
                return false;
            }
    
      
        };
        
    });

