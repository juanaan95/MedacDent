import "./main.css";
import { showCitas } from "../showCitas/showCitas.js";
import { FormCrearCita } from "../FormCrearCita/FormCrearCita.js";

export const Main = (father) => {
    const main = document.createElement("main");

    const divTabla = document.createElement("div")
    divTabla.className = "divTabla container"

    const divHeadCitas = document.createElement("div")
    divHeadCitas.className = "headerCitas"

    const h2Citas = document.createElement("h2")
    h2Citas.textContent = "Citas Programadas"
    const crearCita = document.createElement("button")
    crearCita.textContent = "Crear cita"

    crearCita.addEventListener("click", () => {
        FormCrearCita()
    })

    divHeadCitas.append(h2Citas, crearCita)

    divTabla.append(divHeadCitas)
    
    main.append(divTabla)
    father.append(main)
    
    showCitas();
}