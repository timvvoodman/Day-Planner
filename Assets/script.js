//Array of hour objects with display for html and time value
const saveEvent = document.getElementById("save");
const hours = [
  {
    timeDisplay: "9AM",
    timeValue: 9,
  },
  {
    timeDisplay: "10AM",
    timeValue: 10,
  },
  {
    timeDisplay: "11AM",
    timeValue: 11,
  },
  {
    timeDisplay: "12PM",
    timeValue: 12,
  },
  {
    timeDisplay: "1PM",
    timeValue: 13,
  },
  {
    timeDisplay: "2PM",
    timeValue: 14,
  },
  {
    timeDisplay: "3PM",
    timeValue: 15,
  },
  {
    timeDisplay: "4PM",
    timeValue: 16,
  },
  {
    timeDisplay: "5PM",
    timeValue: 17,
  },
];

//WHEN I open the planner
//THEN the current day is displayed at the top of the calendar

//script to get date from Moment and push date to Jumbotron p tag div
currentDay();
function currentDay() {
  const currentDate = moment().format("dddd, MMMM Do YYYY");
  $("#currentDay").text(currentDate);
  console.log(currentDate);
  console.log(moment().hour());
  console.log(hours[0].timeValue);
}

//WHEN I scroll down
//THEN I am presented with time blocks for standard business hours
// function to build "time slots"
createDay();
function createDay() {
  for (let i = 0; i < hours.length; i++) {
    //WHEN I view the time blocks for that day
    //THEN each time block is color-coded to indicate whether it is in the past, present, or futu
    function pastPresFut() {
      if (moment().hour() > hours[i].timeValue) {
        return "past";
      } else if (moment().hour() == hours[i].timeValue) {
        return "present";
      } else {
        return "future";
      }
    }

    let colorCode = pastPresFut();
    //WHEN I click into a time block
    //THEN I can enter an event
    const newDiv = $(`
    <div class="row">
    <span class="hour">${hours[i].timeDisplay}</span>
    <textarea id = "event${hours[i].timeDisplay}" class ="${colorCode}"></textarea>
    <button id = "save${hours[i].timeDisplay}" class="saveBtn">save</button>
  </div>`);

    $("#hours").append(newDiv);
  }
  $("#event9AM").append(localStorage.getItem("event9AM"));
  $("#event10AM").append(localStorage.getItem("event10AM"));
  $("#event11AM").append(localStorage.getItem("event11AM"));
  $("#event12PM").append(localStorage.getItem("event12PM"));
  $("#event1PM").append(localStorage.getItem("event1PM"));
  $("#event2PM").append(localStorage.getItem("event2PM"));
  $("#event3PM").append(localStorage.getItem("event3PM"));
  $("#event4PM").append(localStorage.getItem("event4PM"));
  $("#event5PM").append(localStorage.getItem("event5PM"));

  $("#save9AM").click(function () {
    let eventDescrip = document.getElementById("event9AM").value;
    localStorage.setItem("event9AM", eventDescrip);
    console.log("clicked");
  });

  $("#save10AM").click(function () {
    let eventDescrip = document.getElementById("event10AM").value;
    localStorage.setItem("event10AM", eventDescrip);
    console.log("clicked");
  });

  $("#save11AM").click(function () {
    let eventDescrip = document.getElementById("event11AM").value;
    localStorage.setItem("event11AM", eventDescrip);
    console.log("clicked");
  });

  $("#save12PM").click(function () {
    let eventDescrip = document.getElementById("event12PM").value;
    localStorage.setItem("event12PM", eventDescrip);
    console.log("clicked");
  });

  $("#save1PM").click(function () {
    let eventDescrip = document.getElementById("event1PM").value;
    localStorage.setItem("event1PM", eventDescrip);
    console.log("clicked");
  });

  $("#save2PM").click(function () {
    let eventDescrip = document.getElementById("eventPM").value;
    localStorage.setItem("event2PM", eventDescrip);
    console.log("clicked");
  });

  $("#save2PM").click(function () {
    let eventDescrip = document.getElementById("event2PM").value;
    localStorage.setItem("event2PM", eventDescrip);
    console.log("clicked");
  });

  $("#save3PM").click(function () {
    let eventDescrip = document.getElementById("event3PM").value;
    localStorage.setItem("event3PM", eventDescrip);
    console.log("clicked");
  });

  $("#save4PM").click(function () {
    let eventDescrip = document.getElementById("event4PM").value;
    localStorage.setItem("event4PM", eventDescrip);
    console.log("clicked");
  });

  $("#save5PM").click(function () {
    let eventDescrip = document.getElementById("event5PM").value;
    localStorage.setItem("event5PM", eventDescrip);
    console.log("clicked");
  });

  //WHEN I click the save button for that time block
  //THEN the text for that event is saved in local storage
}

//WHEN I refresh the page
//THEN the saved events persist
