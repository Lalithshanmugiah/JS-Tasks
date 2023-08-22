let persons = ["john","michael", "alan", "james"];
let result=""
for(let i =0; i<persons.length; i++){
result += `Hey welocme ${persons[i]}!   <br>`;
}
document.getElementById("para").innerHTML= result;