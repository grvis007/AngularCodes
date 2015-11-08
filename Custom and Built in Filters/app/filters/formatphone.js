/**
 * Created by Administrator on 9/8/2015.
 */
/*var phoneFilter = function(){
    return function(input){
        var output= input;
        console.log(input);
        return output;
    }
};*/

app.filter('formatPhone',function(){
    return function(input,criteria){
        var formattedOutput=input;
        if(input && input.length==10) {
            switch (criteria) {
                case 'US':
                    firstThree = input.substring(0, 3);
                    var secondThree = input.substring(3, 6);
                    var lastFour = input.substring(6, 10);
                    return firstThree + "-" + secondThree + "-" + lastFour;
                    break;
                case "UK":
                    firstThree = input.substring(0, 2);
                    var secondThree = input.substring(2, 6);
                    var lastFour = input.substring(6, 10);
                    return firstThree + "-" + secondThree + "-" + lastFour;
                    break;
                case "IN":
                    firstThree = input.substring(0, 5);
                    var lastFour = input.substring(5, 10);
                    return firstThree + "-" + lastFour;
                    break;
            }
        }
        return formattedOutput;
    }
});