const person =["john", "michael","alan","james"];
let text ="";
let i =0;
while(i<person.length){
text += person[i] +"<br>"
i++;
}
document.getElementById("para").innerHTML=text;