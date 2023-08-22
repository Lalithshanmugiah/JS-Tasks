const person = {
    Name: "John",
    age : 50,
    city: "America"
  };
  const key=Object.keys(person)
  let text =""
  for(let x in person){
  text += person[x];
  }

  document.getElementById("para").innerHTML= `key ${key[0]}  value ${person.Name} <br> 
  key ${key[1]}  value ${person.age} <br> 
  key ${key[2]}  value ${person.city}`