/**
 * Created by Administrator on 9/9/2015.
 */
function userDataFn(){
    var userData = [
        {   id:1,
            firstName:"Kiran",
            lastName:"PVS",
            dob:"18/12/1988",
            location:"IN",
            phone:"1234567890"},
        {id:2,firstName:"krishna",
            lastName:"PVS",
            dob:"18/12/1988",
            location:"IN",
            phone:"1234567891"},
        {id:3,
            firstName:"John",
            lastName:"Pal",
            dob:"18/12/1998",
            location:"UK",
            phone:"1234567892"},
        {id:4,firstName:"Kavitha",
            lastName:"KK",
            dob:new Date(),
            location:"US",
            phone:"1234567893"},
        {id:5,firstName:"Asha",
            lastName:"Praveena",
            dob:"18/12/1989",
            location:"IN",
            phone:"9188812345"}
    ];
    return{
        fetchUserInfo:function(){
            return userData ;
        },
        editUser:function(user){
            angular.forEach(userData,function(item){
                if(item.id==user.id){
                    item=user;
                }
            });
        },
        addUser:function(newUser){
            userData.push(newUser);
        }
    }
}

app.factory('userDataFactory',[userDataFn]);