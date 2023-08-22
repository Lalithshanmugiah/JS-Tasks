let text = "";
const persons =["john","michael","alan", "james"];
persons.forEach(myFunction);

document.getElementById("result").innerHTML = text;
 
function myFunction(item, index, array, value) {
  text += item + "<br>"; 
}

//console 
console.log(text);