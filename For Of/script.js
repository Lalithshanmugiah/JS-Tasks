const persons =["john", "michael","alan", "james"];
let result=""
for(let x of persons){
    result += x + " " + "<br>";
}
document.getElementById("para").innerHTML=result