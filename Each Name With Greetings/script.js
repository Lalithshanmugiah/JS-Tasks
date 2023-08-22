const persons = {
    name1:"john",
    name2:"michael",
    name3:"alan",
    name4:"james"
};
let result = `Hey welocme   ${persons.name1}!`+" <br> " 
+`Hey welocme   ${persons.name2}!`+"<br>"
+`Hey welocme   ${persons.name3}!`+"<br>"
+`Hey welocme   ${persons.name4}!`+"<br>"



document.getElementById("para").innerHTML= result;

