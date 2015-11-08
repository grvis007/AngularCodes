/**
 * Created by Administrator on 9/3/2015.
 * 1. refer the module
 * 2. add controller function
 * 3. name the controller
 * 4. define the call back function.
 * */
function register($scope){
    $scope.firstName="PVS";
    $scope.lastName="Kiran";

}

app.controller('registerCtrl',register);
/*approach 1.
 angular.module('twitterApp')
        .controller('registerCtrl',register);
*/
/*2. approrach
 app.controller('registerCtrl',register);
 */
