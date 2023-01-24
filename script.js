let $ul = $("<ul>")




let hoursDay = ["9 am", "10am", "11am", "12pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"]


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

$hour.text(hoursDay[i]);

$li.addClass("row")
$hour.addClass("hour");
$button.addClass("saveBtn");
$button.attr("id", hoursDay[i])
$textArea.attr("id", hoursDay[i])

$button.text("submit");

$("button").on("click", function(event){

    let meeting = $(event.target).siblings("textarea").val();
    localStorage.setItem(hoursDay[i], meeting)
})

$textArea.text(localStorage.getItem(hoursDay[i]))


}


