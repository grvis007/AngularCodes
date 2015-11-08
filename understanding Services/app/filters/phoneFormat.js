/**
 * Created by Administrator on 9/8/2015.
 */

function formatPhone(){
  return function (input,critieria){
      var output=input;
      if(input && input.length==10) {
          if (critieria == "US") {

              var firstThree = input.substring(0, 3);
              var secondThree = input.substring(3, 6);
              var lastFour = input.substring(6, 10);
              return firstThree + "-" + secondThree + "-" + lastFour;
          }
          if (critieria == "IN") {
              return input.substring(0,5)+'-'+ input.substring(5,10);
          }
      }
      return output;
  }
}
app.filter('formatPhone',[formatPhone]);