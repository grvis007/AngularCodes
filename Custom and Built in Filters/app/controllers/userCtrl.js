/** Created by Administrator on 9/8/2015. **/

function userCtrl($scope){
    $scope.users = [
            {firstName:"Kiran",
                lastName:"PVS",
                dob:new Date("11/12/1988"),
                location:"IN",
                phone:"1234567890"},
            {firstName:"krishna",
                lastName:"PVS",
                dob:new Date("12/12/1988"),
                location:"IN",
            phone:"1234567891"},
            {firstName:"John",
                lastName:"Pal",
                dob: new Date("1/12/1998"),
                location:"UK",
                phone:"1234567892"},
            {firstName:"Kavitha",
                lastName:"KK",
                dob:new Date("4/12/1998"),
                location:"US",
                phone:"1234567893"},
            {firstName:"Asha",
                lastName:"Praveena",
                dob: new Date("8/12/1989"),
                location:"IN",
                phone:"9188812345"}
        ];
}

app.controller('userCtrl',['$scope',userCtrl]);