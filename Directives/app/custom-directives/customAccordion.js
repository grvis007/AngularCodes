/**
 * Created by Administrator on 9/24/2015.
 */

function accordionFn(){
    return{
        restrict:'A',
        templateUrl:'app/templates/accordion.html',
        link: linkFn
    }
}

function linkFn(scope,element,attrs){
    //console.log(attrs);
    if(attrs["class"]){
        console.log(attrs["class"]);
        console.log(attrs["title"]);
    }
    var body = element.find('.panel-body');
    var header = element.find('.panel-heading');
    if(header && body){
        header.bind('click',function(){
            body.toggle();
        });
    }
}
app.directive('customAccordion',[accordionFn]);