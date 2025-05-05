function login(event){

    event.preventDefault();

    //Get user inputs from login form
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //Get bootstrap alert from login.html
    const incorrectCredentialsAlert = document.getElementById("incorrectCredentialsAlert");
    //Create array users to be populated with every user in localStorage
    const users = [];
    let userFound = false;

    //Loop through every element in localStorage. If its key starts with "user_" then get the string value, convert into a user object and add to the users array
    for (let i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).startsWith("user_")){
            //Get user string from localStorage. Convert user back into a JavaScript object
            const user = JSON.parse(localStorage.getItem(localStorage.key(i)));
            users.push(user);
        }
    }

    //Loop through users array. Check every user in localStorage to see if the entered username and password match any of them
    for (let i=0; i < users.length; i++){

        //If the entered email and username exist in localStorage, simulate login by redirecting to home page
        if (users[i].email == email && users[i].password == password){
            userFound = true;
            incorrectCredentialsAlert.classList.add("d-none")
            window.location.replace("../index.html")
            //Set the currentUser
            localStorage.setItem("currentUser", email);
        }

    }

    //If the user isn't found after looping through every user in users array, show incorrect credentials message
    if (!userFound){
        incorrectCredentialsAlert.classList.remove("d-none");
    }
}

//Add event listener to loginForm. When the login button is clicked, login() will be called
document.getElementById("loginForm").addEventListener("submit", login);