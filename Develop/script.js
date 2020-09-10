var currentDay = $("#currentDay");
var timeBlocks = $(".time-block");
var scheduleArea = $(".schedule");
//each object has a hour property and a text property
var toDoItems = [];

// JS moment format
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");

// when the document load
$(document).ready(function () {
    // set up todo items
    function setupToDO() {
        // console.log(setupToDo);

        // loop through an array of object
        timeBlocks.each(function () {
            
            var thisBlock = $(this);
            var thisBlockHr = parseInt(thisBlock.attr("data-hour"));
            
            var todoObject = {
                // set todo hour to same as data-hour
                hour: thisBlockHr,
                // get text ready for user input
                text: "",
            }
            // add todo obj to an array of to-do items
            toDoItems.push(todoObject);

        });

        // save in local storage
        localStorage.setItem("todos", JSON.stringify(toDoItems));

    }


    // Initialize time block depending on present, past and future
    function initializeTimeBlocks() {
      
        timeBlocks.each(function () {
          
            var thisBlock = $(this);
            var thisBlockHr = parseInt(thisBlock.attr("data-hour"));

            //add style to time blocks to show where we are in the day
            if (thisBlockHr == currentHour) {
                thisBlock.addClass("present");

            }
            if (thisBlockHr < currentHour) {
                thisBlock.addClass("past");

            }
            if (thisBlockHr > currentHour) {
                thisBlock.addClass("future");
            }

        });

    }

    function renderSchedule() {

        toDoItems = localStorage.getItem("todos");
        toDoItems = JSON.parse(toDoItems);

        //loop thru array then assign the text to the timeBlock with data-hour equal to hour. 
        //make a variable where [data-hour={hour}] then plug it in to the selector $('[data-hour={hour}')
        for (var i = 0; i < toDoItems.length; i++) {
            var itemHour = toDoItems[i].hour;
            var itemText = toDoItems[i].text;

            $("[data-hour=" + itemHour + "]").children("textarea").val(itemText);

        }

        console.log(toDoItems);// why it show null???
    }

    function saveHandler() {
        var thisBlock = $(this).parent();

        var hourToUpdate = $(this).parent().attr("data-hour");
        var itemToAdd = (($(this).parent()).children("textarea")).val();

        //see which item to be updated depending on the hour of the button clicked 
        for (var j = 0; j < toDoItems.length; j++) {
            if (toDoItems[j].hour == hourToUpdate) {
                //set its text to what was added to textarea
                toDoItems[j].text = itemToAdd;
            }
        }
        localStorage.setItem("todos", JSON.stringify(toDoItems));
        renderSchedule(); 
    }

    //format the timeblocks depending on time
    initializeTimeBlocks();
    //if there's nothing for the todos in local storage
    if (!localStorage.getItem("todos")) {
        //initialize the array of objects
        setupToDO();
    } //otherwise we get it from local storage

    //display current date
    currentDay.text(currentDate);

    //render schedule from local storage
    renderSchedule();
    //when a todo item save button is clicked, save it
    scheduleArea.on("click", "button", saveHandler);


});
