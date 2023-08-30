"use strict";
let a = 20;
let  b = 2;

try{
    if(b == 2){
        throw('Divide by zero error!')
    } else{
        let result = a / b;
        console.log(result);
    }
}catch(e){
    console.log("Error: ", e);
}
finally{
    console.log("Executed error handling !");
}


const jsonData = '{"name": "John durairaj", "age": 47}';
const parsedData = JSON.parse(jsonData);
console.log("Parsed JSON data:", parsedData);
