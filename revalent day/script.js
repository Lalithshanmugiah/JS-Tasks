function myFunction() {

    var days = document.getElementById("Input").value;
  
    switch(days) {
      case "1":
      text = "monday";
      break;
      case "2":
      text = "tuesday";
      break;
      case "3":
      text = "wednesday";
      break;
      case "4":
      text = "thursday";
      break;
      case "5":
      text = "friday";
      break;
      case "6":
      text = "saturday";
      break;
      case "7":
      text = "sunday ";
      break;
      default:
      text = "enter valid number";
    }
    document.getElementById("para").innerHTML = text;
  }