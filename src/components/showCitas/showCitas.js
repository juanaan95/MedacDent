import { comprobarCitas } from "../../functions/comprobarCitas";
import { comprobarTabla } from "../../functions/comprobarTabla";
import { deleteCita } from "../../functions/deleteCita";
import { formUpdateCita } from "../formUpdateCita/formUpdateCita";
import "./showCitas.css";

const columns = [
    "DNI", 
    "Nombre", 
    "Apellidos", 
    "Telefono", 
    "Fecha Nacimiento",
    "Fecha Cita",
    "Hora Cita",
    "Observaciones",
    ""
]

export const showCitas = () => {

    comprobarTabla()

    const citas = comprobarCitas()

    const parentDiv = document.querySelector(".divTabla")

    const tablaCitas = document.createElement("table");
    tablaCitas.className = "tabla-citas";

    const thead = document.createElement("thead");
    const trHead = document.createElement("tr")
    for (const column of columns) {
        const campo = document.createElement("th");
        campo.scope = "col"
        campo.textContent = column;
        trHead.append(campo)
    }

    thead.append(trHead)
    tablaCitas.append(thead);

    const tbody = document.createElement("tbody")
    
    if (citas.length != 0) {
        for (const cita of citas) {
            const tr = document.createElement("tr")
            for (const key of Object.keys(cita)) {
                if (key !== "fechaCreacion") {
                    const td = document.createElement("td");
                    td.textContent = cita[key];
                    tr.append(td);
                }
            }
            
            const tdButtons = document.createElement("td");
            tdButtons.className = "delMod"
            const borrar = document.createElement("button")
            borrar.textContent = "🗑️";

            const modificar = document.createElement("button");
            modificar.textContent = "📝";

            tdButtons.append(modificar, borrar)
            tr.append(tdButtons)            
            
            tbody.append(tr)

            borrar.addEventListener("click", () => {
              deleteCita(cita.fechaCreacion)
            })

            modificar.addEventListener("click", () => {
              formUpdateCita(cita.fechaCreacion)
            })
        }
    } else {
        const tr = document.createElement("tr")
        const td = document.createElement("td");
        td.colSpan = 8;
        td.textContent = "Dato vacío";
        td.style.textAlign = "center"
        td.style.fontSize = "18px"
        tr.append(td)
        tbody.append(tr)
    }

    tablaCitas.append(tbody)

    parentDiv.append(tablaCitas);
}