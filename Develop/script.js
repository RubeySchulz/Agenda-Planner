var timeBlocks = {
};


var setCurrentDay = function(){
    $("#currentDay").text(moment().format("LLLL"));
}

var createTimeBlock = function(times, textAreaTime, description){
    var timeBlockEl = $("<div>").addClass("time-block");
    
    var row = $("<div>").addClass("row");
    timeBlockEl.append(row);
    var realTime = "";
    if(times <= 12){
        realTime = times + " am";
    }else if(times > 12){
        realTime = (times - 12) + " pm";
    }
    

    var timeSpace = $("<div>").addClass("col-1 hour");
    var time = $("<p>").text(realTime);
    timeSpace.append(time);

    var textSpace = $("<div>").addClass("col-10" + textAreaTime);
    var textArea = $("<textarea>").attr("id", times).text(description);
    textSpace.append(textArea);

    var saveId = times + "Save";
    var saveSpace = $("<div>").addClass("col-1 saveBtn");
    var saveBtn = $("<span>").addClass("oi oi-file").attr("id", saveId);
    saveSpace.append(saveBtn);

    row.append(timeSpace, textSpace, saveSpace);

    $("#time-blocks").append(timeBlockEl);
}

var createTimeGrid = function(){
    var time = 8;
    var timeClass = " present";
    
    for(var i = 0; i < 9; i++){
        if(moment().hours() < time){
            timeClass = " future";
        }else if(moment().hours() > time){
            timeClass = " past";
        }else if(moment().hours() === time){
            timeClass = " present";
        }
        time++;
        createTimeBlock(time, timeClass, timeBlocks[time]);
    }
}

var getLocalData = function(){
    var local = localStorage.getItem("timeBlocks");
    var localParsed = JSON.parse(local);
    for(var i = 9; i < 17; i++){
        if(localParsed != null){
            timeBlocks[i] = localParsed[i];
        }
    }
}

var saveLocalData = function(time, value){
    timeBlocks[time] = value;
    localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
}

$("#time-blocks").on("click", "span", function(){
    var saveId = $(this).attr("id").replace("Save", "");
    
    var textArea = $("#" + saveId).val();
    saveLocalData(saveId, textArea);
})
getLocalData();
setCurrentDay();
createTimeGrid();
