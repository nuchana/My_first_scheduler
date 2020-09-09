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

    function setupToDO() {
        console.log(toDoItems);
        // setup todo items and loop through an array of object
        timeBlocks.each(function () {
            var thisBlock = $(this);
            var thisBlockHr = parseInt($thisBlock.attr("data-hour"));
            var todoObject = {
                hour: thisBlockHr,
                text: "",
            }

            toDoItems.push(todoObject);

        });

        // save in local storage
        localStorage.setItem("todos", JSON.stringify(toDoItems));

    }


    // Initialize time block depending on present, past and future
    function InitializeTimeBlocks() {
        timeBlocks.each(function() {
            // console.log(timeBlocks)
            var thisBlock = $(this);
            var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

            //add style to time blocks to show where we are in the day
            if (thisBlockHr == currentHour) {
                thisBlock.addClass("present");
            
            }
            if (thisBlockHr < currentHour) {
                thisBlock.addClass("past");

            }
            if (thisBlock > currentHour) {
                thisBlock.addClass("future");
            }

        });
       
    }


});
