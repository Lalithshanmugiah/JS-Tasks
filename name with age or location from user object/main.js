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
        this.displayOutput();
    },
    displayOutput:function() {
        const outputDiv = document.getElementById('output');
        const ageButton = document.createElement('button');
        ageButton.textContent='Age';
        ageButton.addEventListener('click', () => this.displayAge());

        const locationButton = document.createElement('button');
        locationButton.textContent='Location';
        locationButton.addEventListener('click',() => this.displayLocation());

        outputDiv.innerHTML =''
        outputDiv.appendChild(ageButton);
        outputDiv.appendChild(locationButton);     
    },
    displayAge: function() {
        const outputDiv = document.getElementById('output');
        outputDiv.textContent=`${this.firstName}${this.lastName}${this.age}`;
    },
    displayLocation: function(){
        const outputDiv = document.getElementById('output');
        outputDiv.textContent=`${this.firstName}${this.lastName}${this.location}`;
    } 
};

document.getElementById('Button').addEventListener('click', () => user.storeInformation());