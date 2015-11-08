/**
 * Created by Administrator on 9/8/2015.
 */

function userController(userDataFactory,userService,$scope){
   // $scope.users =
    console.log(userService.userName);
     $scope.users= userDataFactory.users();
}

app.controller('userCtrl',
    ['userDataFactory','userService','$scope',userController]);

