export const comprobarTabla = () => {
    const existe = document.querySelector("table.tabla-citas")    
    if(existe) {       
        existe.remove()
    }
}