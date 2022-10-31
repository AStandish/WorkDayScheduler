let currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

function colorBlock() {
  $(".time-block").each(function () {
    let currentTime = moment().hour();
    let timeColor = parseInt($(this).attr("id"));

    if (timeColor < currentTime) {
      $(this).removeClass(["present", "future"]).addClass("past");
    } else if (timeColor === currentTime) {
      $(this).removeClass(["past", "future"]).addClass("present");
    } else {
      $(this).removeClass(["past", "present"]).addClass("future");
    }
  });
}
colorBlock();

function getData() {
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
}

$(document).ready(function () {
  getData();

  $(".saveBtn").on("click", function () {
    let text = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id");
    localStorage.setItem(time, text);

    localStorage.setItem(time, text);
  });
});
