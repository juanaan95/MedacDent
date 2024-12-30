import { showCitas } from "../components/showCitas/showCitas";

export const registerCita = ({e, father}) => {
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

        const fechaCreacion = new Date();
        const anio = fechaCreacion.getFullYear();
        const mes = String(fechaCreacion.getMonth() + 1).padStart(2, '0');
        const dia = String(fechaCreacion.getDate()).padStart(2, '0');
        const hora = String(fechaCreacion.getHours()).padStart(2, '0');
        const minutos = String(fechaCreacion.getMinutes()).padStart(2, '0');
        const fechaCreacionFormateada = `${anio}-${mes}-${dia} ${hora}:${minutos}`;

        const cita = {
            fechaCreacion: fechaCreacionFormateada,
            dni: dni.value,
            nombre: nombre.value,
            apellidos: apellidos.value,
            telefono: telefono.value,
            fechaNacimiento: fechaNacimiento.value,
            fechaCita: fechaCita.value,
            horaCita: horaCita.value,
            observaciones: observaciones.value
        }
        
        const citas = JSON.parse(localStorage.getItem("citas"))
        citas.push(cita)
        localStorage.setItem("citas", JSON.stringify(citas))

        father.remove();
        showCitas();
}