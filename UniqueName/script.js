const Names = new Set();

function myFunction() {
    const input = document.getElementById("input");
    const message = document.getElementById("message");
    const output = document.getElementById("output");

    const name = input.value.trim();
    
    if (name === "") {
        message.textContent = "Enter a valid name";
        return;
    }

    if (Names.has(name)) {
        message.textContent = "Name is already present";
        return;
    }
    if (!/^[a-zA-Z]*$/g.test(name)){
        message.textContent="Enter Valid Name (letters - only)"
        return;
    }

    Names.add(name);
    const currentTime = new Date();
    const Time = currentTime.toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const result = document.createElement("p");
    result.textContent = `${name} - Date: ${Time}`;
    output.appendChild(result);

    message.textContent = "";
    input.value = "";
}