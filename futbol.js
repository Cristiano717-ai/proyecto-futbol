function cambiarPaso(pasoActual, direccion) {
    const pasoActualElement = document.getElementById(`paso-${pasoActual}`);
    const siguientePasoElement = document.getElementById(`paso-${pasoActual + direccion}`);
    if (siguientePasoElement) {
        pasoActualElement.classList.add('oculto');
        siguientePasoElement.classList.remove('oculto');
    }
}

function mostrarRutina(rutina) {
    const detalle = document.getElementById("rutina-detalle");
    const titulo = document.getElementById("titulo-rutina");
    const descripcion = document.getElementById("descripcion-rutina");

    const rutinas = {
        calentamiento: {
            titulo: "Calentamiento",
            descripcion: "5 minutos de visicleta o trote normal el estiramiento lo dejamos simpre para final.",
        },
        plitometricos: {
            titulo: "Entrenamientos Plométricos",
            descripcion: "saltod en caja.",
                         
        },
        fuerza: {
            titulo: "Ejercicios de Fuerza",
            descripcion: "Fortalece tu estabilidad con estas rutinas.",
        },
    };

    if (rutinas[rutina]) {
        titulo.textContent = rutinas[rutina].titulo;
        descripcion.textContent = rutinas[rutina].descripcion;
        detalle.classList.remove("oculto");
    } else {
        detalle.classList.add("oculto");
    }
}
