function updatePasswordNotMatchingAlert(){
    //Get HTML elements (The value of the user inputs to password fields and the alert div) to be accessible in the JavaScript file
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const alert = document.getElementById("passwordAlert");

    if (confirmPassword !== password){
        //If the passwords DON'T match then remove the "d-none" CSS class from alert's classList. classList is a list of a HTML element's CSS classes. D-none is a CSS class that makes an element basically invisible. So this line just removes that class from the alert div, causing it to become visible. The alert tells the user that the passwords don't match.
        alert.classList.remove("d-none");
    }
    else if (confirmPassword === password){
        //If the passwords DO match then add the "d-none" CSS class to alert. This makes alert invisible again.
        alert.classList.add("d-none");
    }
}


//Add an input listener onto the confirm password field. Whenever the user types in the field, the updatePasswordNotMatchingAlert() function will be called
document.getElementById("confirmPassword").addEventListener("input", updatePasswordNotMatchingAlert);
