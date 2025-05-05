function register(event) {

    event.preventDefault();

    //Get the values that the user entered into the register form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Generate a unique key to store the user in local storage
    const userId = "user_" + Math.random().toString(36).substr(2, 9);

    //Create a user object
    const user = {email, password};

    //Store user in localStorage
    localStorage.setItem(userId, JSON.stringify(user));
}


//Add an event listener onto the registrationForm. When the register button is clicked, the register() function will be called
document.getElementById("registrationForm").addEventListener("submit", register);