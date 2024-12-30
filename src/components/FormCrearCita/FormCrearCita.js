import { registerCita } from "../../functions/registerCita"
import "./FormCrearCita.css"

export const FormCrearCita = () => {    
    const body = document.querySelector("body")

    const formBg = document.createElement("div")
    formBg.className = "formBg"

    const formDiv = document.createElement("div")
    formDiv.className = "formDiv"

    const tittle = document.createElement("h2")
    tittle.textContent = "Registro de Cita"

    formDiv.append(tittle)

    const hoy = new Date();    
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, '0');   
    const dia = String(hoy.getDate()).padStart(2, '0');

    const form = document.createElement("form")

    form.innerHTML = `
        <div class="fieldForm">
            <label>DNI</label>
            <input type="text" required pattern="[0-9]{8}[A-Za-z]" title="Debe contener 8 dígitos seguidos de una letra (ej: 12345678A)"></input>
        </div>
        <div class="fieldForm">
            <label>Nombre</label>
            <input type="text" required maxlength="50" title="El nombre no puede tener más de 50 caracteres"></input>
        </div>
        <div class="fieldForm">
            <label>Apellidos</label>
            <input type="text" required maxlength="100" title="Los apellidos no pueden tener más de 100 caracteres"></input>
        </div>
        <div class="fieldForm">
            <label>Telefono</label>
            <input type="tel" required pattern="[0-9]{9}" title="Debe ser un número de 9 dígitos sin espacios ni guiones"></input>
        </div>
        <div class="fieldForm">
            <label>Fecha de Nacimiento</label>
            <input type="date" required></input>
        </div>
        <div class="dateCita">
            <div class="fieldForm">
                <label>Fecha de Cita</label>
                <input type="date" required min="${anio}-${mes}-${dia}" title="La fecha de cita no puede ser anterior al día actual"></input>
            </div>
            <div class="fieldForm">
                <label>Hora</label>
                <input type="time" required ></input>
            </div>
        </div>
        <div class="fieldForm">
            <label>Observaciones</label>
            <textarea rows="4" cols="40" placeholder="Escribe las observaciones aquí..." maxlength="200" title="Máximo 200 caracteres"></textarea>
        </div>
    `;

    const divButtons = document.createElement("div")
    divButtons.className = "divButtons"

    const register = document.createElement("button")
    register.type = "submit"
    register.textContent = "Registrar"

    const reset = document.createElement("button")
    reset.type = "reset"
    reset.textContent = "Resetear"

    divButtons.append(reset, register)

    form.append(divButtons)
    
    const exit = document.createElement("button")
    exit.textContent = "X"
    exit.className = "exitButton"

    formDiv.append(form, exit)
    formBg.append(formDiv)
    body.append(formBg)

    
    form.addEventListener("submit", (e) => {
        registerCita({e, father: formBg})
    })

    exit.addEventListener("click", () => {
        formBg.remove()
    })
}