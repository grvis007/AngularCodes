/**
 * Created by Administrator on 9/29/2015.
 */

var postsCtrl = function($scope){
    $scope.userName ="kiran kumar"
    $scope.post={
        userName:"Kiran",
        content:"I am the Post Content"
    };
    $scope.submit = function(){
        console.log($scope.post);
    }
};
app.controller('postsCtrl',['$scope',postsCtrl])