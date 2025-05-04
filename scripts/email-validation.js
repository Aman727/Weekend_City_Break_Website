document.getElementById("email").addEventListener("input", function () {
    if (this.checkValidity()){
        this.classList.add("is-valid");
        this.classList.remove("is-invalid");
    }
    else{
        this.classList.add("is-invalid");
        this.classList.remove("is-valid");
    }
})