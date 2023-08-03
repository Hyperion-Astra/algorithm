document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;

    const displayDiv = document.createElement("div");
    displayDiv.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;

    document.body.appendChild(displayDiv);

    // You can also store this data on a server or perform further actions here.

    // Reset the form
    // document.getElementById("registrationForm").reset();
});
