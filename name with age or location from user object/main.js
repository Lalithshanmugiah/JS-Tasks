const user = {
    firstName: "",
    lastName: "",
    age: 0,
    location: "",
    storeInfo: function (fname, lname, age, location) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
        this.location = location;
    }
};

function storeUserInfo(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;

    user.storeInfo(firstName,lastName,age,location);

     document.getElementById("buttons").style.display="block";   
}

function displayInfo(type){
    const output = type === 'age'? `${user.firstName} ${user.lastName} ${user.age}` : `${user.firstName} ${user.lastName}  ${user.location}`
    document.getElementById("output").textContent= output;
}