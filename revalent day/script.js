function myFunction() {

  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  //empty value should shows enter valid number 
  if (input === "") {
      output.innerText = "Enter Valid Number";
      return;
  }
  //if any negative number or else equal to zero shows enter positive number
  if (!/^\d+(\.\d+)?$/.test(input) || parseFloat(input)<=0) {
      output.innerText = "Enter Positive Number ";
      return;
  }
  //if any decimal number entered its rounded to nearest number
  let Rounded = Math.round(parseFloat(input));
  //if enter number were greater than 7 and less than 1 mean its shows enter number between 1 to 7
  if (Rounded < 1 || Rounded > 7) {
      output.innerText = "Enter Number Between 1 to 7";
      return;
  }
  // result of revalent days
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  let relevantDay = days[Rounded - 1];
  output.innerText = relevantDay;


}

