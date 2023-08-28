const user ={
    firstName: '',
    lastName:'',
    age:'',
    location:'',
    storeInformation: function() {
        this.firstName = document.getElementById('firstName').value;
        this.lastName = document.getElementById('lastName').value;
        this.age = document.getElementById('age').value;
        this.location = document.getElementById('location').value;
        
    },
    displayoutput: function(type) {
        const output = `${this.firstName} ${this.lastName} ${
            type === 'age' ? this.age : this.location
        }`;
        document.getElementById('output').innerHTML = output;
        
    }
};
document.getElementById('output').innerHTML = `
            <button onclick="user.displayoutput('age')">Age Button</button>
            <button onclick="user.displayoutput('location')">Location Button</button>`;

document.getElementById('Button').addEventListener('click', () => user.storeInformation());