var buttonSubmit = document.getElementById ("button-submit");

function login() {
    var inputEmail = document.getElementById ("input-email").value;
    var inputpassword = document.getElementById ("input-password").value;
    if ((inputEmail == "cesar@pinhead.com") && (inputpassword == "1234")) {
        window.location.replace ("estoque.html")
    }
    else {
        showModal();
    }
}

buttonSubmit.addEventListener ("click", login);

function showModal() {
    var modalFailed = document.getElementById("modal-failed");
    modalFailed.classList.add("open-modal");
    var audio = document.getElementById("failed");
    audio.play();
}