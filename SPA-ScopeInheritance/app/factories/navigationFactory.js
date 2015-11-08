/**
 * Created by Administrator on 9/11/2015.
 */
/**
 * Created by Administrator on 9/11/2015.
 */
function navFn(){
    var navBar =
        [
        {   displayName:"Home",
            routeName:'home'

        },
        {   displayName:"Contact",
            routeName:'contact'
        },
        {displayName:"Register",
            routeName:'register'
        },
        {displayName:"About us",
            routeName:"about"
        },
        {displayName:"Login",
            routeName:"login"
        },
        {displayName:"Order",
            routeName:"order"
        }
    ];
    return{
        getNavigationItems:function(){
            return navBar;
        }
    }
}

app.factory('navigationFctry',[navFn]);