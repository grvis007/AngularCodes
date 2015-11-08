

function customLoginFn(){
    return{
       //template:"<h1><label class='label-control'>Gadget Name:</label>{{gadgetName}}</h1>"
        templateUrl:'app/templates/login.html',
        restrict:"EAC",
        controller:'loginCtrl'
    }
}
angular.module('custom.directives',[]).directive('customLogin',[customLoginFn]);