function pedirContraseña() {
    const contrasenaCorrecta = "hola"; 
    let contrasenaIngresada;

    do {
        contrasenaIngresada = prompt("Introduce una contraseña", "");
        if (contrasenaIngresada === contrasenaCorrecta) {
            console.log("La contraseña correcta es " + contrasenaIngresada);
        } else {
            console.log("Contraseña incorrecta");
        }
    } while (contrasenaIngresada !== contrasenaCorrecta);
}

pedirContraseña();
