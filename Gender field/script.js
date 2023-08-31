
const storeButton = document.getElementById('storeButton');
const nameInput = document.getElementById('name');
const genderInput = document.getElementById('gender');
const maleNamesList = document.getElementById('maleNames');
const femaleNamesList = document.getElementById('femaleNames');
const otherNamesList = document.getElementById('otherNames');

storeButton.addEventListener('click', function() {
  const name = nameInput.value;
  const gender = genderInput.value;

  const nameItem = document.createElement('li');
  nameItem.textContent = name;

  if (gender === 'Male') {
    maleNamesList.appendChild(nameItem);
  } else if (gender === 'Female') {
    femaleNamesList.appendChild(nameItem);
  } else {
    otherNamesList.appendChild(nameItem);
  }

  
  nameInput.value = '';
  genderInput.value = 'male'; 
});
