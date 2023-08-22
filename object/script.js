const person = {
    Name: "John",
    age : 50,
    city: "America"
  };
  let text =""
  for(let x in person){
  text += person[x];
  }

  document.getElementById("para").innerHTML=key - + text + " "+ value - + " ";