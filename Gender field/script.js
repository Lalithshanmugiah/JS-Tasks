
const storeButton = document.getElementById('storeButton');
const name = document.getElementById('name');
const gender = document.getElementById('gender');
const maleNames= document.getElementById('maleNames');
const femaleNames = document.getElementById('femaleNames');
const otherNames = document.getElementById('otherNames');

storeButton.addEventListener('click', function() {
  const name = name.value;
  const gender = gender.value;

  const nameItem = document.createElement('li');
  nameItem.textContent = name;

  if (gender === 'Male') {
    maleNames.appendChild(nameItem);
  } else if (gender === 'Female') {
    femaleNames.appendChild(nameItem);
  } else {
    otherNames.appendChild(nameItem);
  }

  
  nameInput.value = '';
  genderInput.value = 'male'; 
});
