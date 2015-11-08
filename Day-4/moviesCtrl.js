/**
 * Created by Administrator on 9/3/2015.
 */

function moviesCtrl($scope){
   $scope.movies =[
       {city:"Amritsar", language:"English", movieName:"Avatar",src: "images/Avatar.jpg",mveDescription:"Avatar (marketed as James Cameron's Avatar) " +
       "is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron, and " +
       "starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez, and Sigourney Weaver. The film is set in the " +
       "mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star " +
       "system, in order to mine the mineral unobtanium,a room-temperature superconductor.The expansion of the " +
       "mining colony threatens the continued existence of a local tribe of Na'vi – a humanoid species indigenous to Pandora. " +
       "The film's title refers to a genetically engineered Na'vi body with the mind of a remotely located human that is used " +
       "to interact with the natives of Pandora."},
       {city:"Ranchi",language:"English", movieName:"Gravity",src: "images/gravity.jpg",mveDescription:"Gravity is a 2013 science fiction thriller " +
       "film directed, co-written, and produced by Alfonso Cuarón. It stars Sandra Bullock and George Clooney as astronauts, and " +
       "sees them stranded in space after the mid-orbit destruction of their space shuttle and their subsequent attempt to return" +
       " to Earth."},
       {city:"Hyderabad",language:"English", movieName:"Transformers",src: "images/trans.jpg",mveDescription:"Transformers is a series of American" +
       " science fiction action films directed by Michael Bay, and based on the toys created by Hasbro and Tomy. The first film, " +
       "Transformers, was released in 2007, the second, Revenge of the Fallen in 2009, the third, Dark of the Moon in 2011, and the" +
       " fourth, Age of Extinction in 2014. The fifth is scheduled for a 2017 release with Bay directing,and a possible " +
       "crossover with the G.I. Joe franchise is being considered."},
       {city:"Rajahmundry",language:"Hindi", movieName:"Bhajrangi Bhaijan",src: "images/bb.jpg",mveDescription:"Bajrangi Bhaijaan (English translation: " +
       "Brother Bajrangi) is a 2015 Indian comedy-drama film directed by Kabir Khan.Scripted by V. Vijayendra Prasad, the film" +
       " has been produced by Salman Khan and Rockline Venkatesh.It features Salman Khan, Harshaali Malhotra,Kareena " +
       "Kapoor and Nawazuddin Siddiqui in lead roles. Principal photography began in New Delhi in November 2014, and the film" +
       " had a worldwide release on July 17, 2015 during the Eid weekend."},
       {city:"Guntur",language:"Telugu", movieName:"Bahubali",src: "images/bahubali.jpg",mveDescription:"Bāhubali: The Beginning (English: Magnanimous" +
       " Man: The Beginning) is a 2015 Indian bilingual epic historical fiction film directed by S. S. Rajamouli.Produced by " +
       "Shobu Yarlagadda and Prasad Devineni, it is the first of two cinematic parts.The film was simultaneously made in Telugu and" +
       " Tamil and dubbed into Hindi, Malayalam and French languages. Baahubali: The Beginning features an ensemble cast of Prabhas," +
       " Rana Daggubati, Tamannaah and Anushka Shetty in lead roles. Ramya Krishnan, Sathyaraj, Nassar, Adivi Sesh, Tanikella" +
       " Bharani and Sudeep appear in supporting roles."}
   ];
    $scope.cities = [
        {
            cityName:"Rajahmundry",
            cityCode:"Rjy"
        },
        {
            cityName:"Guntur",
            cityCode:"Gnt"
        },

        {
        cityName:"Hyderabad",
        cityCode:"Hyd"
    },
        {
            cityName:"Delhi",
            cityCode:"Del"
        },
        {
            cityName:"Mumbai",
            cityCode:"Mum"
        },
        {
            cityName:"Amritsar",
            cityCode:"Amt"
        },
        {
            cityName:"Ranchi",
            cityCode:"Ran"
        }

    ];
    $scope.showDetails= function(movie){
       //$scope.showDescription= True;
       $scope.selectedMovie=movie;
    }

    $scope.loadMovie=function(){
        console.log($scope.selectedCity);
    }
}

app.controller('moviesCtrl',moviesCtrl);