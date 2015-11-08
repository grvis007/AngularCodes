/**
 * Created by Administrator on 9/2/2015.
 */
// here we are creating the module.
var app = angular.module('eMovies',['ui.router']);


function configFn(urlRouterProvider,stateProvider){

    urlRouterProvider.otherwise("/")
    var homeObj = {
        name:'home',
        templateUrl:'app/templates/home.html',
        url:"/"
    };
    var aboutObj = {
        name:'about',
        templateUrl:'app/templates/about.html',
        url:"/about"
    };
    var contact = {
        name:'contact',
        templateUrl:'app/templates/contact.html',
        url:"/contact"
    };
    var orders = {
        name:'orders',
        templateUrl:'app/templates/order.html',
        url:"/orders"
    };
    var login = {
        name:'login',
        templateUrl:'app/templates/login.html',
        url:"/login"
    };
    var register = {
        name:'register',
        templateUrl:'app/templates/register.html',
        url:"/register"
    };

    stateProvider.state('home',homeObj);
    stateProvider.state('about',aboutObj);
    stateProvider.state('contact',contact);
    stateProvider.state('order',orders);
    stateProvider.state('login',login);
    stateProvider.state('register',register);
}
//Defining the Routes.
// 1.$stateProvider
// 2.$urlRouterProvider.
app.config(['$urlRouterProvider','$stateProvider',configFn]);
