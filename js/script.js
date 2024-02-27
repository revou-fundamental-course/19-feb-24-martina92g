// script.js
function updateUsername() {
    var username = prompt("What is your name?", "");
    document.getElementById("username").innerHTML = username;
}
updateUsername();

function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
function displayOutput() {
    // Get form values
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('birthday').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

     // Check if any field is unfilled
     if (name === '' || birthday === '' || gender === '' || message === '') {
        alert('All fields must be filled.');
        return false; // Prevent form submission
    }
    // Display output
    const outputBox = document.getElementById('outputBox');
    outputBox.innerHTML = `<p><strong>Name:</strong> ${name}</p>
                           <p><strong>Birthday:</strong> ${birthday}</p>
                           <p><strong>Gender:</strong> ${gender}</p>
                           <p><strong>Message:</strong> ${message}</p>`;
}


