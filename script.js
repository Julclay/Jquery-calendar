let $textArea = $("<textarea>");
let $button = $("<button>");
let $hour = $("<span>")

$(".container").append($hour);
$(".container").append($textArea);
$(".container").append($button);

$button.text("submit");
$hour.text("9am");

$hour.addClass("hour");
$(".container").addClass("time-block");
$button.addClass("saveBtn");


