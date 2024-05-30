
document.addEventListener("DOMContentLoaded", function() {
    // Check login status on page load
    updateLoginStatus();

    // Add click event listener for login/logout
    document.getElementById('login').addEventListener('click', function(event) {
        if (isLoggedIn()) {
            logout();
            updateLoginStatus();
            event.preventDefault();
        }
    });
});

function isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

function updateLoginStatus() {
    const loginLink = document.getElementById('login');
    if (isLoggedIn()) {
        loginLink.textContent = 'Desconectar';
        loginLink.href = 'login.html'; 
    } else {
        loginLink.textContent = 'Iniciar Sesión';
        loginLink.href = 'login.html';
    }
}

function logout() {
    localStorage.setItem('loggedIn', 'false');
}

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
            searchInput.value = ''; 
    }
}


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

document.getElementById('supportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    const correo = document.getElementById('correo').value;
    const nombre = document.getElementById('nombre').value;
    const mensaje = document.getElementById('mensaje').value;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z\s]{30,}$/;
    const invalidCharsRegex = /[#!<>.{}+]/;
    
    document.getElementById('correo-error').textContent = '';
    document.getElementById('nombre-error').textContent = '';
    document.getElementById('mensaje-error').textContent = '';
    

    if (!correo) {
        isValid = false;
        document.getElementById('correo-error').textContent = 'Por favor, ingrese su correo.';
    } else if (!emailRegex.test(correo)) {
        isValid = false;
        document.getElementById('correo-error').textContent = 'Ingrese un correo válido.';
    }
    if (!nombre) {
        isValid = false;
        document.getElementById('nombre-error').textContent = 'Por favor, ingrese su nombre.';
    } else if (nameRegex.test(nombre)) {
        isValid = false;
        document.getElementById('nombre-error').textContent = 'El nombre no debe contener números y debe tener más de 30 caracteres.';
    } else if (invalidCharsRegex.test(nombre)) {
        isValid = false;
        document.getElementById('nombre-error').textContent = 'El nombre contiene caracteres inválidos.';
    }
        if (!mensaje) {
        isValid = false;
        document.getElementById('mensaje-error').textContent = 'Por favor, ingrese un mensaje.';
    }
    if (isValid) {
        
    }
});
