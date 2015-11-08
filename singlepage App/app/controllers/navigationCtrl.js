/**
 * Created by Administrator on 9/11/2015.
 */
function navCtrl($scope,navigationFctry){

   $scope.navigation={
       brandName:"Twitter"
   }
    $scope.navigation.navItems= navigationFctry.getNavigationItems();

    $scope.loadPage = function(item){
        $scope.contentUrl = item.templateUrl;
    }
}

app.controller('navigationCtrl',['$scope','navigationFctry',navCtrl]);