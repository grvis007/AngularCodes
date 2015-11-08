/**
 * Created by Administrator on 9/11/2015.
 */
function navCtrl($scope,
                 navigationFctry,
                 $state){

    $scope.navigation={
        brandName:"Twitter"
    };
    $scope.navigation.navItems= navigationFctry.getNavigationItems();

    $scope.loadPage = function(route){
        //$scope.contentUrl = route.templateUrl;
        $state.go(route.routeName);
    }
}

app.controller('navigationCtrl',['$scope',
    'navigationFctry',
    '$state',navCtrl]);