/**
 * Created by Administrator on 9/10/2015.
 */
function userSvc(){
    this.userName="kiran";
    this.users = function() {
     return   [
            {
                firstName: "Kiran",
                lastName: "PVS",
                dob: "18/12/1988",
                location: "IN",
                phone: "1234567890"
            },
            {
                firstName: "krishna",
                lastName: "PVS",
                dob: "18/12/1988",
                location: "IN",
                phone: "1234567891"
            },
            {
                firstName: "John",
                lastName: "Pal",
                dob: "18/12/1998",
                location: "UK",
                phone: "1234567892"
            },
            {
                firstName: "Kavitha",
                lastName: "KK",
                dob: new Date(),
                location: "US",
                phone: "1234567893"
            },
            {
                firstName: "Asha",
                lastName: "Praveena",
                dob: "18/12/1989",
                location: "IN",
                phone: "9188812345"
            }
        ];
    }
}
app.service('userService',[userSvc])