/**
 * Created by Administrator on 9/29/2015.
 */
var customPostFn= function(){
    return{
        restrict:"A",
        scope:{
            //  @ used for one way communication
            //  and always directive takes data from the controller.
            //myUserName:'@',
            myContent :"=",
            myClick:"&"
        },
        templateUrl:"app/templates/customPost.html"
    }
}

app.directive('customPost',[customPostFn])