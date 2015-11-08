/**
 * Created by Administrator on 9/3/2015.
 */

function moviesCtrl($scope, $http){

    $http.get("http://private-a73e-aquentuxsociety.apiary-mock.com/members")

        .success(function (response)

        {
            $scope.id = response;
            //console.log($scope.gender);

        })

        .error(function (error)
        {
                alert(error);

        });


    $scope.displayDescription= function(item){

        item.showResult=!item.showResult;
        $scope.showResult=item;


    }
}

app.controller('moviesCtrl',moviesCtrl);