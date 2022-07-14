//if statemets for past, present, future
//compare momentjs to hour and add one of three
//get current hour
var currentHour = moment().format("hh");
//all of timeblocks)
for(var i = 8; i < 18; i++){
    //using jquery goes to dom (html and gets data-hour matching 8)
    //compares current moment to the hour that function is looking at
    if(currentHour > i){
        $( "#" ).addClass(past)

    }
    elseif(currentHour = i){
        $( "#" ).addClass(present);
    }
    elseif(currentHour < hour){
        $( "#" ).addClass(future)
    }
    
}
//     if(currentHour > hour){
//         addEventListener.
//     }
// }


// }
//save text stuff in local storage so continously on page
//add click event listeners onto save button so text stuff goes in local storage
