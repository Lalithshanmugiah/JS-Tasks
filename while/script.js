const person =["john", "michael","alan","james"];
let text ="";
let i =0;
while(i<4){
text += person[i] +"<br>"
i++;
}
document.getElementById("para").innerHTML=text;