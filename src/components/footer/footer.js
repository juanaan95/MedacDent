import "./footer.css";

export const Footer = (father) => {
    const divFooter = document.createElement("footer")

    const divContent = document.createElement("div")
    divContent.className = "footer-content container"

    divContent.innerHTML = `
        <ul class="social">
            <li>MedacDent</li>
            <li>Calle Principal, 123, 41020 Sevilla, España</li>
        </ul>
        <ul class="about">
            <li>Teléfono: +34 911234567</li>
            <li>Email: info@Medacdent.com</li>
        </ul>
    `
    divFooter.appendChild(divContent)
    father.append(divFooter)
}