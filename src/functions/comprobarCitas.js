export const comprobarCitas = () => {
    let citas = JSON.parse(localStorage.getItem("citas")) || null
    if (citas === null) {
        citas = []
        localStorage.setItem("citas", JSON.stringify(citas))
    }
    return citas
}