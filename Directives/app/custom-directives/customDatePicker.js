/**
 * Created by Administrator on 9/25/2015.
 */

function datePickerFn(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            var mindate= attrs["mindate"];
            var maxdate=attrs["maxdate"];
            var noofmonths = parseInt(attrs["noofmonths"]);
            var dateObj = {};
            if(mindate){
                dateObj.minDate=mindate;
            }
            if(maxdate){
                dateObj.maxDate=maxdate;
            }
            if(noofmonths){
                dateObj.numberOfMonths=noofmonths;
            }

            element.datepicker(dateObj);
        }


    }
}

app.directive('customDatePicker',[datePickerFn]);