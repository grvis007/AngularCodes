/**
 * Created by Administrator on 9/2/2015.
 */

// here we are consuming the 'emovies' module
// to create the controller.
//angular.module('eMovies')
function register($scope){
    $scope.firstName="Hello";
    $scope.lastName="Front End";
    $scope.showFullName=false;

    $scope.clickButton = function(){
        $scope.showFullName = !$scope.showFullName;
    }
}
      app.controller('registerCtrl',register);


