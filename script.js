let $ul = $("<ul>")

let today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

let time = moment().format("H");

console.log(time);

let hoursDay = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

$(".container").append($ul)
$(".container").addClass("time-block");

for (let i = 0; i < hoursDay.length; i++) {

    let $li = $("<li>")
    let $textArea = $("<textarea>");
    let $button = $("<button>");
    let $hour = $("<span>")

$ul.append($li)
$li.append($hour);
$li.append($textArea);
$li.append($button);

$hour.text(hoursDay[i] + " h");

$li.addClass("row")
$hour.addClass("hour");
$button.addClass("saveBtn");
$button.attr("id", hoursDay[i])

$button.text("submit");

$(`#${hoursDay[i]}`).on("click", function(event){

    let meeting = $(event.target).siblings("textarea").val();
    localStorage.setItem(hoursDay[i], meeting)



    
})

$textArea.text(localStorage.getItem(hoursDay[i]))


}
// 

let $textArea = $("<textarea>");

let buttonIda = document.querySelector(".saveBtn")
let buttonId = buttonIda.id

console.log(buttonId)

if(time < buttonId){

    $textArea.css("background-color", "red")
    console.log("red")

}else if (time > buttonId){

    $textArea.css("background-color", "blue")
    console.log("blue")

}else if (time === buttonId){

    $textArea.css("background-color", "grey")
    console.log("grey")
}



