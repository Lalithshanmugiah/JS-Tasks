const persons =["john","michael","alan","james"];
let result=""
for(x in persons){
    result += persons[x] + "<br>";
}
document.getElementById("para").innerHTML=result;