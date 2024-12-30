import { showCitas } from "../components/showCitas/showCitas";

export const updateCita = ({e, father, posicionCita, citas}) => {
    e.preventDefault();
        
    const [
        dni,
        nombre,
        apellidos,
        telefono,
        fechaNacimiento,
        fechaCita,
        horaCita,
        observaciones
    ] = e.target;

    const fechaCreacion = citas[posicionCita].fechaCreacion
    
    const cita = {
        fechaCreacion: fechaCreacion,
        dni: dni.value,
        nombre: nombre.value,
        apellidos: apellidos.value,
        telefono: telefono.value,
        fechaNacimiento: fechaNacimiento.value,
        fechaCita: fechaCita.value,
        horaCita: horaCita.value,
        observaciones: observaciones.value
    }

    citas[posicionCita] = cita
    localStorage.setItem("citas", JSON.stringify(citas))

    father.remove();
    showCitas();
}