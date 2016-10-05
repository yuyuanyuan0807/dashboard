'use strict';
// DIALOG DIRECTIVE
// Description: Define 2 directives in the app: addDialog and editDialog. 
// First one is for the "Add" button and the second one is for the "Edit" button



app.directive('additemdirective',function(){
	return{
		restrict: 'E',
        replace: true,
		templateUrl: 'templates/addDialog.html'
        
      
	};
})
.directive('edititemdirective',function(){
	return{
		restrict: 'E',
        replace: true,
		templateUrl: 'templates/editDialog.html'
	};
});
