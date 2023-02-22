function showForm() {
    let form = document.getElementById("form-reserva");
    form.classList.remove("hidden");
}

function sendForm() {
    let form = document.getElementById("form-reserva");
    form.classList.add("hidden");

    let formState = document.getElementById("form-estado");
    formState.classList.remove("hidden");

    let formButton= document.querySelector(".reserva-boton");
    formButton.classList.add("hidden");

    

}