import { showCitas } from "../components/showCitas/showCitas";

export const deleteCita = (id) => {
    const citas = JSON.parse(localStorage.getItem("citas"))

    citas.splice(citas.findIndex(cita => cita.fechaCreacion === id), 1);

    localStorage.setItem("citas", JSON.stringify(citas))

    showCitas();
}