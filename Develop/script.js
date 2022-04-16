console.log("cum");

var createTimeBlock = function(time){
    var timeBlockEl = $("<div>").addClass("time-block");
    var row = $("<div>").addClass("row");
    timeBlockEl.append(row);

    var timeSpace = $("<div>").addClass("col-1 hour");
    var time = $("<p>").text(time);
    timeSpace.append(time);

    var textSpace = $("<div>").addClass("col-10 past");
    var textArea = $("<textarea>").attr("name", time);
    textSpace.append(textArea);

    var saveSpace = $("<div>").addClass("col-1 saveBtn");
    var saveBtn = $("<span>").addClass("oi oi-file");
    saveSpace.append(saveBtn);

    row.append(timeSpace, textSpace, saveSpace);

    $("#time-blocks").append(timeBlockEl);
    
}

var createGrid = function(){
    
}
var time = "9am";

createTimeBlock(time);