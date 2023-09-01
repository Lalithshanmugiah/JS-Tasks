function storeInformation() {
  const name = document.getElementById("name").value;
  const gender = document.getElementById("gender").value;
  const color = document.getElementById("color").value;

  const listItem = document.createElement("li");
  listItem.textContent = name;
  listItem.style.backgroundColor = color;

  if (gender === "male") {
      document.getElementById("maleNames").appendChild(listItem);
      listItem.classList.add("male");
  } else if (gender === "female") {
      document.getElementById("femaleNames").appendChild(listItem);
      listItem.classList.add("female");
  } else {
      document.getElementById("otherNames").appendChild(listItem);
      listItem.classList.add("others");
  }
}