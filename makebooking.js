function validateForm() {

    console.log("I am being run!")
    console.log(document.forms["bookingForm"])
    var name = document.forms["bookingForm"]["name"].value;
    var email = document.forms["bookingForm"]["email"].value;
    var date = document.forms["bookingForm"]["date"].value;
    var time = document.forms["bookingForm"]["time"].value;
    var partySize = document.forms["bookingForm"]["partySize"].value;
    var phone = document.forms["bookingForm"]["phone"].value;
  
    // Regular expression to validate email
    var emailRegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  
    // Regular expression to validate date
    var dateRegExp = /^\d{4}-\d{2}-\d{2}$/;
  
    // Regular expression to validate time
    var timeRegExp = /^\d{2}:\d{2}$/;

    var phoneReExp = /^\d{10}$/;

    let today = new Date(formatDate(new Date()));
    let dateVar = new Date(formatDate(Date.parse(date)));
    console.log(dateVar)
    console.log(today)
    if (dateVar < today) {
      alert("Date must be either today or in the future");
      return false;
    }
  
    if (name == "") {
      alert("Name is required");
      return false;
    }

    if (phone == "" || !phoneReExp.test(phone)){
        alert("Please enter a valid phone number!")
        return false
    }
  
    if (email == "" || !emailRegExp.test(email)) {
      alert("Please enter a valid email");
      return false;
    }
  
    if (date == "" || !dateRegExp.test(date)) {
      alert("Please enter a valid date in the format YYYY-MM-DD");
      return false;
    }
  
    if (time == "" || !timeRegExp.test(time)) {
      alert("Please enter a valid time in the format HH:MM");
      return false;
    }
  
    if (partySize == "" || isNaN(partySize) || partySize < 1) {
      alert("Please enter a valid party size");
      return false;
    }

    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    minutes = parseInt(minutes);
    if (hours < 11 || hours > 21 || (hours === 21 && minutes > 0)) {
      alert("Time must be between 11:00 AM and 9:00 PM");
      return false;
    }
  
    return true;
  }

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}