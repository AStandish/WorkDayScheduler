let hours = ["", "", "", "", "", "", "", "", ""];

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

$(".saveBtn").on("click", function () {
  const text = $(this).siblings(".description").val().trim();
  const workHour = $(this).parent().attr("id") - 9;
  hours[workHour] = text;
  const hoursStr = JSON.stringify(hours);
  localStorage.setItem("workdaystorage", hoursStr);
});

function initialEventLoad() {
  const schedule = localStorage.getItem("workdaystorage");
  if (schedule) {
    const textAreaEls = $(".description");
    hours = JSON.parse(schedule);
    for (let i = 0; i < hours.length; i++) {
      textAreaEls.eq(i).val(hours[i]);
    }
  }
}
initialEventLoad();
