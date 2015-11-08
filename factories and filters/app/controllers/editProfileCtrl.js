/**
 * Created by Administrator on 9/9/2015.
 */

function editProfile($scope,userDataFactory){
   var users = userDataFactory.fetchUserInfo();
    $scope.users= angular.copy(users)

    $scope.edit = function(item){
        userDataFactory.editUser(item);
    }
}

app.controller('editProfileCtrl',['$scope','userDataFactory',editProfile]);