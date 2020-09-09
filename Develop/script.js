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
    // setup todo items in array of object
    timeBlocks.each(function () {
        console.log(toDoItems);
        function setupToDO() {
            var thisBlock = $(this);
            var thisBlockHr = parseInt($thisBlock.attr("data-hour"));
            var todoObject = {
                hour: thisBlock,
                text: "",

            }
            
            toDoItems.push(todoObject);
        }

    });



});
