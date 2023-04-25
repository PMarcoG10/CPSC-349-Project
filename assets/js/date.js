// print date once
setInterval(function () {
    updateTime();
  }, 1000);

  function updateTime() {
    // variable for creating dates
    var dateInfo = new Date();

    // arrays to store information
    var day_of_week;
    var months;
    var day;
    var currentDate;
  
    // dates
    day_of_week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    day = dateInfo.getDate();
  
    // formats the date on the clock
    currentDate =
      months[dateInfo.getMonth()] +
      ", " +
      day_of_week[dateInfo.getDay()] +
      " " +
      day;
    // gets the date element from html
    document.getElementsByClassName("date")[0].innerHTML = currentDate;
  }
  updateTime();