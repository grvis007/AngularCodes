/**
 * Created by Administrator on 9/10/2015.
 */

function userDataFn($filter,userService){
    return {
        users :function(){
           var data = userService.users();
            angular.forEach(data,function(item){
                item.lastName=$filter('uppercase')(item.lastName);
                item.firstName=$filter('lowercase')(item.firstName);
                item.phone= $filter('formatPhone')(item.phone,item.location);
            });
            return data;
        }
    }
}

app.factory('userDataFactory',['$filter','userService',userDataFn])