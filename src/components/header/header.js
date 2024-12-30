import "./header.css"

export const Header = (father) => {
    const divHeader = document.createElement("header")

    const divContent = document.createElement("div")
    divContent.className = "header-content container"

    const divLogoTittle = document.createElement("div")
    divLogoTittle.className = "logoTittle"
    
    const tittle = document.createElement("h1")
    tittle.textContent = "MedacDent";

    const img = document.createElement("img")
    img.src = "/logo.png"

    divLogoTittle.append(img, tittle)


    const citas = document.createElement("h3")
    citas.textContent = "Sistemas de citas"

    divContent.appendChild(divLogoTittle)
    divContent.appendChild(citas)

    divHeader.append(divContent)
    father.append(divHeader)
}