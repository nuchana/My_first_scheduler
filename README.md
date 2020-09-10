My thoughts

This exercise is really hard and I could not find what I missed. I can show the current date/time and manipulate moment.js but my hour showed null and can't save anything in my local storage. Please help advise and I want to re-sumbit if possible.

What I did was I created html file first to have a page structure of the schedule - time block, text area and save icon for click event.

Setting up to do list: I create a todo object consisting of hour and text to match current hour so we can grab the data and save in the local storage.  

Initilize time block: Each timeblock is colored based on past, present, and future. I created new var of "thisBlock" and "thisBlockHr" for what if scenario. 

Render schedule:When the user enter an event, we want to assign data hour and text into time-block by looping through the array and show it.

saveHandler: when save button is clicked, we want to update the data hour and text and save it in the local storage. 
```
