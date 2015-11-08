/**
 * Created by Administrator on 9/8/2015.
 */

function userCtrl($scope,$filter,userDataFctry){
    $scope.users = userDataFctry.fetchUserInfo();
    angular.forEach($scope.users ,function(user){
        user.phone = $filter('formatPhone')(user.phone,user.location);
        user.lastName=$filter('lowercase')(user.lastName);
    });
}

app.controller('userCtrl',['$scope','$filter','userDataFactory',userCtrl]);