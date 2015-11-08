/**
 * Created by Administrator on 9/3/2015.
 */

function moviesCtrl($scope,
                    movieFactory,
                    $state){
   $scope.movies = navigationFctry.getNavigationItems();


    $scope.showDetails= function(movie){
       //$scope.showDescription= True;
        $scope.selectedMovie=movie;
       //movie.result =!movie.result;
    }
}

app.controller('moviesCtrl',['$scope',
    'movieFactory',
    '$state',moviesCtrl]);