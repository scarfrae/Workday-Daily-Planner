//if statemets for past, present, future
//compare momentjs to hour and add one of three
//get current hour
var currentHour = moment().format("HH");
//all of timeblocks)
for(var i = 8; i < 19; i++){
    //using jquery goes to dom (html and gets data-hour matching 8)
    //compares current moment to the hour that function is looking at
    if(currentHour > i){
        $(`[data-hour=${i}]`).addClass("past");
        

    }
    else if(currentHour == i){
        $(`[data-hour=${i}]`).addClass("present");
       
    }
   
    else if(currentHour < hour){
        $(`[data-hour=${i}]`).addClass("future");
    }
    
}
console.log(currentHour);

//add click event listeners onto save button so text stuff goes in local storage
//create function since adding event listener to every i element
const btnElement = document.getElementsByClassName("btn");
btnElement.addEventListener("click", SaveText);
function SaveText() {
    console.log("hello");
}
//event listener:

// function clickButton(event){
//     console.log('save has been initiated');

// }
// const button = document.getElementsByClassName('btn');
// button.addEventListener('click', clickButton);

//attach to every save button an event listener that pulls text data from from neighbor of button and save it into local storage
//save data as object 
//when loading page pull from local storage and make sure each text box has right text
