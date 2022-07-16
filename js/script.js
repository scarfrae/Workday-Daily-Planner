//if statemets for past, present, future
//compare momentjs to hour and add one of three
//get current hour
var currentHour = moment().format("HH");
//all of timeblocks)
for (var i = 8; i < 21; i++) {
  //using jquery goes to dom (html and gets data-hour matching 8)
  //compares current moment to the hour that function is looking at
  if (currentHour > i) {
    $(`[data-hour=${i}]`).addClass("past");
  } else if (currentHour == i) {
    $(`[data-hour=${i}]`).addClass("present");
  } else if (currentHour < i) {
    $(`[data-hour=${i}]`).addClass("future");
  }
}
console.log(currentHour);

//add click event listeners onto save button so text stuff goes in local storage
//create function since adding event listener to every i element

//assign event listener:
const button = $(".saveBtn");
//when using this keyword don't use => !!!
button.on("click", function (event) {
  //prevent refreshing page !! necessary whenever working with everything
  event.preventDefault();
  // console.log("Save Btn");
  //identify information in each input

  //info of click info
  //select sibling with class description and getting its value
  var textInfo = $(this).siblings(".description").val();
  console.log(textInfo);
  //get id of particular hour
  //getting parent of button child's id attribute
  var hourRow = $(this).parent().attr("id");
  console.log(hourRow);
  //save into local storage
  //either read text that's already there or make array
  //can't manipualate local storage directly so need variable
  var calendarInfo = JSON.parse(localStorage.getItem("text")) || [];
  //pushing hourRow and textInfo into calendarInfo array
  calendarInfo.push({ hourRow, textInfo });
  //saving what is pushed into local storage 
  //local storage can only accept string
  localStorage.setItem("text", JSON.stringify(calendarInfo)); //will run into problem
  //push calendar info
  
});
//getting local storage values to use later
var saveStorageData = JSON.parse(localStorage.getItem("text"));
//getting each element with class description
$(".description").each(function (index) {
    //setting parent elemetn with attribute id to variable
  var id = $(this).parent().attr("id");
  //for loop iterating to length of value stored in local storage 
  for (let i = 0; i < saveStorageData.length; i++) {
    //getting first indecy of local storage value
    const element = saveStorageData[i];
    //checking if value is on right line
    if (id == element.hourRow) {
        //displaying text
      $(this).text(element.textInfo);
    }
  }
});

//attach to every save button an event listener that pulls text data from from neighbor of button and save it into local storage
//save data as object
//when loading page pull from local storage and make sure each text box has right text
