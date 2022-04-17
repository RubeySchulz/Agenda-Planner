console.log("cum");

var timeBlocks = [];


var setCurrentDay = function(){
    $("#currentDay").text(moment().format("LLLL"));
}

var createTimeBlock = function(times, textAreaTime, description, id){
    var timeBlockEl = $("<div>").addClass("time-block");
    var row = $("<div>").addClass("row");
    timeBlockEl.append(row);

    var timeSpace = $("<div>").addClass("col-1 hour");
    var time = $("<p>").text(times);
    timeSpace.append(time);

    var textSpace = $("<div>").addClass("col-10" + textAreaTime);
    var textArea = $("<textarea>").attr("name", times).text(description);
    textSpace.append(textArea);

    var saveSpace = $("<div>").addClass("col-1 saveBtn");
    var saveBtn = $("<span>").addClass("oi oi-file");
    saveSpace.append(saveBtn);

    row.append(timeSpace, textSpace, saveSpace);

    $("#time-blocks").append(timeBlockEl);
    
}

var createTimeGrid = function(){
    var time = 9;
    var momentTime = 9;
    var timeClass = " present";
    

    for(var i = 0; i < 9; i++){
        if(moment().hours() < momentTime){
            timeClass = " future";
        }else if(moment().hours() > momentTime){
            timeClass = " past";
        }else if(moment().hours() === momentTime){
            timeClass = " present";
        }
        if (time > 12){
            time = 1;
            var timeString = time + "pm";
            time++;
            createTimeBlock(timeString, timeClass);
        }
        else {
            var timeString = time + "am";
            time++;
            createTimeBlock(timeString, timeClass);
        }
        momentTime++;
    }
}

var getLocalData = function(){
    var local = getLocalData("timeBlocks");
    var localParsed = JSON.stringify(local);
    localParsed = JSON.parse(localParsed);
    

}


setCurrentDay();
createTimeGrid();

console.log(moment().hours());