function BuscadorHtml(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de la manera tradicional

    var searchInput = document.getElementById('termino');
    var searchText = searchInput.value.toLowerCase();

    switch (searchText) {
        case "inicio":
            window.location.href = "index.html";
            break;
        case "trabajos":
            window.location.href = "trabajos.html";
            break;
        case "trabajadores":
            window.location.href = "trabajadores.html";
            break;
        case "ventas":
            window.location.href = "ventas.html";
            break;
        case "soporte":
            window.location.href = "soporte.html";
            break;
        default:
            searchInput.setAttribute('placeholder', 'No existe categoria');
            setTimeout(function() {
                searchInput.setAttribute('placeholder', 'Buscar por categoria');
            }, 2000);
            searchInput.value = ''; // Limpiar el campo de búsqueda
    }
}

/*Animacion .mesage para el login y registro*/ 
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});


function loguear() {
    let username = document.querySelector(".login-form input[type='email']").value;
    let password = document.querySelector(".login-form input[type='password']").value;
    let error = document.getElementById("error");

    if (username === "" || password === "") {
        error.textContent = "Por favor, completa todos los campos";
        setTimeout(function () {
            error.textContent = "";
        }, 2000);
        return;
    }

    if (password.length < 8) {
        error.textContent = "La contraseña debe ser mayor a 8 caracteres";
        document.querySelector(".login-form input[type='password']").value = "";
        setTimeout(function () {
            error.textContent = "";
        }, 2000);
        return;
    }

    if ((username === "alanbrito@gmail.com" && password === "123456789") || (username === "german@gmail.com" && password === "123456789")) {
        localStorage.setItem('loggedIn', 'true');
        window.location = "index.html";
    } else {
        error.textContent = "Los datos ingresados son incorrectos";
        document.querySelector(".login-form input[type='email']").value = "";
        document.querySelector(".login-form input[type='password']").value = "";

        setTimeout(function () {
            error.textContent = "";
        }, 2000);
    }
}